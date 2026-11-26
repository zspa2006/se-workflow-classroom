import { recordEvent, registerTaskCases, EVENT_TYPES } from './observability.mjs';

function check(condition, message) {
  if (!condition) throw new Error(message);
}

function text(value, limit = 500) {
  return typeof value === 'string' && value.trim() && value.length <= limit;
}

function entries(list, prefix, label, limit = 12) {
  check(Array.isArray(list) && list.length > 0 && list.length <= limit, label + '需要 1 至 ' + limit + ' 个条目');
  const ids = new Set();
  for (const item of list) {
    check(typeof item?.id === 'string' && new RegExp('^' + prefix + '[1-9]\\d*$').test(item.id) &&
      !ids.has(item.id), label + '条目编号无效或重复');
    ids.add(item.id);
  }
  return ids;
}

function references(ids, available) {
  return Array.isArray(ids) && ids.length > 0 && new Set(ids).size === ids.length &&
    ids.every(id => available.has(id));
}

export function validateRequirements(document) {
  check(text(document?.project, 120) && text(document.goal) && text(document.scope), '需求规格缺少项目名称、目标或范围');
  entries(document.requirements, 'R', '需求规格');
  for (const req of document.requirements) {
    check(text(req.text) && text(req.acceptance), req.id + ' 缺少需求描述或可验证的验收条件');
  }
}

export function validateDesign(design, requirements) {
  validateRequirements(requirements);
  check(text(design?.summary, 1000), '设计规格缺少总体设计');
  entries(design.components, 'D', '设计规格');
  const known = new Set(requirements.requirements.map(req => req.id));
  const covered = new Set();
  for (const part of design.components) {
    check(text(part.title, 120) && text(part.design, 800) && text(part.contract, 600),
      part.id + ' 缺少模块名称、实现设计或接口与数据约定');
    check(references(part.requirements, known), part.id + ' 引用了不存在或重复的需求编号');
    for (const id of part.requirements) covered.add(id);
  }
  check(covered.size === known.size, '存在尚未关联设计模块的需求');
}

export function validateTaskLinks(plan, design) {
  const components = new Map(design.components.map(part => [part.id, part]));
  const development = new Set();
  const tests = new Set();
  for (const task of plan.tasks) {
    check(references(task.designs, components), task.id + ' 需要关联有效的设计编号');
    const implied = new Set(task.designs.flatMap(id => components.get(id).requirements));
    check(task.requirements.every(id => implied.has(id)), task.id + ' 的需求编号超出关联设计覆盖的范围');
    check(task.designs.every(id => components.get(id).requirements.some(req => task.requirements.includes(req))),
      task.id + ' 的关联设计和需求需要有交集');
    const target = task.role === '测试' ? tests : development;
    for (const id of task.designs) target.add(id);
  }
  check(development.size === components.size && tests.size === components.size,
    '每项设计都需要开发任务和验收测试');
}

export function assignTestCases(design, plan) {
  const testers = plan.tasks.filter(task => task.role === '测试');
  const assignments = testers.map((task, index) => ({
    id: 'TC' + (index + 1), task: task.id, requirements: task.requirements,
    ...(design ? {design: task.designs[0], designs: task.designs} : {}),
  }));
  // TC→T 登记记录点：供 ATTEMPT 的 failed_tc_ids 使用。
  for (const item of assignments) registerTaskCases(item.task, item.id);
  recordEvent({event_type: EVENT_TYPES.TEST_CASES_ASSIGNED,
    entity_ref: assignments.map(item => item.id).join(','), affected_task_ids: assignments.map(item => item.task),
    tc_id: assignments.map(item => item.id).join(','),
    evidence_ref: 'pipeline.assignTestCases', actor: 'system'});
  return assignments;
}

