import { recordEvent, registerTaskMeta, EVENT_TYPES } from './observability.mjs';

export const roles = ['产品设计', '前端', '后端', '测试', '评审'];
export const testLevelLabels = {unit: '单元测试', integration: '联调测试', e2e: '端到端验收'};
const developmentRoles = new Set(['前端', '后端']);
const isImplementation = task => developmentRoles.has(task?.role) && task.kind !== 'contract';

export function taskStage(task) {
  if (task.review) return '评审';
  if (task.test) return testLevelLabels[task.test.level];
  if (task.role === '测试') return '测试';
  return isImplementation(task) ? '编码' : '设计与契约';
}

function check(condition, message) {
  if (!condition) throw new Error(message);
}

function present(value) {
  return typeof value === 'string' && Boolean(value.trim());
}

export function validate(plan) {
  check(present(plan?.project), '缺少项目名称');
  check(Array.isArray(plan.requirements) && plan.requirements.length > 0, '缺少需求');
  check(Array.isArray(plan.tasks) && plan.tasks.length >= 2 && plan.tasks.length <= 40, '任务数量应在 2 至 40 之间');
  const requirements = new Set();
  for (const req of plan.requirements) {
    check(/^R\d+$/.test(req.id) && !requirements.has(req.id) && present(req.text) && present(req.acceptance), '需求编号重复、无效或缺少验收标准');
    requirements.add(req.id);
  }
  const tasksById = new Map();
  const covered = new Set();
  const tested = new Set();
  for (const task of plan.tasks) {
    check(/^T\d+$/.test(task.id) && !tasksById.has(task.id), '任务编号重复或无效');
    check(present(task.title) && present(task.acceptance) && roles.includes(task.role), task.id + ' 缺少任务名称、角色或验收标准');
    check(Array.isArray(task.requirements) && task.requirements.length > 0 && task.requirements.every(id => requirements.has(id)), task.id + ' 引用了未知需求');
    for (const id of task.requirements) {
      if (task.role === '测试') tested.add(id);
      else covered.add(id);
    }
    check(Array.isArray(task.inputs) && task.inputs.every(present) && present(task.output), task.id + ' 的输入或交付物无效');
    tasksById.set(task.id, task);
  }
  for (const task of plan.tasks) {
    if (task.review !== undefined || task.role === '评审') {
      const target = tasksById.get(task.review?.target);
      check(task.role === '评审' && isImplementation(target) && task.inputs.includes(target.output),
        task.id + ' 的评审必须关联对应的编码交付物');
    }
    if (task.test === undefined) continue;
    const {level, targets} = task.test ?? {};
    check(task.role === '测试' && Object.hasOwn(testLevelLabels, level) && Array.isArray(targets) &&
      new Set(targets).size === targets.length && targets.length >= (level === 'integration' ? 2 : 1) &&
      (level !== 'unit' || targets.length === 1), task.id + ' 的测试层次或实现目标无效');
    check(targets.every(id => {
      const target = tasksById.get(id);
      return isImplementation(target) && task.inputs.includes(target.output);
    }), task.id + ' 必须依赖其测试目标的实现交付物');
    if (task.test.cases !== undefined) {
      check(Array.isArray(task.test.cases) && task.test.cases.length > 0 &&
        new Set(task.test.cases).size === task.test.cases.length &&
        task.test.cases.every(id => /^TC[1-9]\d*$/.test(id)), task.id + ' 的测试用例编号无效');
    }
  }
  check([...requirements].every(id => covered.has(id) && tested.has(id)), '每条需求都应有非测试任务和测试任务覆盖');
}

