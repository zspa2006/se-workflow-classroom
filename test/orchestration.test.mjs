import assert from 'node:assert/strict';
import test from 'node:test';
import { addTestTasks, schedule, validateArrangement } from '../workflow.mjs';
import { rollbackScope, rollbackTask, taskState, transition, validateRuntime } from '../interaction.mjs';
import { rollbackCausality } from '../graph/batches.mjs';

const requirements = [
  { id: 'R1', text: '展示并提交行程', acceptance: '拒绝无效的行程' },
  { id: 'R2', text: '导出景点', acceptance: '表格包含全部景点' },
];

// 共享契约分出两条编码分支：既有并行，也有串接，覆盖单测门禁、评审与联调。
function branchedPlan() {
  return addTestTasks({ project: '行程工作台', requirements, tasks: [
    { id: 'T1', title: '约定行程接口', role: '后端', kind: 'contract', requirements: ['R1', 'R2'],
      inputs: [], output: 'contract', acceptance: '接口类型和错误码明确' },
    { id: 'T2', title: '实现行程校验', role: '后端', requirements: ['R1'], inputs: ['contract'],
      output: 'validator', acceptance: '拒绝负数时长' },
    { id: 'T3', title: '实现编辑页', role: '前端', requirements: ['R1'], inputs: ['contract', 'validator'],
      output: 'editor', acceptance: '展示校验提示' },
    { id: 'T4', title: '实现景点导出', role: '后端', requirements: ['R2'], inputs: ['contract'],
      output: 'csv', acceptance: '导出景点名称' },
    { id: 'T5', title: '实现导出页', role: '前端', requirements: ['R2'], inputs: ['contract', 'csv'],
      output: 'export-ui', acceptance: '下载导出的表格' },
  ] });
}

// 一条 4 级实现链 + 4 个独立任务：按计划顺序排批会浪费并行位，按关键路径优先可排满。
function chainAndLeavesPlan() {
  return {
    project: '关键路径', requirements: requirements.slice(0, 1),
    tasks: [
      { id: 'T5', title: '独立任务一', role: '后端', requirements: ['R1'], inputs: [], output: 'e', acceptance: '交付' },
      { id: 'T6', title: '独立任务二', role: '前端', requirements: ['R1'], inputs: [], output: 'f', acceptance: '交付' },
      { id: 'T7', title: '独立任务三', role: '后端', requirements: ['R1'], inputs: [], output: 'g', acceptance: '交付' },
      { id: 'T8', title: '独立任务四', role: '前端', requirements: ['R1'], inputs: [], output: 'h', acceptance: '交付' },
      { id: 'T1', title: '链路一', role: '后端', requirements: ['R1'], inputs: [], output: 'a', acceptance: '交付' },
      { id: 'T2', title: '链路二', role: '前端', requirements: ['R1'], inputs: ['a'], output: 'b', acceptance: '交付' },
      { id: 'T3', title: '链路三', role: '后端', requirements: ['R1'], inputs: ['b'], output: 'c', acceptance: '交付' },
      { id: 'T4', title: '链路四', role: '前端', requirements: ['R1'], inputs: ['c'], output: 'd', acceptance: '交付' },
      { id: 'T9', title: '整体验证', role: '测试', requirements: ['R1'], inputs: [], output: 'report', acceptance: '验收' },
    ],
  };
}

// 两条互不依赖的分支，用于验证回退不会波及无关任务。
function twoBranchPlan() {
  return addTestTasks({ project: '双分支', requirements, tasks: [
    { id: 'T1', title: '实现行程接口', role: '后端', requirements: ['R1'], inputs: [], output: 'api', acceptance: '交付接口' },
    { id: 'T2', title: '实现行程页', role: '前端', requirements: ['R1'], inputs: ['api'], output: 'page', acceptance: '交付页面' },
    { id: 'T3', title: '实现统计接口', role: '后端', requirements: ['R2'], inputs: [], output: 'stats', acceptance: '交付统计' },
    { id: 'T4', title: '实现统计图', role: '前端', requirements: ['R2'], inputs: ['stats'], output: 'chart', acceptance: '交付图表' },
  ] });
}

const unitOf = (plan, id) => plan.tasks.find(task => task.test?.level === 'unit' && task.test.targets[0] === id);
const reviewOf = (plan, id) => plan.tasks.find(task => task.review?.target === id);
const endToEndOf = plan => plan.tasks.find(task => task.test?.level === 'e2e');