export function bindTestCases(value, assignments) {
  entries(value?.cases, 'TC', '测试方案', 48);
  const given = new Map(value.cases.map(item => [item.id, item]));
  check(given.size === assignments.length && assignments.every(item => given.has(item.id)),
    '测试用例编号必须与分配清单完全一致');
  return {strategy: value.strategy, cases: assignments.map(item => {
    const {title, setup, steps, expected} = given.get(item.id);
    return {...item, title, setup, steps, expected};
  })};
}

export function validateTestPlan(value, design, plan) {
  check(text(value?.strategy, 1000), '测试方案缺少范围与方法');
  entries(value.cases, 'TC', '测试方案', 48);
  const designById = new Map((design?.components ?? []).map(part => [part.id, part]));
  const testers = new Map(plan.tasks.filter(task => task.role === '测试').map(task => [task.id, task]));
  const coveredRequirements = new Set();
  const coveredDesigns = new Set();
  const coveredTasks = new Set();
  for (const test of value.cases) {
    const task = testers.get(test.task);
    const parts = test.designs ?? (test.design ? [test.design] : []);
    check(task && (design ? references(parts, designById) && parts[0] === test.design &&
      parts.every(id => task.designs.includes(id)) : !parts.length && test.design === undefined),
      test.id + ' 的设计编号与测试任务不匹配');
    const applicable = new Set(parts.flatMap(id => designById.get(id).requirements));
    check(references(test.requirements, new Set(task.requirements.filter(id => !design || applicable.has(id)))) &&
      parts.every(id => designById.get(id).requirements.some(req => test.requirements.includes(req))),
      test.id + ' 引用了与设计或测试任务无关的需求');
    check(text(test.title, 120) && text(test.setup) && text(test.expected) && Array.isArray(test.steps) &&
      test.steps.length > 0 && test.steps.length <= 10 && test.steps.every(step => text(step, 300)),
      test.id + ' 缺少标题、前置条件、可执行步骤或预期结果');
    test.requirements.forEach(id => coveredRequirements.add(id));
    parts.forEach(id => coveredDesigns.add(id));
    coveredTasks.add(task.id);
  }
  check(plan.requirements.every(req => coveredRequirements.has(req.id)), '存在未被用例覆盖的需求');
  check(coveredDesigns.size === designById.size && coveredTasks.size === testers.size,
    '每项设计及测试任务都需要关联测试用例');
  for (const task of testers.values()) {
    if (!task.test?.cases) continue;
    const cases = value.cases.filter(test => test.task === task.id);
    const ids = cases.map(test => test.id);
    check(ids.length === task.test.cases.length && task.test.cases.every(id => ids.includes(id)),
      task.id + ' 的用例清单与测试方案不一致');
    const covered = new Set(cases.flatMap(test => test.requirements));
    check(task.requirements.every(id => covered.has(id)), task.id + ' 的用例未覆盖任务的全部需求');
  }
}

export function bindTestTasks(plan, testPlan) {
  return {...plan, tasks: plan.tasks.map(task => task.test ? {
    ...task, test: {...task.test, cases: testPlan.cases.filter(item => item.task === task.id).map(item => item.id)},
  } : task)};
}

export function designMarkdown(requirements, design) {
  const lines = ['# ' + requirements.project + ' · 设计规格', '', '## 总体设计', '', design.summary, '',
    '## 模块设计', ''];
  for (const part of design.components) {
    lines.push('### ' + part.id + ' · ' + part.title, '', '关联需求：' + part.requirements.join('、'), '',
      part.design, '', '接口与数据约定：' + part.contract, '');
  }
  return lines.join('\n');
}

export function designFeedback(design, plan, arrangement) {
  const batchOf = new Map(arrangement.rounds.flatMap((ids, index) => ids.map(id => [id, index + 1])));
  return design.components.map(part => ({
    ...part,
    tasks: plan.tasks.filter(task => task.designs.includes(part.id)).map(task => ({
      id: task.id, title: task.title, role: task.role, batch: batchOf.get(task.id),
      output: task.output, acceptance: task.acceptance, predecessors: arrangement.dependencies[task.id],
    })),
  }));
}