export function addTestTasks(plan) {
  const development = plan?.tasks;
  check(Array.isArray(development) && development.length >= 1 && development.length <= 8 &&
    development.every(task => task && roles.slice(0, 3).includes(task.role) && task.test === undefined &&
      task.review === undefined && (task.kind === undefined || task.kind === 'contract') && Array.isArray(task.inputs)),
    '请拆出 1 至 8 项设计或编码任务，测试和评审由编排器补齐');
  check(Array.isArray(plan.requirements) && plan.requirements.length > 0, '缺少需求');
  const implementations = development.filter(isImplementation);
  check(implementations.length > 0, '至少需要一项可独立测试的前端或后端实现任务');
  const ids = new Set(development.map(task => task.id));
  const outputs = new Set(development.map(task => task.output));
  const producers = new Map(development.map(task => [task.output, task]));
  let nextId = 1;

  function allocate(prefix) {
    while (ids.has('T' + nextId)) nextId++;
    const id = 'T' + nextId++;
    let output = prefix + id;
    while (outputs.has(output)) output += '_report';
    outputs.add(output);
    return {id, output};
  }

  function makeTest(level, suffix, targets, inputs, acceptance) {
    const designs = [...new Set(targets.flatMap(task => task.designs || []))];
    return {
      ...allocate('test_result_'), title: testLevelLabels[level] + ' · ' + suffix, role: '测试', inputs, acceptance,
      requirements: [...new Set(targets.flatMap(task => task.requirements))],
      ...(designs.length ? {designs} : {}),
      test: {level, targets: targets.filter(isImplementation).map(task => task.id)},
    };
  }

  const unit = new Map(implementations.map(task => [task.id, makeTest('unit', task.title, [task], [task.output],
    '隔离验证 ' + task.id + ' 的行为，检查正常输入、边界和异常：' + task.acceptance)]));
  const reviews = new Map(implementations.map(task => [task.id, {
    ...allocate('review_result_'), title: '代码评审 · ' + task.title, role: '评审', inputs: [task.output],
    acceptance: '核对实现与设计契约、边界处理和可维护性；记录结论、证据及需修正的问题',
    requirements: task.requirements, ...(task.designs ? {designs: task.designs} : {}), review: {target: task.id},
  }]));
  const integrations = new Map();
  function addIntegration(targets, suffix, acceptance) {
    const key = targets.map(task => task.id).sort().join(',');
    if (integrations.has(key)) return;
    integrations.set(key, makeTest('integration', suffix, targets,
      targets.flatMap(target => [target.output, unit.get(target.id).output]), acceptance));
  }
  for (const task of implementations) {
    const upstream = [...new Set(task.inputs.map(input => producers.get(input)))].filter(parent =>
      unit.has(parent?.id) && parent !== task);
    if (!upstream.length) continue;
    addIntegration([...upstream, task], task.title,
      '验证 ' + upstream.map(target => target.id).join('、') + ' → ' + task.id + ' 的接口、数据传递和异常处理');
  }
  for (const contract of development.filter(task => !isImplementation(task))) {
    const targets = implementations.filter(task => task.inputs.includes(contract.output));
    if (targets.length < 2) continue;
    addIntegration(targets, contract.title,
      '核对 ' + targets.map(task => task.id).join('、') + ' 对共享契约的实际交接、数据一致性和异常处理');
  }

  const tasks = development.flatMap(task => {
    const inputs = new Set(task.inputs);
    for (const input of task.inputs) {
      const parent = producers.get(input)?.id;
      if (unit.has(parent)) inputs.add(unit.get(parent).output);
    }
    return [{...task, inputs: [...inputs]}, ...[unit.get(task.id), reviews.get(task.id)].filter(Boolean)];
  });
  tasks.push(...integrations.values());
  const end = makeTest('e2e', '全流程', development, tasks.map(task => task.output),
    '核对关键用户流程、业务异常、联调报告及各模块的评审结论');
  end.requirements = plan.requirements.map(req => req.id);
  return {...plan, tasks: [...tasks, end]};
}

export function serialImplementationChain(tasks) {
  const implementations = tasks.filter(isImplementation);
  if (implementations.length < 3) return [];
  const producers = new Map(tasks.map(task => [task.output, task]));
  function ancestors(task) {
    const seen = new Set();
    const pending = task.inputs.map(input => producers.get(input));
    while (pending.length) {
      const parent = pending.pop();
      if (!parent || seen.has(parent.id)) continue;
      seen.add(parent.id);
      pending.push(...parent.inputs.map(input => producers.get(input)));
    }
    return seen;
  }
  const ordered = implementations.map(task => ({task, parents: ancestors(task)}))
    .sort((a, b) => a.parents.size - b.parents.size);
  return ordered.every((item, index) => index === 0 || item.parents.has(ordered[index - 1].task.id))
    ? ordered.map(item => item.task.id) : [];
}

// 批次顺序：先排下游链最长的任务，让关键路径尽早开工；同深度按计划顺序，保证结果稳定。
function downstreamPriority(plan, dependencies) {
  const children = new Map(plan.tasks.map(task => [task.id, []]));
  for (const task of plan.tasks) for (const parent of dependencies[task.id]) children.get(parent).push(task.id);
  const heights = new Map();
  function height(id) {
    if (heights.has(id)) return heights.get(id);
    heights.set(id, 0);
    let value = 1;
    for (const child of children.get(id)) value = Math.max(value, 1 + height(child));
    heights.set(id, value);
    return value;
  }
  const position = new Map(plan.tasks.map((task, index) => [task.id, index]));
  return (a, b) => height(b) - height(a) || position.get(a) - position.get(b);
}