function planOrderBatchCount(plan, dependencies, capacity) {
  const done = new Set();
  let batches = 0;
  while (done.size < plan.tasks.length) {
    const ready = plan.tasks.filter(task => !done.has(task.id) &&
      dependencies[task.id].every(parent => done.has(parent)));
    for (const task of ready.slice(0, capacity)) done.add(task.id);
    batches++;
  }
  return batches;
}

// 按批次推进：可开始的任务全部执行；失败的检查点报告失败，其下游保持等待。
function runRounds(plan, arrangement, failed = []) {
  let runtime = {};
  for (let pass = 0; pass < plan.tasks.length; pass++) {
    let progressed = false;
    for (const id of arrangement.rounds.flat()) {
      if (taskState(id, runtime, arrangement) !== 'ready') continue;
      runtime[id] = transition(id, 'start', '开始执行', runtime, arrangement);
      runtime[id] = transition(id, failed.includes(id) ? 'fail' : 'complete', '记录结果', runtime, arrangement);
      progressed = true;
    }
    if (!progressed) break;
  }
  return runtime;
}

test('批次划分覆盖全部任务、不超并行上限、前置总在更早批次', () => {
  const plan = branchedPlan();
  for (let capacity = 1; capacity <= 8; capacity++) {
    const arrangement = schedule(plan, capacity);
    assert.doesNotThrow(() => validateArrangement(plan, arrangement));
    const flattened = arrangement.rounds.flat();
    assert.equal(flattened.length, plan.tasks.length);
    assert.equal(new Set(flattened).size, plan.tasks.length);
    arrangement.rounds.forEach((batch, index) => {
      assert(batch.length >= 1 && batch.length <= capacity);
      for (const id of batch) {
        for (const parent of arrangement.dependencies[id]) {
          assert(arrangement.rounds.findIndex(item => item.includes(parent)) < index,
            parent + ' 应在 ' + id + ' 之前批次');
        }
      }
    });
  }
});

test('按批次推进时每批开始时任务可开始，且批次排满才顺延', () => {
  const plan = branchedPlan();
  for (const capacity of [1, 2, 4]) {
    const arrangement = schedule(plan, capacity);
    let runtime = {};
    const done = new Set();
    arrangement.rounds.forEach((batch, index) => {
      const ready = plan.tasks.filter(task => !done.has(task.id) &&
        arrangement.dependencies[task.id].every(parent => done.has(parent))).map(task => task.id);
      assert(batch.every(id => ready.includes(id)), '第 ' + (index + 1) + ' 批只能包含当前可开始的任务');
      assert.equal(batch.length, Math.min(capacity, ready.length),
        '第 ' + (index + 1) + ' 批应按并行上限排满');
      for (const id of batch) assert.equal(taskState(id, runtime, arrangement), 'ready');
      for (const id of batch) {
        runtime[id] = transition(id, 'start', '批次执行', runtime, arrangement);
        runtime[id] = transition(id, 'complete', '交付记录', runtime, arrangement);
        done.add(id);
      }
      validateRuntime(JSON.parse(JSON.stringify(runtime)), plan, arrangement);
    });
    assert.equal(Object.values(runtime).filter(record => record.status === 'done').length, plan.tasks.length);
  }
});

test('关键路径优先让批次排满，总批次数不劣于按计划顺序排批', () => {
  const plan = chainAndLeavesPlan();
  const arrangement = schedule(plan, 2);
  assert.doesNotThrow(() => validateArrangement(plan, arrangement));
  const naive = planOrderBatchCount(plan, arrangement.dependencies, 2);
  assert.equal(naive, 7);
  assert.equal(arrangement.rounds.length, 5);
  assert.deepEqual(arrangement.rounds.map(batch => batch.length), [2, 2, 2, 2, 1]);
  // 同样输入重复编排结果稳定，批次标注可以复现。
  assert.deepEqual(schedule(plan, 2).rounds, arrangement.rounds);
});

