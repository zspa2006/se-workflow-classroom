import {stateLabels, taskState, transition, rollbackScope, rollbackTask, rollbackTargets, validateDiscussion, validateRuntime} from './interaction.mjs';
import {taskStage, testLevelLabels} from './workflow.mjs';
import {agentForTask, approvedHandoffs, currentAgentOutput, validateAgentOutput} from './agents.mjs';
import {stanceLabels, discussionParticipants, acknowledgedAll, startConsensusRound,
  registerStance, confirmConsensus, validateConsensus} from './consensus.mjs';

// ===== 结构化观测扩展：纯增量，既有 log 事件与导出字段保持原样 =====
export const EVENT_TYPES = Object.freeze({
  STAGE_START: 'STAGE_START', STAGE_COMPLETE: 'STAGE_COMPLETE', STAGE_FAIL: 'STAGE_FAIL',
  TASK_STATUS_CHANGE: 'TASK_STATUS_CHANGE', ATTEMPT: 'ATTEMPT', DELIVERY_CONFIRMED: 'DELIVERY_CONFIRMED',
  ROLLBACK_TARGET_SELECTED: 'ROLLBACK_TARGET_SELECTED', ROLLBACK_PREVIEW: 'ROLLBACK_PREVIEW',
  ROLLBACK_EXECUTED: 'ROLLBACK_EXECUTED', HUMAN_INTERVENTION: 'HUMAN_INTERVENTION',
  HANDOFF: 'HANDOFF', BATCH_PLANNED: 'BATCH_PLANNED', TEST_CASES_ASSIGNED: 'TEST_CASES_ASSIGNED',
});
export const REASON_CODES = Object.freeze({
  TEST_ASSERTION_FAIL: 'TEST_ASSERTION_FAIL', DESIGN_CONFLICT: 'DESIGN_CONFLICT',
  MISSING_DEPENDENCY: 'MISSING_DEPENDENCY', HUMAN_REJECTED: 'HUMAN_REJECTED',
  API_TIMEOUT: 'API_TIMEOUT', VALIDATION_FAIL: 'VALIDATION_FAIL',
  NETWORK_ERROR: 'NETWORK_ERROR', UNKNOWN: 'UNKNOWN',
});
export const HUMAN_INTERVENTION_TYPES = Object.freeze({
  FIELD_CLARIFICATION: 'FIELD_CLARIFICATION', ROLLBACK_DECISION: 'ROLLBACK_DECISION',
});
// 新字段全部可选并带默认值：旧事件、旧 JSON 缺字段时按默认值处理。
const EVENT_DEFAULTS = Object.freeze({
  batch_id: null, entity_ref: null, r_id: null, d_id: null, t_id: null, tc_id: null,
  from_status: null, to_status: null, actor: 'system', reason_code: null,
  attempt_number: 0, evidence_ref: null, payload_ref: null,
  affected_task_ids: [], failed_tc_ids: [], batch_ids: [], subtype: null,
  previous_attempt_ref: null,
});
const BODY_KEYS = ['content', 'prompt', 'response', 'messages', 'transcript', 'input', 'output', 'source'];
const ALLOWED_EVENT_TYPES = new Set(Object.values(EVENT_TYPES));
const ALLOWED_REASON_CODES = new Set(Object.values(REASON_CODES));
let structuredEvents = [];
let eventSeq = 0;
const taskCaseIndex = new Map();
const taskMetaIndex = new Map();

export function registerTaskCases(taskId, caseIds) {
  taskCaseIndex.set(taskId, [...new Set(caseIds)]);
}
export function registerTaskMeta(taskId, meta) {
  taskMetaIndex.set(taskId, {...meta});
}
export function taskCasesFor(taskId) {
  return [...(taskCaseIndex.get(taskId) ?? [])];
}
export function reasonForTask(taskId) {
  return taskMetaIndex.get(taskId)?.review ? REASON_CODES.HUMAN_REJECTED : REASON_CODES.TEST_ASSERTION_FAIL;
}
export function reasonForCheckpoint(checkpoint) {
  if (checkpoint?.test) return REASON_CODES.TEST_ASSERTION_FAIL;
  if (checkpoint?.review) return REASON_CODES.HUMAN_REJECTED;
  return REASON_CODES.DESIGN_CONFLICT;
}
export function batchIdFor(taskId, arrangement) {
  const index = arrangement?.rounds?.findIndex(batch => batch.includes(taskId)) ?? -1;
  return index < 0 ? null : 'B' + (index + 1);
}
export function lastEventRef(eventType, entityRef) {
  let latestAny = null;
  for (let index = structuredEvents.length - 1; index >= 0; index--) {
    const event = structuredEvents[index];
    if (event.event_type !== eventType) continue;
    if (event.entity_ref === entityRef || event.t_id === entityRef) return event.event_id;
    if (!latestAny) latestAny = event.event_id;
  }
  // 回退后的修复重试多由另一节点（测试/评审）失败触发，退而引用最近一次尝试。
  return latestAny;
}

