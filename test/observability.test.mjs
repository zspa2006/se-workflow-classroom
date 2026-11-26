import assert from 'node:assert/strict';
import test from 'node:test';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { addTestTasks, schedule } from '../workflow.mjs';
import { assignTestCases } from '../pipeline.mjs';
import { transition, rollbackTask } from '../interaction.mjs';
import { approvedHandoffs } from '../agents.mjs';
import { recordEvent, getStructuredEvents, takeStructuredEvents, mergeStructuredEvents,
  restoreStructuredEvents, resetStructuredEvents, buildSummary,
  EVENT_TYPES, REASON_CODES, HUMAN_INTERVENTION_TYPES } from '../observability.mjs';
import { rollbackAffectedIds } from '../status.mjs';

const requirements = [{ id: 'R1', text: '展示并提交行程', acceptance: '拒绝无效行程' }];
const plan = addTestTasks({ project: '行程分配 · 回退演示', requirements, tasks: [
  { id: 'T12', title: '实现行程时长校验', role: '后端', requirements: ['R1'], designs: [], inputs: [],
    output: 'validator', acceptance: '拒绝负数时长' },
] });

test('rollbackAffectedIds marks the rolled-back target and transitive dependents only', () => {
  const tasks = [{id: 'C'}, {id: 'T1'}, {id: 'T2'}, {id: 'T3'}, {id: 'U'}];
  const arrangement = {
    rounds: [['C'], ['T1'], ['T2'], ['T3'], ['U']],
    dependencies: {C: [], T1: [], T2: ['T1'], T3: ['T2'], U: []},
  };
  const runtime = {
    C: {status: 'failed'},
    T1: {status: 'failed', attempts: 1, notes: [{action: 'rollback'}]},
    T2: {status: 'pending', attempts: 1, notes: [{action: 'invalidated'}]},
    T3: {status: 'pending', attempts: 0, notes: []},
    U: {status: 'pending', attempts: 0, notes: []},
  };
  const affected = rollbackAffectedIds(tasks, arrangement, runtime,
    task => task.id === 'C' ? ['T1'] : []);
  assert.deepEqual([...affected], ['T1', 'T2', 'T3']);
});

function captureWarn(action) {
  const original = console.warn;
  const warnings = [];
  console.warn = (...args) => warnings.push(args.join(' '));
  try {
    const value = action();
    return { value, warnings };
  } finally {
    console.warn = original;
  }
}

function buildRollbackChain() {
  resetStructuredEvents();
  const arrangement = schedule(plan, 4);
  assignTestCases(undefined, plan);
  const checkpoint = plan.tasks.find(task => task.test?.level === 'e2e');
  let runtime = {};

  // 1) 端到端测试失败
  for (const id of arrangement.rounds.flat()) {
    runtime[id] = transition(id, 'start', '开始执行', runtime, arrangement);
    runtime[id] = transition(id, id === checkpoint.id ? 'fail' : 'complete', '记录结果', runtime, arrangement);
  }
  // 2) 选定缺陷实现
  recordEvent({ event_type: EVENT_TYPES.ROLLBACK_TARGET_SELECTED, entity_ref: 'T12', t_id: 'T12',
    batch_id: 'B1', actor: 'human', reason_code: REASON_CODES.TEST_ASSERTION_FAIL,
    evidence_ref: 'runtime.' + checkpoint.id + '.status' });
  // 3) 回退预览
  recordEvent({ event_type: EVENT_TYPES.ROLLBACK_PREVIEW, entity_ref: 'T12', t_id: 'T12', batch_id: 'B1',
    affected_task_ids: ['T1', 'T2', 'T3'], reason_code: REASON_CODES.TEST_ASSERTION_FAIL,
    actor: 'human', evidence_ref: 'runtime.' + checkpoint.id + '.status' });
  // 4) 人工决策 + 执行回退
  recordEvent({ event_type: EVENT_TYPES.HUMAN_INTERVENTION, entity_ref: 'T12', t_id: 'T12', batch_id: 'B1',
    subtype: HUMAN_INTERVENTION_TYPES.ROLLBACK_DECISION, reason_code: REASON_CODES.TEST_ASSERTION_FAIL,
    payload_ref: 'runtime.' + checkpoint.id + '.notes[0].note', actor: 'human',
    evidence_ref: 'runtime.' + checkpoint.id + '.status' });
  const rollback = rollbackTask(checkpoint, 'T12', '负数输入未被拒绝', runtime, arrangement);
  runtime = rollback.runtime;
  // 5) 修复重试
  runtime.T12 = transition('T12', 'retry', '修正校验后重试', runtime, arrangement);
  runtime.T12 = transition('T12', 'complete', '新实现已交付', runtime, arrangement);
  // 6) 第 2 批重跑被失效的节点
  for (const id of rollback.affected) {
    if (runtime[id]?.status !== 'pending') continue;
    runtime[id] = transition(id, 'start', '修复后重新执行', runtime, arrangement);
    runtime[id] = transition(id, 'complete', '重新验证通过', runtime, arrangement);
  }
  // 7) 交付确认
  approvedHandoffs(['T12'], runtime);
  return { arrangement, runtime, events: getStructuredEvents(), summary: buildSummary() };
}

