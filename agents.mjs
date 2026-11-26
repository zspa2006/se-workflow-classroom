import { recordEvent, EVENT_TYPES } from './observability.mjs';

const roles = {
  '产品设计': {name:'设计 Agent', duty:'梳理接口、数据结构、约束和异常，交付可供下游实现的契约文档。'},
  '前端': {name:'前端开发 Agent', duty:'按设计和前置契约编写前端代码，覆盖交互、错误反馈和边界。'},
  '后端': {name:'后端开发 Agent', duty:'按设计和前置契约编写后端代码，覆盖数据校验、接口和异常行为。'},
  '测试': {name:'测试 Agent', duty:'按测试层次和分配的用例编写测试脚本或可执行步骤，并写出运行方法。'},
  '评审': {name:'代码评审 Agent', duty:'读取被评审的代码，核对需求、设计与边界；按文件和位置说明问题及修改建议。'},
};

export const planningAgents = {
  discussion: '讨论提炼 Agent', requirements: '需求分析 Agent', design: '软件架构 Agent',
  decompose: 'PM Agent', 'test-plan': '测试设计 Agent',
};

export function agentForTask(task) {
  return roles[task.kind === 'contract' && ['前端', '后端'].includes(task.role) ? '产品设计' : task.role];
}

export function validateAgentOutput(value, task) {
  if (typeof value?.summary !== 'string' || !value.summary.trim() || value.summary.length > 1200 ||
      !Array.isArray(value.artifacts) || !value.artifacts.length || value.artifacts.length > 4) {
    throw new Error('Agent 需返回摘要和 1 至 4 个交付文件');
  }
  const paths = new Set();
  const artifacts = value.artifacts.map(file => {
    if (typeof file?.path !== 'string' || file.path.length > 120 ||
        !/^[A-Za-z0-9_-][A-Za-z0-9_.-]*(\/[A-Za-z0-9_-][A-Za-z0-9_.-]*)*$/.test(file.path) ||
        paths.has(file.path) || typeof file.content !== 'string' || !file.content.trim() || file.content.length > 16000) {
      throw new Error('交付文件需要唯一的相对路径和完整内容');
    }
    paths.add(file.path);
    return {path:file.path, content:file.content};
  });
  if (artifacts.reduce((sum, file) => sum + file.content.length, 0) > 24000) {
    throw new Error('交付文件总长度不能超过 24000 字');
  }
  const output = {summary: value.summary.trim(), artifacts};
  if (task.role === '评审') {
    if (!['pass','changes_requested','needs_evidence'].includes(value.verdict)) throw new Error('需提供有效的评审结论');
    output.verdict = value.verdict;
  }
  if (task.role === '测试' && value.verdict !== undefined) throw new Error('测试任务只能交付脚本或步骤，不能声明测试结果');
  return output;
}

export function currentAgentOutput(record) {
  return record?.agentOutput && record.agentOutput.attempt === record.attempts ? record.agentOutput : undefined;
}

export function approvedHandoffs(ids, runtime) {
  const handoffs = ids.map(id => {
    const record = runtime[id];
    if (record?.status !== 'done') throw new Error(id + ' 尚未确认交付');
    const delivered = currentAgentOutput(record);
    const note = record.notes.findLast(item => item.action === 'complete')?.note ?? '';
    return {id, note, artifacts: delivered?.artifacts ?? []};
  });
  // 节点交接记录点：所有前置校验通过后才记录，产物仅以路径引用。
  for (const handoff of handoffs) {
    recordEvent({event_type: EVENT_TYPES.HANDOFF, entity_ref: handoff.id, t_id: handoff.id,
      to_status: 'done', attempt_number: runtime[handoff.id].attempts, actor: 'agent',
      evidence_ref: handoff.artifacts.length ? handoff.artifacts.map(file => file.path).join('|')
        : 'runtime.' + handoff.id + '.notes'});
  }
  return handoffs;
}