// 统一记录函数：浅拷贝入参、补默认值/event_id/timestamp；软校验只 warn；内部异常绝不外抛。
export function recordEvent(partial = {}) {
  try {
    const source = partial && typeof partial === 'object' ? partial : {};
    const event = {...EVENT_DEFAULTS, ...source};
    for (const key of BODY_KEYS) {
      if (Object.hasOwn(event, key)) {
        delete event[key];
        console.warn('[observability] 已剔除正文键（仅保留引用）：' + key);
      }
    }
    event.event_id = source.event_id || 'evt_' + Date.now().toString(36) + '_' + (++eventSeq).toString(36) +
      '_' + Math.random().toString(36).slice(2, 7);
    event.timestamp = source.timestamp || new Date().toISOString();
    if (source.event_type !== undefined && !ALLOWED_EVENT_TYPES.has(source.event_type)) {
      console.warn('[observability] 未知 event_type（仅告警）：' + source.event_type);
    }
    if (event.reason_code !== null && !ALLOWED_REASON_CODES.has(event.reason_code)) {
      console.warn('[observability] 未知 reason_code（仅告警）：' + event.reason_code);
    }
    structuredEvents.push(event);
    return {...event};
  } catch (error) {
    console.warn('[observability] recordEvent 忽略异常：', error);
    return undefined;
  }
}
export function getStructuredEvents() {
  return structuredEvents.map(event => ({...event}));
}
export function takeStructuredEvents() {
  const drained = getStructuredEvents();
  structuredEvents = [];
  return drained;
}
export function mergeStructuredEvents(list) {
  try {
    if (!Array.isArray(list)) return 0;
    let added = 0;
    for (const event of list) {
      if (!event || typeof event !== 'object' || typeof event.event_type !== 'string') continue;
      structuredEvents.push({...EVENT_DEFAULTS, ...event});
      added++;
    }
    return added;
  } catch (error) {
    console.warn('[observability] mergeStructuredEvents 忽略异常：', error);
    return 0;
  }
}
export function restoreStructuredEvents(list) {
  if (!Array.isArray(list) || list.length > 10000 ||
      list.some(event => !event || typeof event !== 'object' || typeof event.event_type !== 'string' ||
        typeof event.event_id !== 'string' || typeof event.timestamp !== 'string')) {
    throw new Error('结构化事件记录格式无效');
  }
  structuredEvents = list.map(event => ({...EVENT_DEFAULTS, ...event}));
  return structuredEvents.length;
}
export function resetStructuredEvents() {
  structuredEvents = [];
  eventSeq = 0;
  taskCaseIndex.clear();
  taskMetaIndex.clear();
}
export function buildSummary(events = structuredEvents) {
  const list = Array.isArray(events) ? events : [];
  const rollbacks_by_reason = {};
  const attempts_per_task = {};
  const human_interventions_by_type = {};
  const observedBatches = [];
  const plannedBatches = [];
  const appendBatch = (target, id) => { if (id && target.at(-1) !== id) target.push(id); };
  const executionTypes = new Set([EVENT_TYPES.TASK_STATUS_CHANGE, EVENT_TYPES.ROLLBACK_EXECUTED,
    EVENT_TYPES.ATTEMPT, EVENT_TYPES.DELIVERY_CONFIRMED, EVENT_TYPES.HANDOFF]);
  let total_rollbacks = 0;
  for (const event of list) {
    if (event.event_type === EVENT_TYPES.ROLLBACK_EXECUTED) {
      total_rollbacks++;
      const code = event.reason_code ?? REASON_CODES.UNKNOWN;
      rollbacks_by_reason[code] = (rollbacks_by_reason[code] || 0) + 1;
    } else if (event.event_type === EVENT_TYPES.ATTEMPT) {
      const key = event.t_id || event.entity_ref || 'unknown';
      attempts_per_task[key] = (attempts_per_task[key] || 0) + 1;
    } else if (event.event_type === EVENT_TYPES.HUMAN_INTERVENTION) {
      const key = event.subtype || 'UNKNOWN';
      human_interventions_by_type[key] = (human_interventions_by_type[key] || 0) + 1;
    } else if (event.event_type === EVENT_TYPES.BATCH_PLANNED) {
      for (const id of event.batch_ids ?? []) appendBatch(plannedBatches, id);
    }
    // 保留批次切换而非去重，才能重建 B1 → B2 → B1 修复 → B2 重跑。
    if (executionTypes.has(event.event_type)) appendBatch(observedBatches, event.batch_id);
  }
  const batch_sequence = observedBatches.length ? observedBatches : plannedBatches;
  return {total_rollbacks, rollbacks_by_reason, attempts_per_task, human_interventions_by_type, batch_sequence};
}
// ===== 结构化观测扩展结束 =====

