import assert from 'node:assert/strict';
import test from 'node:test';
import {distillDiscussion, decisionTableMarkdown, GATE_CHECKS} from '../distill.mjs';
import {startConsensusRound, registerStance, confirmConsensus} from '../consensus.mjs';

const transcript = [
  '产品同学：先做多人旅游行程网页，每天最多 8 小时。',
  '测试同学：景点拖到另一天超时，是拒绝还是允许警告后保存？',
  '产品同学：这个还需要确认。',
].join('\n');

const points = [
  {id: 'P1', kind: 'decision', text: '每天最多 8 小时', evidence: [{line: 1, quote: '每天最多 8 小时'}]},
  {id: 'P2', kind: 'open', text: '超时是拒绝还是警告后保存',
    evidence: [{line: 2, quote: '是拒绝还是允许警告后保存'}]},
];

function draft() {
  return {transcript, mainline: '先做多人旅游行程网页，每天最多 8 小时', points, confirmed: false};
}

function agreed() {
  let current = startConsensusRound(draft(), {
    participants: ['产品同学', '测试同学'],
    proposal: '每天最多 8 小时，超时拒绝移动并提示原因',
    resolutions: {P2: '拒绝超时移动并提示原因'}, responses: {},
  });
  current = registerStance(current, {participant: '产品同学', stance: 'agree', note: ''});
  return current;
}

test('没有讨论时结论为空且门控不通过', () => {
  const model = distillDiscussion(undefined);
  assert.equal(model.state, 'empty');
  assert.equal(model.gate.passed, false);
  assert.equal(model.gate.checks.length, GATE_CHECKS.length);
  assert.equal(model.headline, '尚未提炼讨论');
});

test('提炼后按 D/Q 编号给出决策与待确认项，并附行号依据', () => {
  const model = distillDiscussion(draft());
  assert.equal(model.state, 'extracted');
  assert.equal(model.counts.decisions, 1);
  assert.equal(model.counts.opens, 1);
  assert.deepEqual(model.decisions.map(item => item.id), ['D-01']);
  assert.deepEqual(model.opens.map(item => item.id), ['Q-01']);
  assert.equal(model.decisions[0].text, '每天最多 8 小时');
  assert.equal(model.decisions[0].evidence[0].line, 1);
  assert.equal(model.opens[0].status, '待填写');
  // 待确认项还没有拟议决定，门控必须拦住。
  assert.equal(model.gate.passed, false);
  assert.equal(model.gate.checks[1].ok, false);
  assert.match(model.headline, /已提炼 1 条明确意见、1 项待确认/);
});

test('确认轮里立场没登记齐时门控不通过，登记齐后通过', () => {
  const partial = agreed();
  const before = distillDiscussion(partial);
  assert.equal(before.state, 'round');
  assert.equal(before.stances.total, 2);
  assert.equal(before.stances.pending, 1);
  assert.equal(before.gate.checks[3].ok, false);
  assert.equal(before.gate.checks[1].ok, true);
  assert.equal(before.gate.passed, false);

  const full = registerStance(partial, {participant: '测试同学', stance: 'agree', note: ''});
  const after = distillDiscussion(full);
  assert.equal(after.stances.agree, 2);
  assert.equal(after.stances.pending, 0);
  assert.equal(after.gate.passed, true);
  assert.equal(after.gate.checks[4].ok, true);
});

test('确认后结论定稿，标题引用已确认提案', () => {
  const full = registerStance(agreed(), {participant: '测试同学', stance: 'agree', note: ''});
  const final = confirmConsensus(full);
  const model = distillDiscussion(final.discussion);
  assert.equal(model.state, 'confirmed');
  assert.equal(model.gate.passed, true);
  assert.match(model.headline, /^已确认：/);
  assert.equal(model.opens[0].status, '已定稿');
});

test('本轮出现反对时门控列出待处理的人', () => {
  let current = startConsensusRound(draft(), {
    participants: ['产品同学', '测试同学'],
    proposal: '每天最多 8 小时，超时允许警告后保存',
    resolutions: {P2: '允许警告后保存'}, responses: {},
  });
  current = registerStance(current, {participant: '产品同学', stance: 'agree', note: ''});
  current = registerStance(current, {participant: '测试同学', stance: 'object', point: 'P2', note: '应当拒绝并提示'});
  const model = distillDiscussion(current);
  assert.equal(model.gate.checks[2].ok, false);
  assert.match(model.gate.checks[2].detail, /测试同学/);
  assert.equal(model.stances.object, 1);
  assert.equal(model.gate.passed, false);
});

test('导入的历史轮次若漏了异议回应，门控能指出上一轮未回应的人', () => {
  const historical = {
    ...draft(),
    participants: ['产品同学', '测试同学'],
    rounds: [
      {number: 1, proposal: '先做行程网页，超时允许保存', resolutions: {P2: '允许保存'},
        responses: {}, votes: [{participant: '产品同学', stance: 'agree', point: '', note: '', time: 't'}],
        openedAt: 't'},
      {number: 2, proposal: '先做行程网页，超时拒绝并提示', resolutions: {P2: '拒绝并提示'},
        responses: {}, votes: [], openedAt: 't'},
    ],
  };
  const model = distillDiscussion(historical);
  assert.equal(model.gate.checks[2].ok, true, '上一轮只有同意时不需要回应');
  const withObjection = {
    ...historical,
    rounds: [
      {...historical.rounds[0], votes: [{participant: '测试同学', stance: 'object', point: 'P2', note: '应拒绝', time: 't'}]},
      historical.rounds[1],
    ],
  };
  const blocked = distillDiscussion(withObjection);
  assert.equal(blocked.gate.checks[2].ok, false);
  assert.match(blocked.gate.checks[2].detail, /上一轮异议未回应：测试同学/);
});

test('决策表导出包含编号、行号依据与门控结论', () => {
  const full = registerStance(agreed(), {participant: '测试同学', stance: 'agree', note: ''});
  const final = confirmConsensus(full).discussion;
  const markdown = decisionTableMarkdown(distillDiscussion(final), final);
  assert.match(markdown, /D-01/);
  assert.match(markdown, /Q-01/);
  assert.match(markdown, /第 2 行/);
  assert.match(markdown, /G2 讨论门控/);
  assert.match(markdown, /\[通过\] G2-5/);
  assert.match(markdown, /1  产品同学/);
});

test('旧版记录（无轮次）也能蒸馏，但门控停在待起草', () => {
  const legacy = {transcript, mainline: '先做行程网页', points, confirmed: false, participants: []};
  const model = distillDiscussion(legacy);
  assert.equal(model.state, 'extracted');
  assert.equal(model.rounds, 0);
  assert.equal(model.gate.passed, false);
  assert.match(decisionTableMarkdown(model, legacy), /尚未登记|G2 讨论门控/);
});