// 编排结果自校验：批次划分、依赖顺序与交付边必须互相一致，回退闭包和批次标注都以此为前提。
export function validateArrangement(plan, arrangement) {
  const tasks = new Map(plan.tasks.map(task => [task.id, task]));
  check(Number.isInteger(arrangement?.capacity) && arrangement.capacity >= 1 && arrangement.capacity <= 8,
    '执行批次的并行上限无效');
  check(Array.isArray(arrangement.rounds) && arrangement.rounds.length > 0, '缺少执行批次');
  const batchOf = new Map();
  arrangement.rounds.forEach((batch, index) => {
    check(Array.isArray(batch) && batch.length > 0 && batch.length <= arrangement.capacity,
      '第 ' + (index + 1) + ' 批为空或超过并行上限');
    for (const id of batch) {
      check(tasks.has(id) && !batchOf.has(id), '批次中的任务编号重复或无效：' + id);
      batchOf.set(id, index);
    }
  });
  check(batchOf.size === tasks.size, '有任务未进入执行批次');
  const dependencies = arrangement.dependencies;
  check(dependencies && typeof dependencies === 'object' && !Array.isArray(dependencies), '缺少任务依赖');
  for (const task of plan.tasks) {
    const parents = dependencies[task.id];
    check(Array.isArray(parents) && new Set(parents).size === parents.length,
      task.id + ' 的前置任务重复或无效');
    check(parents.every(id => tasks.has(id) && id !== task.id), task.id + ' 引用了无效或自身的前置任务');
    check(parents.every(id => batchOf.get(id) < batchOf.get(task.id)), task.id + ' 的前置任务不在更早的批次');
  }
  check(Object.keys(dependencies).length === tasks.size, '任务依赖与任务清单不一致');
  check(Array.isArray(arrangement.edges), '缺少交付边');
  const covered = new Set();
  for (const edge of arrangement.edges) {
    check(tasks.has(edge?.from) && tasks.has(edge?.to) && present(edge.artifact) &&
      dependencies[edge.to].includes(edge.from), '交付边与任务依赖不一致');
    covered.add(edge.from + '>' + edge.to);
  }
  for (const task of plan.tasks) {
    for (const parent of dependencies[task.id]) {
      check(covered.has(parent + '>' + task.id), '前置任务缺少交付边：' + parent + ' → ' + task.id);
    }
  }
}

export function schedule(plan, capacity) {
  check(Number.isInteger(capacity) && capacity >= 1 && capacity <= 8, '并行上限须在 1 至 8 之间');
  validate(plan);
  const producers = new Map();
  for (const task of plan.tasks) {
    check(!producers.has(task.output), '交付物有多个生产任务：' + task.output);
    producers.set(task.output, task.id);
  }
  // 依赖与交付边同源生成：编排补齐的前置也一定画出边，任务图、前置清单与执行门禁保持一致。
  const dependencies = {};
  const artifacts = new Map();
  for (const task of plan.tasks) {
    const inputs = new Set(task.inputs);
    if (task.role === '测试' && !task.test) {
      for (const implementation of plan.tasks) {
        if (implementation.role !== '测试' &&
          implementation.requirements.some(id => task.requirements.includes(id))) {
          inputs.add(implementation.output);
        }
      }
    }
    const parents = new Map();
    for (const input of inputs) {
      const from = producers.get(input);
      check(from, task.id + ' 的输入缺少生产任务：' + input);
      check(from !== task.id, task.id + ' 依赖自己的交付物');
      if (!parents.has(from)) parents.set(from, input);
    }
    artifacts.set(task.id, parents);
    dependencies[task.id] = [...parents.keys()];
  }
  const edges = plan.tasks.flatMap(task => [...artifacts.get(task.id)]
    .map(([from, artifact]) => ({from, to: task.id, artifact})));
  const priority = downstreamPriority(plan, dependencies);
  const completed = new Set();
  const rounds = [];
  while (completed.size < plan.tasks.length) {
    const ready = plan.tasks.filter(task => !completed.has(task.id) &&
      dependencies[task.id].every(id => completed.has(id))).map(task => task.id).sort(priority);
    check(ready.length > 0, '检测到循环依赖，剩余任务：' +
      plan.tasks.filter(task => !completed.has(task.id)).map(task => task.id).join('、'));
    const batch = ready.slice(0, capacity);
    rounds.push(batch);
    for (const id of batch) completed.add(id);
  }
  const arrangement = {capacity, rounds, dependencies, edges};
  validateArrangement(plan, arrangement);
  // 批次记录点：批次计算完成后写入，不插入计算中间。
  for (const task of plan.tasks) registerTaskMeta(task.id, task);
  recordEvent({event_type: EVENT_TYPES.BATCH_PLANNED,
    batch_ids: rounds.map((_, index) => 'B' + (index + 1)),
    evidence_ref: 'arrangement.rounds', actor: 'system'});
  return arrangement;
}