test('recordEvent 补齐所有可选字段默认值并生成 event_id/timestamp', () => {
  resetStructuredEvents();
  const { value } = captureWarn(() => recordEvent({ event_type: EVENT_TYPES.TASK_STATUS_CHANGE }));
  for (const key of ['batch_id', 'entity_ref', 'r_id', 'd_id', 't_id', 'tc_id', 'from_status',
    'to_status', 'reason_code', 'evidence_ref', 'payload_ref']) {
    assert.equal(value[key], null, key + ' 默认值应为 null');
  }
  assert.equal(value.actor, 'system');
  assert.equal(value.attempt_number, 0);
  assert.deepEqual(value.affected_task_ids, []);
  assert.deepEqual(value.failed_tc_ids, []);
  assert.equal(typeof value.event_id, 'string');
  assert.equal(typeof value.timestamp, 'string');
});

test('recordEvent 浅拷贝入参，不修改调用方对象', () => {
  resetStructuredEvents();
  const failed_tc_ids = ['TC1'];
  const input = { event_type: EVENT_TYPES.ATTEMPT, t_id: 'T12', failed_tc_ids };
  const event = recordEvent(input);
  assert.notEqual(event, input);
  assert.equal(event.t_id, 'T12');
  assert.equal(event.failed_tc_ids, failed_tc_ids);
  assert.equal(input.event_id, undefined);
});

test('未知 event_type / reason_code 只 warn 不 throw', () => {
  resetStructuredEvents();
  const { warnings } = captureWarn(() => {
    assert.doesNotThrow(() => recordEvent({ event_type: 'NOT_A_TYPE', reason_code: 'NOT_A_REASON' }));
  });
  assert(warnings.some(text => text.includes('未知 event_type')));
  assert(warnings.some(text => text.includes('未知 reason_code')));
  assert.equal(getStructuredEvents().length, 1);
});

test('正文键被剔除并 warn，调用方对象保持不变', () => {
  resetStructuredEvents();
  const input = { event_type: EVENT_TYPES.STAGE_START, content: 'LLM 输出正文', prompt: '提示词',
    response: '完整响应', messages: [], transcript: '讨论原文', input: 'x', output: 'y', source: 'z' };
  const { value, warnings } = captureWarn(() => recordEvent(input));
  for (const key of ['content', 'prompt', 'response', 'messages', 'transcript', 'input', 'output', 'source']) {
    assert(!Object.hasOwn(value, key), key + ' 应被剔除');
    assert(Object.hasOwn(input, key), key + ' 不应从调用方删除');
  }
  assert(warnings.some(text => text.includes('剔除正文键')));
});

test('recordEvent 内部异常不抛出', () => {
  resetStructuredEvents();
  const poison = {};
  Object.defineProperty(poison, 'event_type', { enumerable: true, get() { throw new Error('boom'); } });
  const { warnings } = captureWarn(() => {
    assert.doesNotThrow(() => recordEvent(poison));
    assert.equal(recordEvent(poison), undefined);
  });
  assert(warnings.some(text => text.includes('忽略异常')));
});

test('event_id 唯一且 timestamp 每次补齐', () => {
  resetStructuredEvents();
  const first = recordEvent({ event_type: EVENT_TYPES.STAGE_START });
  const second = recordEvent({ event_type: EVENT_TYPES.STAGE_COMPLETE });
  assert.notEqual(first.event_id, second.event_id);
  assert(first.timestamp <= second.timestamp);
});

test('mergeStructuredEvents 与 takeStructuredEvents 往返一致', () => {
  resetStructuredEvents();
  const legacy = [{ event_type: 'LEGACY', event_id: 'old-1', timestamp: '2026-01-01T00:00:00.000Z' }];
  assert.equal(mergeStructuredEvents(legacy), 1);
  const taken = takeStructuredEvents();
  assert.equal(taken.length, 1);
  assert.equal(taken[0].event_id, 'old-1');
  assert.equal(taken[0].event_type, 'LEGACY');
  assert.equal(taken[0].actor, 'system');
  assert.equal(taken[0].batch_id, null);
  assert.deepEqual(taken[0].affected_task_ids, []);
  assert.deepEqual(getStructuredEvents(), []);
});