test('编排补齐的前置任务同样出现在交付边里，任务图与执行门禁一致', () => {
  const plan = chainAndLeavesPlan();
  const arrangement = schedule(plan, 4);
  const verification = arrangement.dependencies.T9;
  assert.equal(verification.length, 8);
  for (const parent of verification) {
    const edge = arrangement.edges.find(item => item.from === parent && item.to === 'T9');
    assert(edge, parent + ' → T9 缺少交付边');
    assert.equal(edge.artifact, plan.tasks.find(task => task.id === parent).output);
  }
  for (const task of plan.tasks) {
    for (const parent of arrangement.dependencies[task.id]) {
      assert(arrangement.edges.some(edge => edge.from === parent && edge.to === task.id));
    }
  }
});

test('篡改或过期的批次编排会被拒绝', () => {
  const plan = { tasks: [{ id: 'A' }, { id: 'B' }] };
  const base = { capacity: 2, rounds: [['A'], ['B']], dependencies: { A: [], B: ['A'] },
    edges: [{ from: 'A', to: 'B', artifact: 'x' }] };
  assert.doesNotThrow(() => validateArrangement(plan, base));
  const cases = [
    [{ ...base, capacity: 9 }, /并行上限/],
    [{ ...base, capacity: 0 }, /并行上限/],
    [{ ...base, rounds: [] }, /缺少执行批次/],
    [{ ...base, rounds: [['A'], []] }, /为空或超过并行上限/],
    [{ ...base, rounds: [['A', 'A'], ['B']] }, /重复或无效/],
    [{ ...base, rounds: [['A', 'B']] }, /前置任务不在更早的批次/],
    [{ ...base, rounds: [['B'], ['A']] }, /前置任务不在更早的批次/],
    [{ ...base, edges: [] }, /前置任务缺少交付边/],
    [{ ...base, edges: [{ from: 'B', to: 'A', artifact: 'x' }] }, /交付边与任务依赖不一致/],
    [{ ...base, edges: [{ from: 'A', to: 'B', artifact: '' }] }, /交付边与任务依赖不一致/],
    [{ ...base, dependencies: { A: [], B: ['A'], C: [] } }, /任务依赖与任务清单不一致/],
    [{ ...base, dependencies: { A: [], B: ['A', 'A'] } }, /前置任务重复或无效/],
    [{ ...base, dependencies: { A: [], B: ['B'] } }, /无效或自身的前置任务/],
  ];
  for (const [arrangement, pattern] of cases) {
    assert.throws(() => validateArrangement(plan, arrangement), pattern);
  }
  const merged = { ...base, capacity: 1, rounds: [['A', 'B']] };
  assert.throws(() => validateArrangement(plan, merged), /超过并行上限/);
});

test('编排器拒绝无效并行上限、重复交付物、自依赖和循环依赖', () => {
  const plan = chainAndLeavesPlan();
  for (const capacity of [0, 9, 1.5, '2']) assert.throws(() => schedule(plan, capacity), /并行上限/);
  const duplicate = { ...plan, tasks: plan.tasks.map(task => task.id === 'T9' ?
    { ...task, output: 'a' } : task) };
  assert.throws(() => schedule(duplicate, 2), /多个生产任务/);
  const selfParent = { ...plan, tasks: plan.tasks.map(task => task.id === 'T1' ?
    { ...task, inputs: ['a'] } : task) };
  assert.throws(() => schedule(selfParent, 2), /依赖自己的交付物/);
  const cyclic = { ...plan, tasks: [
    { ...plan.tasks[4], inputs: ['b'] },
    { ...plan.tasks[5], inputs: ['a'] },
    plan.tasks[8],
  ] };
  assert.throws(() => schedule(cyclic, 2), /循环依赖/);
});

