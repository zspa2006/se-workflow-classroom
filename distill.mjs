import { stanceLabels, acknowledgedAll } from './consensus.mjs';

// 作业一（需求文档驱动的智能任务分解协作工作流）里的「讨论 → 决策」在系统里的落点：
// 把讨论提炼结果压成一屏可读的结论，并给出 G2「讨论门控」的判定，而不是让人翻卡片自己归纳。
export const GATE_CHECKS = [
  {id: 'G2-1', label: '要点已提炼，且每条都带原文行号'},
  {id: 'G2-2', label: '待确认项都有拟议决定'},
  {id: 'G2-3', label: '没有未处理的反对与保留'},
  {id: 'G2-4', label: '本轮参与者立场已登记齐'},
  {id: 'G2-5', label: '全员同意或负责人已确认'},
];

const STATE_LABELS = {
  empty: '待提炼',
  extracted: '已提炼 · 待起草',
  round: '确认轮进行中',
  confirmed: '已确认',
};

function clip(text, limit = 72) {
  const value = String(text ?? '').replace(/\s+/g, ' ').trim();
  return value.length > limit ? value.slice(0, limit) + '…' : value;
}

function lineLabel(evidence) {
  return evidence.map(item => '第 ' + item.line + ' 行').join('、');
}

function quote(evidence) {
  return evidence.map(item => item.quote).join(' / ');
}

function resolutionsFor(discussion) {
  const current = discussion.rounds?.at(-1);
  if (current?.resolutions) return current.resolutions;
  if (discussion.resolutions) return discussion.resolutions;
  return {};
}

export function distillDiscussion(discussion) {
  if (!discussion || !Array.isArray(discussion.points) || !discussion.points.length) {
    return {
      state: 'empty', stateLabel: STATE_LABELS.empty, headline: '尚未提炼讨论',
      counts: {decisions: 0, opens: 0, confirmed: 0},
      decisions: [], opens: [], stances: {total: 0, agree: 0, object: 0, reserve: 0, pending: 0, rows: []},
      gate: {passed: false, checks: GATE_CHECKS.map(item => ({...item, ok: false, detail: '尚未提炼'}))},
      rounds: 0, current: 0, evidenced: false,
    };
  }
  const rounds = discussion.rounds ?? [];
  const current = rounds.at(-1);
  const resolutions = resolutionsFor(discussion);
  const decisionPoints = discussion.points.filter(point => point.kind !== 'open');
  const openPoints = discussion.points.filter(point => point.kind === 'open');

  const decisions = decisionPoints.map((point, index) => ({
    id: 'D-' + String(index + 1).padStart(2, '0'), pointId: point.id, text: point.text,
    resolution: '', status: '已明确', evidence: point.evidence ?? [],
  }));
  const opens = openPoints.map((point, index) => ({
    id: 'Q-' + String(index + 1).padStart(2, '0'), pointId: point.id, text: point.text,
    resolution: resolutions[point.id] ?? '', status: resolutions[point.id] ? '已拟议' : '待填写',
    evidence: point.evidence ?? [],
  }));
  if (discussion.confirmed) {
    for (const item of [...decisions, ...opens]) {
      if (item.resolution || item.status === '已明确') item.status = '已定稿';
    }
  }

  const participants = discussion.participants ?? [];
  const votes = current?.votes ?? [];
  const rows = participants.map(name => {
    const vote = votes.find(item => item.participant === name);
    return {name, stance: vote?.stance ?? '', stanceLabel: vote ? stanceLabels[vote.stance] : '待登记',
      point: vote?.point ?? '', note: vote?.note ?? ''};
  });
  const count = stance => rows.filter(row => row.stance === stance).length;
  const stances = {
    total: participants.length, agree: count('agree'), object: count('object'),
    reserve: count('reserve'), pending: rows.filter(row => !row.stance).length, rows,
  };

  const evidenced = discussion.points.every(point => (point.evidence ?? []).length > 0 &&
    point.evidence.every(item => Number.isInteger(item.line) && String(item.quote ?? '').trim()));
  const previous = rounds.at(-2);
  const objections = (previous?.votes ?? []).filter(vote => vote.stance !== 'agree');
  const unanswered = objections.filter(vote => !current?.responses?.[vote.participant]);
  const blocked = votes.filter(vote => vote.stance !== 'agree');
  const allAgree = discussion.confirmed || (current ? acknowledgedAll(discussion) : false);

  const checks = [
    {...GATE_CHECKS[0], ok: evidenced && discussion.points.length > 0,
      detail: evidenced ? discussion.points.length + ' 条要点均有行号与引文' : '存在没有行号引文的要点'},
    {...GATE_CHECKS[1], ok: openPoints.length === 0 || openPoints.every(point => resolutions[point.id]),
      detail: openPoints.length === 0 ? '没有待确认项'
        : openPoints.filter(point => resolutions[point.id]).length + ' / ' + openPoints.length + ' 项已拟议'},
    {...GATE_CHECKS[2], ok: unanswered.length === 0 && blocked.length === 0,
      detail: unanswered.length ? '上一轮异议未回应：' + unanswered.map(vote => vote.participant).join('、')
        : blocked.length ? '待处理：' + blocked.map(vote => vote.participant + ' ' + stanceLabels[vote.stance]).join('、')
          : '本轮没有未处理的反对或保留'},
    {...GATE_CHECKS[3], ok: Boolean(current) && stances.pending === 0,
      detail: current ? (stances.total - stances.pending) + ' / ' + stances.total + ' 位已登记'
        : '尚未开启确认轮'},
    {...GATE_CHECKS[4], ok: allAgree,
      detail: discussion.confirmed ? '负责人已确认并转入产品想法'
        : allAgree ? '本轮全员同意，可确认' : '等待全员同意'},
  ];
  const passed = checks.every(item => item.ok);

  let state = 'extracted';
  if (discussion.confirmed) state = 'confirmed';
  else if (current) state = 'round';

  const proposal = current?.proposal ?? discussion.mainline ?? '';
  const headline = discussion.confirmed
    ? '已确认：' + clip(discussion.confirmedText ?? proposal)
    : current
      ? '第 ' + current.number + ' 轮待确认：' + clip(proposal)
      : '已提炼 ' + decisions.length + ' 条明确意见、' + opens.length + ' 项待确认';

  return {
    state, stateLabel: STATE_LABELS[state], headline,
    counts: {decisions: decisions.length, opens: opens.length,
      confirmed: discussion.confirmed ? 1 : 0},
    decisions, opens, stances, gate: {passed, checks},
    rounds: rounds.length, current: current?.number ?? 0, evidenced,
    proposal,
  };
}