test('buildSummary 现算五个字段且不修改传入事件数组', () => {
  const events = JSON.parse(JSON.stringify(buildRollbackChain().events));
  const before = JSON.stringify(events);
  const summary = buildSummary(events);
  assert.equal(JSON.stringify(events), before);
  assert.deepEqual(Object.keys(summary), ['total_rollbacks', 'rollbacks_by_reason',
    'attempts_per_task', 'human_interventions_by_type', 'batch_sequence']);
});

test('状态变更记录 from/to 成对并带 actor/t_id/batch_id', () => {
  resetStructuredEvents();
  const arrangement = { rounds: [['T9'], ['T8']], dependencies: { T9: [], T8: ['T9'] } };
  const runtime = {};
  runtime.T9 = transition('T9', 'start', '开始', runtime, arrangement);
  runtime.T9 = transition('T9', 'complete', '交付', runtime, arrangement);
  const events = getStructuredEvents().filter(event => event.event_type === EVENT_TYPES.TASK_STATUS_CHANGE);
  assert.deepEqual(events.map(event => [event.from_status, event.to_status]),
    [['ready', 'running'], ['running', 'done']]);
  assert(events.every(event => event.t_id === 'T9' && event.entity_ref === 'T9' && event.batch_id === 'B1'));
  assert.deepEqual([...new Set(events.map(event => event.actor))], ['agent', 'human']);
});

test('ATTEMPT attempt_number 读取既有计数且引用前驱尝试', () => {
  const { events } = buildRollbackChain();
  const attempts = events.filter(event => event.event_type === EVENT_TYPES.ATTEMPT);
  assert(attempts.length >= 2);
  assert(attempts.every(event => Number.isInteger(event.attempt_number) && event.attempt_number >= 1));
  assert(attempts.at(-1).previous_attempt_ref);
  assert(Array.isArray(attempts.at(-1).failed_tc_ids));
  assert.equal(attempts.at(-1).reason_code, REASON_CODES.HUMAN_REJECTED);
});

test('回退预览 → 执行回退 → 交付确认顺序不断', () => {
  const { events } = buildRollbackChain();
  const t12 = events.filter(event => event.t_id === 'T12' || event.entity_ref === 'T12');
  const types = t12.map(event => event.event_type);
  assert(types.includes(EVENT_TYPES.ROLLBACK_PREVIEW));
  assert(types.includes(EVENT_TYPES.ROLLBACK_EXECUTED));
  assert(types.indexOf(EVENT_TYPES.ROLLBACK_PREVIEW) < types.indexOf(EVENT_TYPES.ROLLBACK_EXECUTED));
  assert(types.indexOf(EVENT_TYPES.ROLLBACK_EXECUTED) < types.lastIndexOf(EVENT_TYPES.DELIVERY_CONFIRMED));
  const preview = events.find(event => event.event_type === EVENT_TYPES.ROLLBACK_PREVIEW);
  const executed = events.find(event => event.event_type === EVENT_TYPES.ROLLBACK_EXECUTED);
  assert.deepEqual(preview.affected_task_ids, executed.affected_task_ids);
  assert.equal(executed.reason_code, REASON_CODES.TEST_ASSERTION_FAIL);
  assert.equal(executed.batch_id, 'B1');
});

test('summary 可回答交锋次数、退回原因与批次序列', () => {
  const { summary } = buildRollbackChain();
  assert.equal(summary.total_rollbacks, 1);
  assert.equal(summary.rollbacks_by_reason.TEST_ASSERTION_FAIL, 1);
  assert(summary.attempts_per_task.T12 >= 1);
  assert.equal(summary.human_interventions_by_type.ROLLBACK_DECISION, 1);
  assert.deepEqual(summary.batch_sequence, ['B1', 'B2', 'B3', 'B1', 'B2', 'B3']);
});