test('回退只重置目标与全部下游，无关分支与历史记录保持原样', () => {
  const plan = twoBranchPlan();
  const arrangement = schedule(plan, 3);
  const review = reviewOf(plan, 'T1');
  const runtime = runRounds(plan, arrangement, [review.id]);
  const unaffected = ['T3', unitOf(plan, 'T3').id, reviewOf(plan, 'T3').id, 'T4',
    unitOf(plan, 'T4').id, reviewOf(plan, 'T4').id];
  const affected = new Set(rollbackScope('T1', arrangement));
  assert(affected.has('T2') && affected.has(review.id) && affected.has(endToEndOf(plan).id));
  assert(!affected.has('T3') && !affected.has('T4'));

  const update = rollbackTask(review, 'T1', '缺少输入边界判断', runtime, arrangement);
  assert.deepEqual(update.affected, [...affected]);
  assert.equal(update.runtime.T1.status, 'failed');
  for (const id of affected) {
    assert.equal(taskState(id, update.runtime, arrangement), 'pending', id + ' 应等待重验');
    if (runtime[id]) assert.equal(update.runtime[id].status, 'pending');
  }
  for (const id of unaffected) {
    assert.equal(update.runtime[id], runtime[id], id + ' 无关分支不应被改写');
    assert.equal(taskState(id, update.runtime, arrangement), 'done');
  }
  // 历史不被覆盖：旧记录保留，新记录标明回退轮次与检查点。
  assert.equal(update.runtime.T1.notes.length, runtime.T1.notes.length + 1);
  assert.deepEqual(update.runtime.T1.notes.slice(0, -1), runtime.T1.notes);
  const note = update.runtime.T1.notes.at(-1);
  assert.equal(note.action, 'rollback');
  assert.equal(note.test, review.id);
  assert.match(note.rollbackId, /^RB-T1-\d+$/);
  assert(update.runtime.T2.notes.at(-1).rollbackId === note.rollbackId);
  validateRuntime(JSON.parse(JSON.stringify(update.runtime)), plan, arrangement);
});

test('同一毫秒内的两轮回退按轮次区分因果，不互相串台', () => {
  const plan = twoBranchPlan();
  const arrangement = schedule(plan, 3);
  const review = reviewOf(plan, 'T1');
  const unit = unitOf(plan, 'T3');
  const runtime = runRounds(plan, arrangement, [review.id, unit.id]);
  const realDate = globalThis.Date;
  const fixed = '2026-01-01T00:00:00.000Z';
  globalThis.Date = class extends realDate {
    constructor(...args) { super(...(args.length ? args : [fixed])); }
    static now() { return new realDate(fixed).getTime(); }
  };
  let rolled;
  let before;
  let beforeSecond;
  try {
    before = Object.keys(runtime);
    const first = rollbackTask(review, 'T1', '第一次回退', runtime, arrangement);
    beforeSecond = Object.keys(first.runtime);
    rolled = rollbackTask(unit, 'T3', '第二次回退', first.runtime, arrangement).runtime;
  } finally {
    globalThis.Date = realDate;
  }
  assert.notEqual(rolled.T1.notes.at(-1).rollbackId, rolled.T3.notes.at(-1).rollbackId);
  const causality = new Map(rollbackCausality(rolled).map(item => [item.taskId, item]));
  assert.deepEqual(causality.get('T1').invalidated,
    rollbackScope('T1', arrangement).filter(id => before.includes(id)).sort());
  assert.deepEqual(causality.get('T3').invalidated,
    rollbackScope('T3', arrangement).filter(id => beforeSecond.includes(id)).sort());
  assert(!causality.get('T1').invalidated.includes('T3'));
  assert(!causality.get('T3').invalidated.includes('T1'));
  validateRuntime(JSON.parse(JSON.stringify(rolled)), plan, arrangement);
});

test('回退后按前置关系重跑：目标修复才解锁单测门禁，无关任务不需重跑', () => {
  const plan = twoBranchPlan();
  const arrangement = schedule(plan, 3);
  const review = reviewOf(plan, 'T1');
  const update = rollbackTask(review, 'T1', '缺少边界处理', runRounds(plan, arrangement, [review.id]),
    arrangement);
  const runtime = update.runtime;
  assert.throws(() => rollbackTask(review, 'T1', '目标尚未修复', runtime, arrangement), /失败待处理/);
  assert.throws(() => transition('T2', 'start', '提前重跑', runtime, arrangement), /不支持/);
  runtime.T1 = transition('T1', 'retry', '开始修复', runtime, arrangement);
  runtime.T1 = transition('T1', 'complete', '交付新实现', runtime, arrangement);
  const unit = unitOf(plan, 'T1').id;
  assert.equal(taskState(unit, runtime, arrangement), 'ready');
  assert.equal(taskState('T2', runtime, arrangement), 'pending');
  runtime[unit] = transition(unit, 'start', '重跑单元测试', runtime, arrangement);
  runtime[unit] = transition(unit, 'complete', '单元测试通过', runtime, arrangement);
  assert.equal(taskState('T2', runtime, arrangement), 'ready');
  assert.equal(taskState('T3', runtime, arrangement), 'done');
  assert.equal(runtime.T3, update.runtime.T3);
  validateRuntime(JSON.parse(JSON.stringify(runtime)), plan, arrangement);
});
