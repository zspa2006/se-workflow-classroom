import { currentAgentOutput, validateAgentOutput } from './agents.mjs';
import { recordEvent, EVENT_TYPES, REASON_CODES, batchIdFor, reasonForTask, reasonForCheckpoint,
  taskCasesFor, lastEventRef } from './observability.mjs';

export const stateLabels = {
  pending: '等待前置', ready: '可开始', running: '执行中', waiting: '等待人工补充',
  failed: '失败待处理', done: '已确认完成',
};

export function taskState(id, runtime, arrangement) {
  const saved = runtime[id];
  if (saved && saved.status !== 'pending') return saved.status;
  return arrangement.dependencies[id].every(parent => runtime[parent]?.status === 'done') ? 'ready' : 'pending';
}

export function transition(id, action, note, runtime, arrangement) {
  if (!Object.hasOwn(arrangement.dependencies, id)) throw new Error('任务不存在');
  const state = taskState(id, runtime, arrangement);
  const allowed = {
    start: ['ready'], complete: ['running'], ask: ['running'], fail: ['running'],
    answer: ['waiting'], retry: ['failed'],
  };
  if (!allowed[action]?.includes(state)) throw new Error('当前状态不支持这项操作');
  if (typeof note !== 'string' || !note.trim() || note.length > 2000) throw new Error('请填写处理说明，完成时填写交付物位置或结果摘要');
  const next = {start: 'running', complete: 'done', ask: 'waiting', fail: 'failed', answer: 'running', retry: 'running'};
  const record = runtime[id] ?? {status: 'pending', attempts: 0, notes: []};
  const verdict = currentAgentOutput(record)?.verdict;
  if (action === 'complete' && verdict && verdict !== 'pass') {
    throw new Error('评审尚未通过，请补充证据或记录返工');
  }
  // 状态变更记录点：校验全部通过后写入，旧值 state → 新值 next[action] 成对记录。
  const attemptNumber = record.attempts + Number(action === 'start' || action === 'retry');
  const noteRef = 'runtime.' + id + '.notes[' + record.notes.length + ']';
  recordEvent({event_type: EVENT_TYPES.TASK_STATUS_CHANGE, entity_ref: id, t_id: id,
    from_status: state, to_status: next[action], batch_id: batchIdFor(id, arrangement),
    actor: ['start', 'retry'].includes(action) ? 'agent' : 'human',
    reason_code: action === 'fail' ? reasonForTask(id) : action === 'retry' ? REASON_CODES.HUMAN_REJECTED : null,
    evidence_ref: noteRef});
  if (action === 'fail' || action === 'retry') {
    // attempt_number 读取既有计数表达式，不新增计数器。
    recordEvent({event_type: EVENT_TYPES.ATTEMPT, entity_ref: id, t_id: id,
      batch_id: batchIdFor(id, arrangement), attempt_number: attemptNumber,
      failed_tc_ids: taskCasesFor(id), reason_code: action === 'fail' ? reasonForTask(id) : REASON_CODES.HUMAN_REJECTED,
      previous_attempt_ref: lastEventRef(EVENT_TYPES.ATTEMPT, id), actor: 'human', evidence_ref: noteRef});
  }
  if (action === 'complete') {
    recordEvent({event_type: EVENT_TYPES.DELIVERY_CONFIRMED, entity_ref: id, t_id: id,
      batch_id: batchIdFor(id, arrangement), to_status: 'done', actor: 'human', evidence_ref: noteRef});
  }
  return {...record, status: next[action], attempts: record.attempts + Number(action === 'start' || action === 'retry'),
    notes: [...record.notes, {action, note: note.trim(), time: new Date().toISOString()}]};
}

export function rollbackScope(target, arrangement) {
  const dependents = new Map(Object.keys(arrangement.dependencies).map(id => [id, []]));
  for (const [id, parents] of Object.entries(arrangement.dependencies)) {
    for (const parent of parents) dependents.get(parent)?.push(id);
  }
  const affected = new Set();
  const pending = [target];
  while (pending.length) {
    const id = pending.shift();
    for (const child of dependents.get(id) ?? []) {
      if (child === target || affected.has(child)) continue;
      affected.add(child);
      pending.push(child);
    }
  }
  // 按批次顺序给出受影响任务，便于逐批重验；不在批次内的任务排在最后。
  const rank = new Map(arrangement.rounds.flat().map((id, index) => [id, index]));
  return [...affected].sort((a, b) => (rank.get(a) ?? rank.size) - (rank.get(b) ?? rank.size) ||
    (a < b ? -1 : a > b ? 1 : 0));
}

export function rollbackTargets(task) {
  return task.test?.targets ?? (task.review ? [task.review.target] : []);
}