const actionLabels = {start:'开始执行',complete:'确认交付',ask:'请求补充',answer:'提交答复',fail:'报告失败',retry:'人工重试'};
actionLabels.rollback = '回退实现';
actionLabels.invalidated = '交付需重验';

function historyText(item) {
  return actionLabels[item.action] + (item.test ? ' · ' + item.test + ' → ' + item.target : '') + ' · ' + item.note;
}
const node = (tag, text = '', className = '') => {
  const item = document.createElement(tag);
  item.textContent = text;
  item.className = className;
  return item;
};
const button = (text, handler) => {
  const item = node('button', text);
  item.type = 'button';
  item.addEventListener('click', handler);
  return item;
};

const verdictLabels = {pass:'评审通过', changes_requested:'建议返工', needs_evidence:'需要补充证据'};

export function createObservability({request, ready, adopt, getResult, getArrangement, download, isBusy, setBusy, renderCases, openPlan,
  refreshExecution}) {
  let events = [], runtime = {}, discussion;
  const pendingAgents = new Map();
  const noteDrafts = new Map();
  const activity = document.getElementById('activity');
  const discussionResult = document.getElementById('discussion-result');
  const transcript = document.getElementById('transcript');
  const extract = document.getElementById('extract-discussion');
  const discussionError = document.getElementById('discussion-error');

  function log(stage, status, message, details = {}) {
    events.push({time: new Date().toISOString(), stage, status, message, ...details});
    renderActivity();
  }
  function renderActivity() {
    activity.replaceChildren(...events.slice(-100).reverse().map(event => {
      const row = node('li');
      row.append(node('time', new Date(event.time).toLocaleTimeString('zh-CN')),
        node('strong', [event.stage, event.agent, event.status].filter(Boolean).join(' · ')), node('span', event.message));
      return row;
    }));
    document.getElementById('event-count').textContent = events.length;
    document.getElementById('activity-empty').hidden = events.length > 0;
  }

  extract.addEventListener('click', async () => {
    if (isBusy()) return;
    discussionError.textContent = '';
    if (transcript.value.trim().length < 15) {
      discussionError.textContent = '请填写至少 15 字的讨论记录。';
      return;
    }
    if (!await ready()) return;
    extract.disabled = transcript.disabled = true;
    setBusy(true);
    const source = transcript.value;
    try {
      const response = await request('discussion', {transcript: source});
      const {mainline, points} = response.discussion;
      discussion = {transcript: source, mainline, points, confirmed: false};
      renderDiscussion();
    } catch (error) {
      discussionError.textContent = error.message;
    } finally {
      extract.disabled = transcript.disabled = false;
      setBusy(false);
    }
  });
  transcript.addEventListener('input', () => {
    discussion = undefined;
    discussionResult.replaceChildren();
  });
  document.getElementById('discussion-example').addEventListener('click', () => {
    if (isBusy() || transcript.disabled) return;
    transcript.value = '产品同学：先做多人旅游行程网页，每天最多 8 小时。\n前端 Agent：我建议先支持手工录入景点名称和时长。\n后端 Agent：同意。每个景点只能排一次，排不下的单独列出来。\n测试同学：景点拖到另一天超时，是拒绝还是允许警告后保存？\n产品同学：这个还需要确认。';
    discussion = undefined;
    discussionResult.replaceChildren();
  });

  function renderDiscussion() {
    discussionResult.replaceChildren();
    if (!discussion) return;
    discussionResult.append(node('h3', '讨论 → 要点 → 共同理解草稿'));
    const original = node('details');
    original.append(node('summary', '查看带行号的讨论原文'),
      node('pre', discussion.transcript.split(/\r?\n/).map((line,i) => (i+1) + '  ' + line).join('\n'), 'transcript-source'));
    discussionResult.append(original);
    for (const point of discussion.points) {
      const card = node('article', '', 'chain-card');
      card.append(node('h4', point.id + ' · ' + (point.kind === 'open' ? '待确认' : '明确意见')),
        node('p', point.text));
      for (const evidence of point.evidence) card.append(node('blockquote', '第 ' + evidence.line + ' 行 · ' + evidence.quote));
      discussionResult.append(card);
    }
    const rounds = discussion.rounds ?? [];
    const current = rounds.at(-1);
    if (!current) {
      if (discussion.confirmed) {
        discussionResult.append(node('h3', '旧版记录 · 已由负责人确认'), node('p', discussion.confirmedText || discussion.mainline));
      } else {
        discussionResult.append(proposalEditor());
      }
      return;
    }
    discussionResult.append(roundCard(current));
    if (rounds.length > 1) {
      const history = node('details', '', 'consensus-history');
      history.append(node('summary', '查看历史轮次（' + (rounds.length - 1) + ' 轮）'),
        ...rounds.slice(0, -1).reverse().map(roundCard));
      discussionResult.append(history);
    }
    if (discussion.confirmed) {
      discussionResult.append(node('p', '共识已确认 · 第 ' + current.number + ' 轮全员同意 · 已转入产品想法',
        'consensus-confirmed'), button('查看产品想法', openPlan));
      return;
    }
    const readyToConfirm = acknowledgedAll(discussion);
    const confirm = button('确认共识并转入产品想法', () => updateDiscussion(() => {
      const accepted = confirmConsensus(discussion);
      adopt(accepted.text);
      discussion = accepted.discussion;
      log('共识确认', '全员同意', '第 ' + current.number + ' 轮获 ' + discussion.participants.length + ' 位参与者同意，已转入产品想法',
        {round: current.number, participants: discussion.participants});
    }));
    confirm.disabled = !readyToConfirm;
    discussionResult.append(node('p', readyToConfirm ? '全员已同意本轮提案。' : '本轮全员同意后可转入产品想法。', 'hint'), confirm);
    const revise = node('details', '', 'consensus-history');
    revise.append(node('summary', '修订提案并开启新一轮'), proposalEditor(current));
    discussionResult.append(revise);
  }

  function updateDiscussion(action) {
    if (isBusy()) return;
    try {
      action();
      discussionError.textContent = '';
      renderDiscussion();
    } catch (error) {
      discussionError.textContent = error.message;
    }
  }

  function labeled(parent, title, control) {
    const label = node('label', title);
    label.append(control);
    parent.append(label);
    return control;
  }

  function proposalEditor(previous) {
    const editor = node('section', '', 'chain-card');
    editor.append(node('h3', previous ? '第 ' + (previous.number + 1) + ' 轮提案' : '起草提案'));
    let roster;
    if (!previous) {
      roster = labeled(editor, '参与者名单（每行一位）', node('textarea'));
      roster.rows = 3;
      roster.value = discussionParticipants(discussion.transcript).join('\n');
    }
    const proposal = labeled(editor, '共同决策提案', node('textarea'));
    proposal.rows = 3;
    proposal.maxLength = 2000;
    proposal.value = previous?.proposal ?? discussion.mainline;
    const decisions = discussion.points.filter(point => point.kind === 'open').map(point => {
      const field = labeled(editor, point.id + ' 的拟议决定 · ' + point.text, node('input'));
      field.maxLength = 500;
      field.value = previous?.resolutions[point.id] ?? '';
      return [point.id, field];
    });
    const responses = (previous?.votes ?? []).filter(vote => vote.stance !== 'agree').map(vote => {
      const field = labeled(editor, '回应 ' + vote.participant + ' 的意见 · ' + vote.note, node('input'));
      field.maxLength = 500;
      return [vote.participant, field];
    });
    const read = fields => Object.fromEntries(fields.map(([id, field]) => [id, field.value]));
    editor.append(button(previous ? '提交修订并开启新一轮' : '开启第一轮确认', () => updateDiscussion(() => {
      discussion = startConsensusRound(discussion, {
        participants: roster?.value.split(/\r?\n/).filter(line => line.trim()),
        proposal: proposal.value, resolutions: read(decisions), responses: read(responses),
      });
      const round = discussion.rounds.at(-1);
      log('共识确认', '开启第 ' + round.number + ' 轮', round.proposal,
        {round: round.number, participants: discussion.participants, responses: round.responses});
    })));
    return editor;
  }

  function roundCard(round) {
    const current = discussion.rounds.at(-1) === round;
    const byName = new Map(round.votes.map(vote => [vote.participant, vote]));
    const agrees = round.votes.filter(vote => vote.stance === 'agree').length;
    const card = node('article', '', 'chain-card consensus-round');
    card.append(node('h3', '第 ' + round.number + ' 轮 · ' + agrees + ' / ' + discussion.participants.length + ' 同意'),
      node('p', round.proposal, 'chain-text'));
    for (const [id, answer] of Object.entries(round.resolutions)) card.append(node('p', id + ' · ' + answer));
    const list = node('ul');
    for (const name of discussion.participants) {
      const vote = byName.get(name);
      const row = node('li', name + ' · ' + (vote ? stanceLabels[vote.stance] : '待登记'));
      if (vote?.note) row.append(node('span', (vote.point ? vote.point + ' · ' : '') + vote.note));
      if (vote && vote.stance !== 'agree') {
        const revised = discussion.rounds[round.number];
        const reply = revised?.responses[name];
        const closed = discussion.rounds.slice(round.number).find(later =>
          later.votes.some(item => item.participant === name && item.stance === 'agree'));
        if (reply) row.append(node('span', '第 ' + revised.number + ' 轮回应 · ' + reply));
        row.append(node('span', closed ? '异议已关闭 · 本人于第 ' + closed.number + ' 轮同意修订稿'
          : reply ? '等待该参与者确认修订稿' : '待回应'));
      }
      list.append(row);
    }
    card.append(list);
    if (current && !discussion.confirmed && byName.size < discussion.participants.length) {
      card.append(stanceForm(discussion.participants.filter(name => !byName.has(name))));
    }
    if (current && discussion.confirmed) card.append(node('p', '已确认共识并转入产品想法', 'execution-status'));
    return card;
  }

  function stanceForm(names) {
    const form = node('div', '', 'consensus-form');
    const participant = labeled(form, '参与者', node('select'));
    participant.add(new Option('选择待登记参与者', ''));
    names.forEach(name => participant.add(new Option(name, name)));
    const stance = labeled(form, '立场', node('select'));
    stance.add(new Option('选择立场', ''));
    for (const [id, label] of Object.entries(stanceLabels)) stance.add(new Option(label, id));
    const point = labeled(form, '涉及要点（适用于异议）', node('select'));
    point.add(new Option('整份提案', ''));
    for (const item of discussion.points) point.add(new Option(item.id + ' · ' + item.text, item.id));
    const note = labeled(form, '意见说明（反对或保留时必填）', node('input'));
    note.maxLength = 500;
    form.append(node('p', '请登记参与者已经表达的立场。', 'hint'),
      button('登记立场', () => updateDiscussion(() => {
        discussion = registerStance(discussion, {
          participant: participant.value, stance: stance.value, point: point.value, note: note.value,
        });
        const round = discussion.rounds.at(-1);
        const vote = round.votes.at(-1);
        log('共识确认', stanceLabels[vote.stance], '第 ' + round.number + ' 轮 · ' + vote.participant +
          (vote.note ? ' · ' + vote.note : ''), {round: round.number, ...vote});
      })));
    return form;
  }

  async function callNodeAgent(task) {
    const result = getResult();
    const arrangement = getArrangement();
    const state = taskState(task.id, runtime, arrangement);
    if (isBusy() || pendingAgents.has(task.id) || pendingAgents.size >= arrangement.capacity ||
        !['ready', 'running', 'failed'].includes(state)) return;
    const token = {};
    const name = agentForTask(task).name;
    const note = noteDrafts.get(task.id)?.trim() || '';
    const saved = runtime[task.id];
    let started;
    const latestFailure = saved?.notes.findLast(item => ['rollback','fail','invalidated'].includes(item.action))?.note;
    const instruction = [latestFailure ? '上次问题：' + latestFailure : '', note]
      .filter(Boolean).join('\n').slice(0, 2000);
    try {
      const handoffs = approvedHandoffs(arrangement.dependencies[task.id], runtime);
      if (state !== 'running') {
        runtime[task.id] = transition(task.id, state === 'ready' ? 'start' : 'retry',
          '调用 ' + name, runtime, arrangement);
      }
      started = runtime[task.id];
      pendingAgents.set(task.id, token);
      log(task.id, '调用', '读取 ' + handoffs.length + ' 个前置任务的已确认交付物', {agent:name});
      refreshExecution();
      const design = result.pipeline?.design;
      const designContext = design && {summary:design.summary, components:design.components.filter(part => task.designs?.includes(part.id))};
      const testPlan = result.pipeline?.testPlan ?? result.testPlan;
      const data = await request('task-agent', {plan:result.plan, taskId:task.id, handoffs, designContext,
        spec:designContext ? undefined : result.spec, cases:testPlan?.cases.filter(item => item.task === task.id), note:instruction,
        previous:saved?.agentOutput}, false);
      if (getResult() !== result || runtime[task.id] !== started) return;
      const output = validateAgentOutput(data.agentOutput, task);
      runtime[task.id] = {...started, agentOutput:{...output, model:data.model, attempt:started.attempts}};
      log(task.id, '待确认交付', output.summary, {agent:name, model:data.model, artifacts:output.artifacts.map(file => file.path)});
      for (const message of data.validations ?? []) log(task.id, '校验修正', message, {agent:name});
    } catch (error) {
      if (getResult() === result && (!started || runtime[task.id] === started)) {
        log(task.id, '调用失败', error.message, {agent:name});
        token.error = error.message;
      }
    } finally {
      if (pendingAgents.get(task.id) === token) pendingAgents.delete(task.id);
      if (getResult() === result) {
        if (token.error) agentErrors.set(task.id, token.error);
        else agentErrors.delete(task.id);
        refreshExecution();
      }
    }
  }

  const agentErrors = new Map();
  function renderExecution(container) {
    const {plan} = getResult();
    const arrangement = getArrangement();
    const tasks = new Map(plan.tasks.map(task => [task.id, task]));
    container.append(node('p', '节点通过 DeepSeek API 调用对应 Agent。负责人确认后，产物才会传给依赖它的节点。测试脚本由负责人在项目环境运行。', 'hint'));
    const batch = button('并行调用就绪 Agent', async () => {
      if (isBusy() || !await ready() || getResult()?.plan !== plan) return;
      const available = arrangement.rounds.flat().filter(id => taskState(id, runtime, arrangement) === 'ready');
      await Promise.all(available.slice(0, Math.max(0, arrangement.capacity - pendingAgents.size))
        .map(id => callNodeAgent(tasks.get(id))));
    });
    batch.disabled = pendingAgents.size >= arrangement.capacity ||
      !plan.tasks.some(task => taskState(task.id, runtime, arrangement) === 'ready');
    container.append(batch);
    for (const task of plan.tasks) {
      const state = taskState(task.id, runtime, arrangement);
      const card = node('article', '', 'execution-card');
      card.id = 'execution-' + task.id;
      card.tabIndex = -1;
      const agent = agentForTask(task);
      const output = currentAgentOutput(runtime[task.id]);
      const inFlight = pendingAgents.has(task.id);
      card.append(node('h3', task.id + ' · ' + task.title),
        node('p', agent.name + ' · ' + taskStage(task) + ' · ' + (inFlight ? 'Agent 生成中' : stateLabels[state]) +
          ' · 尝试 ' + (runtime[task.id]?.attempts || 0) + ' 次', 'execution-status'),
        node('p', agent.duty),
        node('p', '预期交付物：' + task.output),
        node('p', '前置：' + (arrangement.dependencies[task.id].map(id => id + ' ' + stateLabels[taskState(id, runtime, arrangement)]).join('、') || '无')));
      if (task.test) card.append(node('p', '测试目标：' + task.test.targets
        .map(id => id + ' ' + tasks.get(id).title).join('、')), ...renderCases(task));
      if (task.review) card.append(node('p', '评审对象：' + task.review.target + ' ' + tasks.get(task.review.target).title),
        node('p', task.acceptance));
      if (output) {
        card.append(node('p', (output.verdict ? verdictLabels[output.verdict] + ' · ' : '') +
          'DeepSeek · ' + output.model + ' · ' + output.summary));
        for (const file of output.artifacts) {
          const detail = node('details', '', 'agent-artifact');
          detail.append(node('summary', file.path), node('pre', file.content),
            button('下载文件', () => download(file.path.split('/').at(-1), file.content, 'text/plain;charset=utf-8')));
          card.append(detail);
        }
      }
      const list = node('ul', '', 'execution-history');
      for (const item of runtime[task.id]?.notes || []) list.append(node('li',
        new Date(item.time).toLocaleTimeString('zh-CN') + ' · ' + historyText(item)));
      if (list.childElementCount) card.append(list);
      const allowed = {ready:['start'],running:['ask','fail','complete'],waiting:['answer'],failed:['retry']}[state] || [];
      if (allowed.length) {
        const label = node('label', task.role === '测试' ? '处理说明／实际测试结果' : '处理说明／交付物位置');
        const note = node('textarea');
        note.rows = 2;
        note.maxLength = 2000;
        note.value = noteDrafts.get(task.id) ?? '';
        note.addEventListener('input', () => noteDrafts.set(task.id, note.value));
        label.append(note);
        const actions = node('div', '', 'execution-actions');
        const error = node('p', '', 'error');
        error.setAttribute('role','alert');
        if (allowed.some(action => ['start','complete','retry'].includes(action))) {
          const invoke = button((output ? '重新调用 ' : '调用 ') + agent.name, async () => {
            if (!isBusy() && await ready() && getResult()?.plan === plan) await callNodeAgent(task);
          });
          invoke.disabled = inFlight || pendingAgents.size >= arrangement.capacity;
          actions.append(invoke);
        }
        for (const action of allowed) {
          const control = button(actionLabels[action], () => {
          try {
            const evidence = note.value.trim() || (action === 'complete' && output && task.role !== '测试'
              ? '已确认 ' + output.artifacts.map(file => file.path).join('、') : '');
            runtime[task.id] = transition(task.id, action, evidence, runtime, arrangement);
            log(task.id, actionLabels[action], evidence);
            if (action === 'ask' || action === 'answer') recordEvent({event_type: EVENT_TYPES.HUMAN_INTERVENTION,
              entity_ref: task.id, t_id: task.id, batch_id: batchIdFor(task.id, arrangement),
              subtype: HUMAN_INTERVENTION_TYPES.FIELD_CLARIFICATION, actor: 'human',
              payload_ref: 'runtime.' + task.id + '.notes[' + (runtime[task.id].notes.length - 1) + '].note',
              evidence_ref: 'runtime.' + task.id + '.notes'});
            noteDrafts.delete(task.id);
            refreshExecution();
          } catch (issue) { error.textContent = issue.message; }
          });
          control.disabled = inFlight || (action === 'complete' && Boolean(output?.verdict && output.verdict !== 'pass'));
          actions.append(control);
        }
        const candidates = rollbackTargets(task);
        if (state === 'failed' && candidates.length) {
          const targetLabel = node('label', '回退目标');
          const targets = node('select');
          targets.append(new Option('选定确认有缺陷的实现任务', ''));
          for (const id of candidates) targets.append(new Option(id + ' · ' + tasks.get(id).title, id));
          if (candidates.length === 1) targets.value = candidates[0];
          targetLabel.append(targets);
          const impact = node('p', '', 'hint');
          const rollback = button('回退并要求重验', () => {
            try {
              const id = targets.value;
              const update = rollbackTask(task, id, note.value, runtime, arrangement);
              runtime = update.runtime;
              log(task.id, '回退到 ' + id, note.value.trim() + '。需重新验证：' + update.affected.join('、'),
                {rollbackTarget: id, affected: update.affected});
              recordEvent({event_type: EVENT_TYPES.HUMAN_INTERVENTION, entity_ref: id, t_id: id,
                batch_id: batchIdFor(id, arrangement), subtype: HUMAN_INTERVENTION_TYPES.ROLLBACK_DECISION,
                reason_code: reasonForCheckpoint(task), actor: 'human',
                payload_ref: 'runtime.' + task.id + '.notes[' + (runtime[task.id].notes.length - 1) + '].note',
                evidence_ref: 'runtime.' + task.id + '.status'});
              noteDrafts.delete(task.id);
              refreshExecution();
            } catch (issue) { error.textContent = issue.message; }
          });
          const showImpact = () => {
            rollback.disabled = !targets.value;
            impact.textContent = targets.value ? '修复 ' + targets.value + ' 后重新验证 ' +
              rollbackScope(targets.value, arrangement).join('、') + '。' : '选定实现任务后可预览影响范围。';
            if (targets.value) recordEvent({event_type: EVENT_TYPES.ROLLBACK_PREVIEW,
              entity_ref: targets.value, t_id: targets.value, batch_id: batchIdFor(targets.value, arrangement),
              affected_task_ids: rollbackScope(targets.value, arrangement),
              reason_code: reasonForCheckpoint(task), actor: 'human',
              evidence_ref: 'runtime.' + task.id + '.status'});
          };
          targets.addEventListener('change', () => {
            if (targets.value) recordEvent({event_type: EVENT_TYPES.ROLLBACK_TARGET_SELECTED,
              entity_ref: targets.value, t_id: targets.value, batch_id: batchIdFor(targets.value, arrangement),
              actor: 'human', reason_code: reasonForCheckpoint(task),
              evidence_ref: 'runtime.' + task.id + '.status'});
          });
          targets.addEventListener('change', showImpact);
          showImpact();
          card.append(targetLabel, impact);
          actions.append(rollback);
        }
        if (agentErrors.has(task.id)) error.textContent = agentErrors.get(task.id);
        card.append(label, actions, error);
      }
      container.append(card);
    }
  }

  document.getElementById('export-task-md').addEventListener('click', () => {
    const result = getResult();
    if (!result) return;
    const arrangement = getArrangement();
    const lines = ['# ' + result.plan.project + ' · task.md', '', '任务执行记录由负责人填写。', ''];
    for (const task of result.plan.tasks) {
      lines.push('## ' + task.id + ' · ' + task.title, '',
        '- 工种：' + task.role, '- 执行 Agent：' + agentForTask(task).name,
        '- 工作类型：' + taskStage(task), '- 需求：' + task.requirements.join('、'),
        '- 设计：' + (task.designs?.join('、') || '已有设计规格'),
        '- 输入：' + (task.inputs.join('、') || '设计规格'),
        '- 前置任务：' + (arrangement.dependencies[task.id].join('、') || '无'),
        '- 交付物：' + task.output, '- 验收：' + task.acceptance,
        '- 执行状态：' + stateLabels[taskState(task.id, runtime, arrangement)], '');
      if (task.test) lines.push('- 测试层次：' + testLevelLabels[task.test.level],
        '- 验证及失败定位范围：' + task.test.targets.join('、'));
      if (task.review) lines.push('- 评审对象：' + task.review.target);
      const output = currentAgentOutput(runtime[task.id]);
      if (output) lines.push('- Agent 产物：' + output.artifacts.map(file => file.path).join('、'),
        '- 模型：DeepSeek · ' + output.model);
      const testPlan = result.pipeline?.testPlan ?? result.testPlan;
      for (const test of testPlan?.cases.filter(test => test.task === task.id) ?? []) {
        lines.push('', '### ' + test.id + ' · ' + test.title, '',
          '前置条件：' + test.setup, '',
          ...test.steps.map((step, index) => (index + 1) + '. ' + step), '', '预期结果：' + test.expected, '');
      }
      for (const item of runtime[task.id]?.notes || []) lines.push('- ' + historyText(item));
      lines.push('');
    }
    download('task.md', lines.join('\n'), 'text/markdown;charset=utf-8');
  });
  document.getElementById('export-activity').addEventListener('click', () => {
    download('运行与交互记录.json', JSON.stringify({events, runtime, discussion,
      structured_events: getStructuredEvents(), summary: buildSummary()},null,2), 'application/json');
  });
  return {
    log, renderExecution,
    reset() { events = []; this.resetRuntime(); discussion = undefined; discussionResult.replaceChildren(); renderActivity(); },
    resetRuntime() { runtime = {}; pendingAgents.clear(); agentErrors.clear(); noteDrafts.clear(); },
    snapshot() { return structuredClone({events, runtime, discussion}); },
    restore(value, plan, arrangement) {
      const restored = value || {events:[], runtime:{}};
      if (!Array.isArray(restored.events) || restored.events.length > 10000 ||
          restored.events.some(event => typeof event.stage !== 'string' || typeof event.message !== 'string' ||
            typeof event.status !== 'string' || typeof event.time !== 'string')) throw new Error('运行日志格式无效');
      validateRuntime(restored.runtime, plan, arrangement);
      if (restored.discussion) {
        if (typeof restored.discussion.transcript !== 'string') throw new Error('讨论原文无效');
        validateDiscussion(restored.discussion, restored.discussion.transcript);
        validateConsensus(restored.discussion);
      }
      this.resetRuntime();
      events = restored.events; runtime = restored.runtime; discussion = restored.discussion;
      if (discussion) transcript.value = discussion.transcript;
      renderActivity(); renderDiscussion();
    },
  };
}