export function decisionTableMarkdown(model, discussion) {
  const lines = ['## 讨论蒸馏结论', '', model.headline, ''];
  lines.push('| 编号 | 结论 / 待确认项 | 原文依据 | 状态 |', '| --- | --- | --- | --- |');
  for (const item of model.decisions) {
    lines.push('| ' + item.id + ' | ' + item.text + ' | ' + lineLabel(item.evidence) + ' · ' + quote(item.evidence) +
      ' | ' + item.status + ' |');
  }
  for (const item of model.opens) {
    lines.push('| ' + item.id + ' | ' + item.text + (item.resolution ? ' → 拟议：' + item.resolution : '') +
      ' | ' + lineLabel(item.evidence) + ' · ' + quote(item.evidence) + ' | ' + item.status + ' |');
  }
  lines.push('', '### 立场登记（第 ' + (model.current || 0) + ' 轮）', '');
  if (!model.stances.rows.length) lines.push('- 尚未登记');
  for (const row of model.stances.rows) {
    lines.push('- ' + row.name + ' · ' + row.stanceLabel + (row.point ? ' · ' + row.point : '') +
      (row.note ? ' · ' + row.note : ''));
  }
  lines.push('', '### G2 讨论门控', '', model.gate.passed ? '- 结论：通过' : '- 结论：未通过');
  for (const check of model.gate.checks) {
    lines.push('- ' + (check.ok ? '[通过] ' : '[待办] ') + check.id + ' ' + check.label + ' —— ' + check.detail);
  }
  if (discussion?.transcript) {
    lines.push('', '### 讨论原文', '', ...discussion.transcript.split(/\r?\n/).map((line, index) => (index + 1) + '  ' + line));
  }
  return lines.join('\n');
}