test('人工干预两类可区分，payload_ref 只存字段路径', () => {
  resetStructuredEvents();
  recordEvent({ event_type: EVENT_TYPES.HUMAN_INTERVENTION, entity_ref: 'T12',
    subtype: HUMAN_INTERVENTION_TYPES.FIELD_CLARIFICATION,
    payload_ref: 'runtime.T12.notes[0].note', actor: 'human' });
  recordEvent({ event_type: EVENT_TYPES.HUMAN_INTERVENTION, entity_ref: 'T12',
    subtype: HUMAN_INTERVENTION_TYPES.ROLLBACK_DECISION, reason_code: REASON_CODES.TEST_ASSERTION_FAIL,
    payload_ref: 'runtime.T3.notes[0].note', actor: 'human' });
  const summary = buildSummary();
  assert.equal(summary.human_interventions_by_type.FIELD_CLARIFICATION, 1);
  assert.equal(summary.human_interventions_by_type.ROLLBACK_DECISION, 1);
  for (const event of getStructuredEvents()) {
    assert.match(event.payload_ref, /^runtime\..*\.notes\[\d+\]\.note$/);
    assert(!Object.values(event).some(value => typeof value === 'string' && value.length > 120));
  }
});

test('HANDOFF 只保留产物路径引用', () => {
  resetStructuredEvents();
  const runtime = { T9: { status: 'done', attempts: 3, notes: [{ action: 'complete', note: '已交付' }],
    agentOutput: { attempt: 3, model: 'mock', summary: '摘要',
      artifacts: [{ path: 'src/a.js', content: '完整源码正文' }] } } };
  assert.equal(approvedHandoffs(['T9'], runtime).length, 1);
  const event = getStructuredEvents()[0];
  assert.equal(event.event_type, EVENT_TYPES.HANDOFF);
  assert.equal(event.evidence_ref, 'src/a.js');
  assert(!Object.hasOwn(event, 'content'));
});

test('BATCH_PLANNED 与 TEST_CASES_ASSIGNED 在阶段计算完成后记录', () => {
  resetStructuredEvents();
  schedule(plan, 4);
  assignTestCases(undefined, plan);
  const types = getStructuredEvents().map(event => event.event_type);
  assert(types.includes(EVENT_TYPES.BATCH_PLANNED));
  assert(types.includes(EVENT_TYPES.TEST_CASES_ASSIGNED));
  const assigned = getStructuredEvents().find(event => event.event_type === EVENT_TYPES.TEST_CASES_ASSIGNED);
  assert.match(assigned.tc_id, /^TC\d+/);
});

test('导出 → 恢复 → 深度比对无损', () => {
  const { events, summary } = buildRollbackChain();
  const exported = JSON.parse(JSON.stringify({ events, summary }));
  resetStructuredEvents();
  assert.equal(restoreStructuredEvents(exported.events), exported.events.length);
  assert.deepEqual(getStructuredEvents(), exported.events);
  assert.deepEqual(buildSummary(), exported.summary);
});

test('旧格式事件兼容：缺字段补默认值、旧字段保留', () => {
  resetStructuredEvents();
  const legacy = [{ event_type: 'LEGACY', event_id: 'old-1', timestamp: '2026-01-01T00:00:00.000Z',
    stage: '旧阶段', status: '完成', message: '旧消息', time: '2026-01-01T00:00:00.000Z' }];
  assert.equal(restoreStructuredEvents(legacy), 1);
  const restored = getStructuredEvents()[0];
  assert.equal(restored.message, '旧消息');
  assert.equal(restored.actor, 'system');
  assert.equal(restored.batch_id, null);
});

test('fixture 按 T12 过滤链无断点并覆盖第 2 批重跑', async () => {
  const { arrangement, runtime, events, summary } = buildRollbackChain();
  const directory = new URL('./fixtures/', import.meta.url);
  await mkdir(directory, { recursive: true });
  await writeFile(new URL('rollback-case.json', directory), JSON.stringify({ provider: 'deepseek',
    spec: '行程分配样例', plan, arrangement,
    observation: { events: [{ stage: '旧事件', status: '完成', message: '保留原样', time: '2026-01-01T00:00:00.000Z' }], runtime },
    events, summary }, null, 2));
  const saved = JSON.parse(await readFile(new URL('rollback-case.json', directory), 'utf8'));
  const chain = saved.events.filter(event => event.t_id === 'T12' || event.entity_ref === 'T12');
  assert(chain.length >= 8);
  assert.equal(saved.observation.events[0].message, '保留原样');
  for (const type of [EVENT_TYPES.ROLLBACK_TARGET_SELECTED, EVENT_TYPES.ROLLBACK_PREVIEW,
    EVENT_TYPES.ROLLBACK_EXECUTED, EVENT_TYPES.HUMAN_INTERVENTION, EVENT_TYPES.ATTEMPT,
    EVENT_TYPES.DELIVERY_CONFIRMED]) {
    assert(chain.some(event => event.event_type === type), 'T12 链缺少 ' + type);
  }
  assert.deepEqual(saved.summary.batch_sequence, ['B1', 'B2', 'B3', 'B1', 'B2', 'B3']);
});