export function rollbackTask(checkpoint, target, note, runtime, arrangement) {
  if (!rollbackTargets(checkpoint).includes(target) || !arrangement.dependencies[checkpoint.id]?.includes(target)) {
    throw new Error('请选择该测试或评审实际依赖的实现任务');
  }
  if (runtime[checkpoint.id]?.status !== 'failed' || runtime[target]?.status !== 'done') {
    throw new Error('测试或评审须处于失败待处理状态，且实现任务已交付');
  }
  if (typeof note !== 'string' || !note.trim() || note.length > 2000) {
    throw new Error('请填写定位依据或失败现象');
  }
  const affected = rollbackScope(target, arrangement);
  const updated = {...runtime};
  const time = new Date().toISOString();
  // 回退轮次标识由「目标 + 该目标已记录的轮次」派生：同一时刻的多轮回退也能区分，
  // 且导出再导入后继续回退不会和历史记录撞号。
  const rollbackId = 'RB-' + target + '-' +
    ((runtime[target]?.notes ?? []).filter(item => item.action === 'rollback').length + 1);
  function mark(id, status, action) {
    const previous = runtime[id] ?? {attempts: 0, notes: []};
    updated[id] = {...previous, status, notes: [...previous.notes, {
      time, action, note: note.trim(), test: checkpoint.id, target, rollbackId,
    }]};
  }
  mark(target, 'failed', 'rollback');
  for (const id of affected) {
    if (runtime[id]) mark(id, 'pending', 'invalidated');
  }
  // 回退执行记录点：状态全部更新完成后写入。
  recordEvent({event_type: EVENT_TYPES.ROLLBACK_EXECUTED, entity_ref: target, t_id: target,
    from_status: 'done', to_status: 'failed', batch_id: batchIdFor(target, arrangement),
    actor: 'human', reason_code: reasonForCheckpoint(checkpoint), affected_task_ids: affected,
    evidence_ref: 'runtime.' + checkpoint.id + '.notes[' + (runtime[checkpoint.id]?.notes.length ?? 0) + ']'});
  return {runtime: updated, affected};
}

export function validateDiscussion(value, transcript) {
  const lines = transcript.split(/\r?\n/);
  if (typeof value?.mainline !== 'string' || !value.mainline.trim() || value.mainline.length > 2000 ||
      !Array.isArray(value.points) || !value.points.length || value.points.length > 12) {
    throw new Error('讨论摘要需要主线和 1 至 12 条要点');
  }
  const ids = new Set();
  for (const point of value.points) {
    if (!/^P[1-9]\d*$/.test(point?.id) || ids.has(point.id) || !['decision','open'].includes(point.kind) ||
        typeof point.text !== 'string' || !point.text.trim() || point.text.length > 1000 ||
        !Array.isArray(point.evidence) || !point.evidence.length) throw new Error('讨论要点格式或编号无效');
    ids.add(point.id);
    for (const source of point.evidence) {
      if (!Number.isInteger(source.line) || typeof source.quote !== 'string' || !source.quote.trim() ||
          !lines[source.line - 1]?.includes(source.quote)) throw new Error(point.id + ' 的证据未在对应原文行中找到');
    }
  }
}

export function validateRuntime(runtime, plan, arrangement) {
  if (!runtime || typeof runtime !== 'object' || Array.isArray(runtime)) throw new Error('任务状态无效');
  const tasks = new Map(plan.tasks.map(task => [task.id, task]));
  for (const [id, record] of Object.entries(runtime)) {
    if (!tasks.has(id) || !['pending','running','waiting','failed','done'].includes(record.status) ||
        !Number.isInteger(record.attempts) || record.attempts < 0 || !Array.isArray(record.notes) ||
        record.notes.length > 1000 || record.notes.some(item => typeof item.note !== 'string' || item.note.length > 2000)) {
      throw new Error('导入的执行记录无效');
    }
    if (record.agentOutput !== undefined) {
      const output = record.agentOutput;
      if (!output || !Number.isInteger(output.attempt) || output.attempt < 1 || output.attempt > record.attempts ||
          typeof output.model !== 'string' || !output.model.trim() || output.model.length > 150) {
        throw new Error('导入的 Agent 产物记录无效');
      }
      validateAgentOutput(output, tasks.get(id));
      const verdict = currentAgentOutput(record)?.verdict;
      if (record.status === 'done' && verdict && verdict !== 'pass') throw new Error('已确认的评审必须通过');
    }
    if (record.status !== 'pending' && arrangement.dependencies[id].some(parent => runtime[parent]?.status !== 'done')) {
      throw new Error('执行记录与前置任务状态不一致');
    }
  }
}
