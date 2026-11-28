import { examples } from './examples.mjs';
import { schedule, taskStage, testLevelLabels } from './workflow.mjs';
import { validateDesign, validateTaskLinks, validateTestPlan, designMarkdown, designFeedback } from './pipeline.mjs';
import { createObservability, recordEvent, mergeStructuredEvents, getStructuredEvents, buildSummary,
  restoreStructuredEvents, EVENT_TYPES, REASON_CODES } from './observability.mjs';
import { stateLabels, taskState, rollbackScope, rollbackTargets } from './interaction.mjs';
import { agentForTask, planningAgents } from './agents.mjs';
import { statusBadge, statusLegend, rollbackAffectedIds } from './status.mjs';
import { orderLayers, transitiveUpstream, transitiveDownstream, focusBreadcrumb, groupByDepth } from './graph/layout.mjs';
import { taskDepths, criticalChain, rollbackCausality } from './graph/batches.mjs';
import { clampScale, fitScale, scaledSize } from './graph/viewport.mjs';
import { stepSpring, samplePolyline, reducedMotion, animateFlipSlide, animateNumber,
  syncPillThumb, enhanceSelect, syncCustomSelect, createNeuHScroll, drawBeamAlongPolyline } from './motion.mjs';

const byId = id => document.getElementById(id);
const directFile = location.protocol === 'file:';
const apiBase = directFile ? 'http://127.0.0.1:8765' : '';
const spec = byId('spec');
const inputMode = byId('input-mode');
const example = byId('example');
const capacity = byId('capacity');
const file = byId('file');
const run = byId('run');
const replay = byId('replay');
const notice = byId('notice');
const view = byId('view');
const keyDialog = byId('key-dialog');
const keyInput = byId('key-input');
const tabs = [...document.querySelectorAll('[data-view]')];
const tabBar = tabs[0]?.parentElement;
const wsNav = byId('workspace-nav');
let result, arrangement, observer;
let stopGraphMotion;
let viewCleanups = [];
let lastMetricValues = null;
let metricCleanups = [];
let pageKey, apiStatus;
let active = 'tasks';
let selected = '';
let requirementFilter = '';
let busy = false;
let pipeline, draft;
let chainView = 'idea';
let chainExpanded = false;
let runningStage = '';
let graphLayout = 'horizontal';
let inputCollapsed = false;
let floatDocked = false;
let dockActiveInspector = null;
const floatingEl = byId('floating-inspector');
const floatingHead = byId('float-insp-heading');
const floatingBody = byId('float-insp-body');
const floatingDrag = byId('floating-insp-drag');
const floatingClose = byId('float-insp-close');
const steps = [
  ['idea', '产品想法'], ['requirements', '需求规格'], ['design', '设计规格'],
  ['tests', '测试方案'], ['schedule', '任务编排'], ['feedback', '设计回填'],
];
const stepLabels = new Map(steps);

function hideFloatingInspector() {
  if (!floatingEl) return;
  floatingEl.hidden = true;
  floatingEl.classList.remove('is-dragging');
}

function clampFloatingInspector() {
  if (!floatingEl || floatingEl.hidden) return;
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const fw = floatingEl.offsetWidth || 540;
  const fh = floatingEl.offsetHeight || 260;
  const rect = floatingEl.getBoundingClientRect();
  const nextLeft = Math.max(12, Math.min(vw - fw - 12, rect.left));
  const nextTop = Math.max(62, Math.min(vh - fh - 12, rect.top));
  floatingEl.style.left = Math.round(nextLeft) + 'px';
  floatingEl.style.top = Math.round(nextTop) + 'px';
}

function positionFloatingNearNode(nodeBtn) {
  if (!floatingEl || !nodeBtn) return;
  floatingEl.hidden = false;
  const nr = nodeBtn.getBoundingClientRect();
  const fw = floatingEl.offsetWidth || 540;
  const fh = floatingEl.offsetHeight || 260;
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  let left = nr.right + 14;
  if (left + fw > vw - 14) left = Math.max(12, nr.left - fw - 14);
  if (left + fw > vw - 14) left = Math.max(12, vw - fw - 14);
  const top = Math.max(62, Math.min(vh - fh - 14, nr.top - 12));
  floatingEl.style.left = Math.round(left) + 'px';
  floatingEl.style.top = Math.round(top) + 'px';
}

function initFloatingInspectorControls() {
  if (!floatingEl || !floatingDrag) return;
  let dragging = false;
  let startX = 0;
  let startY = 0;
  let origL = 0;
  let origT = 0;

  floatingDrag.addEventListener('pointerdown', event => {
    if (event.target.closest('button')) return;
    dragging = true;
    floatingEl.classList.add('is-dragging');
    const rect = floatingEl.getBoundingClientRect();
    origL = rect.left;
    origT = rect.top;
    startX = event.clientX;
    startY = event.clientY;
    floatingDrag.setPointerCapture(event.pointerId);
  });
  floatingDrag.addEventListener('pointermove', event => {
    if (!dragging) return;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const fw = floatingEl.offsetWidth || 540;
    const fh = floatingEl.offsetHeight || 260;
    const nextL = Math.max(12, Math.min(vw - fw - 12, origL + (event.clientX - startX)));
    const nextT = Math.max(62, Math.min(vh - fh - 12, origT + (event.clientY - startY)));
    floatingEl.style.left = Math.round(nextL) + 'px';
    floatingEl.style.top = Math.round(nextT) + 'px';
  });
  const endDrag = () => {
    dragging = false;
    floatingEl.classList.remove('is-dragging');
  };
  floatingDrag.addEventListener('pointerup', endDrag);
  floatingDrag.addEventListener('pointercancel', endDrag);

  floatingClose?.addEventListener('click', () => {
    if (dockActiveInspector) dockActiveInspector();
    else hideFloatingInspector();
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape' || !floatingEl || floatingEl.hidden) return;
    if (document.querySelector('dialog[open]')) return;
    if (dockActiveInspector) dockActiveInspector();
    else hideFloatingInspector();
  });
}

function renderRailOverview() {
  const chip = byId('rail-chain-chip');
  const slot = byId('rail-overview-slot');
  if (!chip || !slot) return;
  if (!result || !arrangement) {
    chip.textContent = '等待运行';
    slot.replaceChildren(element('p', '运行工作流或导入结果后，将在此展示最长依赖关键链与需求覆盖追溯。', 'inspector-tip'));
    return;
  }
  const depths = taskDepths(arrangement.dependencies);
  const chain = criticalChain(arrangement.dependencies, depths);
  const chainBatches = new Set(chain.map(id => arrangement.rounds.findIndex(batch => batch.includes(id))));
  const runtime = monitor.getRuntime();
  chip.textContent = chainBatches.size + ' 批次最长链';

  const nodes = [];
  if (chain.length) {
    const chainBar = element('div', '', 'rail-overview-chain');
    chainBar.setAttribute('aria-label', '关键路径节点链');
    chain.forEach((id, idx) => {
      if (idx > 0) chainBar.append(element('span', '›', 'rail-chain-chev'));
      const btn = element('button', id, 'rail-chain-btn');
      btn.type = 'button';
      if (runtime[id]?.status === 'failed') btn.classList.add('is-failed');
      btn.title = '在依赖图中查看 ' + id;
      btn.addEventListener('click', () => locateGraphTask(id));
      chainBar.append(btn);
    });
    nodes.push(chainBar);
  }

  const reqList = element('div', '', 'rail-req-list');
  for (const req of result.plan.requirements) {
    const linked = result.plan.tasks.filter(t => t.requirements.includes(req.id)).map(t => t.id);
    const box = element('div', '', 'rail-req-item');
    const summary = req.text.length > 26 ? req.text.slice(0, 26) + '…' : req.text;
    box.append(element('strong', req.id + ' · ' + summary),
      document.createTextNode(' · 覆盖 ' + (linked.join('、') || '暂无')));
    reqList.append(box);
  }
  nodes.push(reqList);
  slot.replaceChildren(...nodes);
}

function renderRailActivity(events = []) {
  const list = byId('rail-activity-list');
  const tip = byId('rail-activity-tip');
  if (!list) return;
  const recent = events.slice(-4).reverse();
  if (!recent.length) {
    list.replaceChildren();
    if (tip) tip.hidden = false;
    return;
  }
  list.replaceChildren(...recent.map(event => {
    const li = element('li');
    const time = element('time', new Date(event.time).toLocaleTimeString('zh-CN', {hour: '2-digit', minute: '2-digit'}));
    const title = element('strong', [event.stage, event.agent, event.status].filter(Boolean).join(' · '));
    const msg = document.createTextNode(' · ' + event.message);
    li.append(time, title, msg);
    return li;
  }));
  if (tip) tip.hidden = false;
}

function updateRightRailContext(inspectingId = '', inspectorEl = null, { floating = false, title = '', onReopen = null } = {}) {
  const heading = byId('right-ctx-heading');
  const chip = byId('right-ctx-chip');
  const inspectorSlot = byId('rail-inspector-slot');
  const activitySlot = byId('rail-activity-slot');
  if (!heading || !chip || !inspectorSlot || !activitySlot) return;
  if (inspectingId && active === 'graph' && floating) {
    heading.textContent = '节点检视状态';
    chip.textContent = '已悬浮展开';
    const note = element('div', '', 'inspector-tip');
    note.style.marginTop = '0';
    note.append(
      document.createTextNode('当前正在依赖图节点旁悬浮检视 '),
      element('strong', title || inspectingId),
      document.createTextNode('；可拖动悬浮窗，点击右上角 × 即可自动贴回此处显示。')
    );
    inspectorSlot.replaceChildren(note);
    inspectorSlot.hidden = false;
    activitySlot.hidden = true;
  } else if (inspectingId && inspectorEl && active === 'graph') {
    heading.textContent = '节点检视 · ' + inspectingId;
    chip.textContent = '已贴回右下';
    const nodes = [inspectorEl];
    if (onReopen) {
      const reopenBtn = element('button', '在节点旁呼出宽幅悬浮窗 ↗', 'dock-popout-btn');
      reopenBtn.type = 'button';
      reopenBtn.addEventListener('click', onReopen);
      nodes.push(reopenBtn);
    }
    inspectorSlot.replaceChildren(...nodes);
    inspectorSlot.hidden = false;
    activitySlot.hidden = true;
  } else {
    heading.textContent = '最近运行与交互摘要';
    chip.textContent = '实时同步';
    inspectorSlot.replaceChildren();
    inspectorSlot.hidden = true;
    activitySlot.hidden = false;
  }
}

const monitor = createObservability({
  request: requestStage, ready: ensureReady, getResult: () => result, getArrangement: () => arrangement,
  download: downloadFile, isBusy: () => busy, setBusy: lock,
  renderCases: taskCases, openPlan: () => selectWorkspace(false, true),
  refreshExecution: () => { if (result && active === 'execution') render(); },
  onActivityChange: renderRailActivity,
  adopt: text => {
    inputMode.value = 'idea';
    spec.value = text;
    changeSpec(true);
  },
});

function syncTabIndicator() {
  syncPillThumb(tabBar);
  syncPillThumb(wsNav);
}
window.addEventListener('resize', () => {
  syncTabIndicator();
  clampFloatingInspector();
});

function selectWorkspace(discussion, focus = false) {
  if (discussion) {
    stopGraphMotion?.();
    stopGraphMotion = undefined;
    hideFloatingInspector();
  }
  byId('workspace').hidden = discussion;
  byId('discussion-panel').hidden = !discussion;
  byId('workspace-plan').setAttribute('aria-pressed', String(!discussion));
  byId('workspace-discussion').setAttribute('aria-pressed', String(discussion));
  syncPillThumb(wsNav);
  if (!discussion) {
    syncPillThumb(tabBar);
    if (result && active === 'graph') render();
  }
  if (focus) byId(discussion ? 'workspace-discussion' : 'workspace-plan').focus();
}

function updateInputSummary() {
  const summary = byId('input-summary');
  if (!summary) return;
  const exampleText = example.selectedOptions[0]?.textContent || '自定义输入';
  summary.textContent = modeLabel() + ' · ' + exampleText + ' · 每批上限 ' + capacity.value;
}

const leftCollapse = byId('left-collapse');
leftCollapse?.addEventListener('transitionend', () => leftCollapse.classList.remove('is-animating'));

function showInput(visible) {
  inputCollapsed = !visible;
  if (leftCollapse) {
    leftCollapse.classList.add('is-animating');
    leftCollapse.classList.toggle('is-collapsed', !visible);
    leftCollapse.setAttribute('aria-hidden', String(!visible));
  }
  byId('workspace').classList.toggle('input-collapsed', !visible);
  const toggle = byId('toggle-input');
  toggle.setAttribute('aria-expanded', String(visible));
  byId('toggle-input-label').textContent = visible ? '收起左栏' : '展开左栏';
  const summary = byId('input-summary');
  if (summary) summary.hidden = visible;
  updateInputSummary();
  requestAnimationFrame(() => syncTabIndicator());
}

byId('workspace-plan').addEventListener('click', () => selectWorkspace(false));
byId('workspace-discussion').addEventListener('click', () => selectWorkspace(true));
byId('toggle-input').addEventListener('click', () => showInput(inputCollapsed));
byId('toggle-chain')?.addEventListener('click', () => {
  chainExpanded = false;
  renderChain();
});
byId('open-activity').addEventListener('click', () => byId('activity-dialog').showModal());

function element(tag, content = '', className = '') {
  const node = document.createElement(tag);
  node.textContent = content;
  node.className = className;
  return node;
}

example.add(new Option('自定义输入', ''));
examples.forEach(({name}, index) => example.add(new Option(name, String(index))));
for (let n = 1; n <= 8; n++) capacity.add(new Option(String(n), String(n)));
capacity.value = '4';
enhanceSelect(inputMode);
enhanceSelect(capacity);
enhanceSelect(example);

function modeLabel() {
  return inputMode.value === 'idea' ? '产品想法' : '设计规格';
}

function runLabel() {
  if (inputMode.value === 'design') return draft ? '继续生成测试方案' : '运行任务编排';
  if (pipeline?.requirements && !pipeline.testPlan) return '继续完整流程';
  return '运行完整流程';
}

function setRunLabel(text) {
  const label = byId('run-label');
  if (label) label.textContent = text;
  else run.textContent = text;
}

function updateInput() {
  byId('count').textContent = spec.value.length + ' / 4000';
  byId('spec-label').textContent = modeLabel();
  const field = inputMode.value === 'idea' ? 'idea' : 'spec';
  const match = examples.findIndex(item => item[field] === spec.value);
  example.value = match < 0 ? '' : String(match);
  syncCustomSelect(inputMode);
  syncCustomSelect(capacity);
  syncCustomSelect(example);
  byId('input-error').textContent = '';
  updateInputSummary();
}

function statusMessage(title, body) {
  notice.hidden = false;
  byId('results').hidden = true;
  byId('metrics').hidden = true;
  byId('exports').hidden = true;
  byId('result-title').textContent = '工作流输出';
  byId('provenance').textContent = '';
  byId('notice-title').textContent = title;
  byId('notice-body').textContent = body;
  hideFloatingInspector();
  dockActiveInspector = null;
  renderRailOverview();
  updateRightRailContext();
  stopGraphMotion?.();
  stopGraphMotion = undefined;
  observer?.disconnect();
}

function changeSpec(preserveDiscussion = false) {
  result = undefined;
  pipeline = undefined;
  draft = undefined;
  lastMetricValues = null;
  chainView = 'idea';
  chainExpanded = false;
  if (preserveDiscussion !== true) monitor.reset();
  updateInput();
  setRunLabel(runLabel());
  statusMessage('等待运行工作流', inputMode.value === 'idea'
    ? '输入想法或选择案例，生成需求、设计和测试方案，查看实现编排与设计回填。'
    : '输入已有设计规格，查看编码、测试和评审的依赖关系。');
  renderChain();
}
spec.value = examples[0].idea;
spec.addEventListener('input', changeSpec);
example.addEventListener('change', () => {
  const field = inputMode.value === 'idea' ? 'idea' : 'spec';
  spec.value = examples[example.value]?.[field] ?? '';
  changeSpec();
  if (!example.value) spec.focus();
});
inputMode.addEventListener('change', () => {
  const item = examples[example.value];
  if (item) spec.value = inputMode.value === 'idea' ? item.idea : item.spec;
  changeSpec();
});
file.addEventListener('change', async () => {
  const chosen = file.files[0];
  file.value = '';
  if (!chosen) return;
  try {
    const content = await chosen.text();
    if (content.length > 4000) throw new Error('文件正文最多 4000 字。');
    if (content.includes('\uFFFD')) throw new Error('请将文件另存为 UTF-8 后重新导入。');
    if (busy) return;
    spec.value = content;
    changeSpec();
  } catch (error) {
    byId('input-error').textContent = error.message;
  }
});

function renderConnection() {
  const connection = byId('connection');
  if (!apiStatus) {
    connection.textContent = '生成服务未连接';
    connection.classList.remove('ready');
    return;
  }
  const configured = Boolean(pageKey) || (!directFile && apiStatus.configured);
  connection.textContent = configured ? '密钥已填写 · ' + apiStatus.model : '尚未填写密钥';
  connection.classList.toggle('ready', configured);
}
async function checkStatus() {
  try {
    const response = await fetch(apiBase + '/api/status', {signal: AbortSignal.timeout(2500)});
    if (!response.ok) throw new Error('status unavailable');
    apiStatus = await response.json();
  } catch {
    apiStatus = undefined;
  }
  byId('service-help').hidden = Boolean(apiStatus);
  renderConnection();
}

function openKeyDialog() {
  keyInput.value = '';
  byId('key-error').textContent = '';
  if (!keyDialog.open) keyDialog.showModal();
}

byId('configure').addEventListener('click', openKeyDialog);
byId('cancel-key').addEventListener('click', () => keyDialog.close());
keyDialog.addEventListener('close', () => { keyInput.value = ''; });
byId('key-form').addEventListener('submit', event => {
  event.preventDefault();
  const key = keyInput.value.trim();
  if (!/^[\x21-\x7e]{1,512}$/.test(key)) {
    byId('key-error').textContent = '请检查是否复制了多余字符。';
    keyInput.focus();
    return;
  }
  pageKey = key;
  keyDialog.close();
  renderConnection();
});

function lock(value) {
  busy = value;
  for (const control of [spec, inputMode, example, capacity, file, replay, run]) control.disabled = value;
  syncCustomSelect(inputMode);
  syncCustomSelect(capacity);
  syncCustomSelect(example);
  notice.classList.toggle('busy', value);
  setRunLabel(value ? '正在生成…' : runLabel());
}

async function requestStage(endpoint, body, track = true) {
  const labels = {discussion:'讨论提炼',requirements:'想法 → 需求规格',design:'需求 → 设计规格',
    decompose:'设计 → 开发任务分解', 'test-plan':'测试方案 → 实现任务集'};
  const label = labels[endpoint] || endpoint;
  const started = performance.now();
  const agent = planningAgents[endpoint];
  let received = false;
  if (track) monitor.log(label, '开始', '已提交 DeepSeek API 请求', {agent});
  try {
    const response = await fetch(apiBase + '/api/' + endpoint, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({...body, apiKey: pageKey}),
    });
    const data = await response.json();
    received = true;
    mergeStructuredEvents(data.observability_events);
    if (!response.ok) throw new Error(data.error);
    if (track) {
      monitor.log(label, '完成', '产物通过结构校验，耗时 ' + ((performance.now()-started)/1000).toFixed(1) + ' 秒',
        {agent, model:data.model, validations: data.validations || []});
      for (const message of data.validations || []) monitor.log(label, '校验修正', message, {agent});
    }
    return data;
  } catch (error) {
    if (!received) {
      recordEvent({event_type: EVENT_TYPES.STAGE_START, stage: endpoint, actor: 'system'});
      recordEvent({event_type: EVENT_TYPES.STAGE_FAIL, stage: endpoint, actor: 'system',
        reason_code: REASON_CODES.NETWORK_ERROR});
    }
    if (track) monitor.log(label, '失败', error.message, {agent});
    throw error;
  }
}

async function runPipeline(idea) {
  pipeline ??= {idea};
  if (!pipeline.requirements) {
    runningStage = 'requirements';
    chainExpanded = true;
    renderChain();
    statusMessage('正在生成需求规格', '作业一 · 将产品想法整理为编号需求和验收条件。');
    const data = await requestStage('requirements', {idea});
    pipeline.requirements = data.requirements;
    chainView = 'requirements';
  }
  if (!pipeline.design) {
    runningStage = 'design';
    chainExpanded = true;
    renderChain();
    statusMessage('正在生成设计规格', '根据需求规格生成总体设计、模块划分和接口约定。');
    const data = await requestStage('design', {requirements: pipeline.requirements});
    pipeline.design = data.design;
    chainView = 'design';
  }
  await runImplementation({requirements: pipeline.requirements, design: pipeline.design});
}

async function runImplementation(source) {
  if (!draft) {
    runningStage = 'schedule';
    chainExpanded = true;
    renderChain();
    statusMessage('正在分解开发任务', 'PM Agent 正在按设计规格分解模块、接口契约和编码任务。');
    draft = (await requestStage('decompose', {...source, draftOnly: true})).plan;
  }
  runningStage = 'tests';
  chainExpanded = true;
  renderChain();
  statusMessage('正在制定测试方案', '用例通过校验后，和编码、评审一起进入任务集，再计算执行批次。');
  const {testPlan, ...data} = await requestStage('test-plan', {...source, plan: draft, draftOnly: true});
  if (pipeline) {
    pipeline.testPlan = testPlan;
    chainView = 'schedule';
  }
  show({...data, spec: source.spec ?? designMarkdown(source.requirements, source.design),
    ...(pipeline ? {pipeline} : {testPlan})});
  draft = undefined;
  monitor.log('实现阶段编排', '完成', result.plan.tasks.length + ' 项编码、测试、评审与设计任务，'
    + arrangement.rounds.length + ' 个执行批次');
}

async function ensureReady() {
  if (!apiStatus) await checkStatus();
  if (busy) return false;
  if (!apiStatus) {
    byId('input-error').textContent = '生成服务未连接。启动后再点一次「运行工作流」。';
    return false;
  }
  if (!pageKey && (directFile || !apiStatus.configured)) {
    openKeyDialog();
    return false;
  }
  return true;
}

run.addEventListener('click', async () => {
  if (busy) return;
  if (spec.value.trim().length < 15) {
    byId('input-error').textContent = '请输入至少 15 字的' + modeLabel() + '。';
    spec.focus();
    return;
  }
  if (!await ensureReady()) return;
  if (result) {
    pipeline = undefined;
    chainView = 'idea';
    result = undefined;
    monitor.resetRuntime();
  }
  byId('input-error').textContent = '';
  lock(true);
  try {
    if (inputMode.value === 'idea') {
      await runPipeline(spec.value);
    } else {
      await runImplementation({spec: spec.value});
    }
  } catch (error) {
    const title = runningStage ? stepLabels.get(runningStage) + '生成失败' : '生成失败';
    byId('input-error').textContent = title + '。' + error.message;
    statusMessage(title, error.message);
    if (error instanceof TypeError) await checkStatus();
  } finally {
    runningStage = '';
    lock(false);
    renderChain();
  }
});

replay.addEventListener('change', async () => {
  const chosen = replay.files[0];
  replay.value = '';
  if (!chosen) return;
  try {
    if (chosen.size > 1024 * 1024) throw new Error('结果文件最多 1 MB。');
    const {provider, spec: source, plan, model, generatedAt, pipeline: chain, observation, testPlan,
      events: exportedEvents = []} = JSON.parse(await chosen.text());
    if (busy) return;
    const input = chain === undefined ? source : chain?.idea;
    if (provider !== 'deepseek' || typeof input !== 'string' || input.trim().length < 15 ||
        input.length > 4000 || typeof model !== 'string' || !model.trim()) {
      throw new Error('请选择此工作台导出的 DeepSeek 结果 JSON。');
    }
    let sourceDesign = source;
    let restoredPlan = plan;
    if (chain) {
      validateDesign(chain.design, chain.requirements);
      sourceDesign = designMarkdown(chain.requirements, chain.design);
      restoredPlan = {...plan, project: chain.requirements.project, requirements: chain.requirements.requirements};
      schedule(restoredPlan, Number(capacity.value));
      validateTaskLinks(restoredPlan, chain.design);
      if (chain.testPlan !== undefined) validateTestPlan(chain.testPlan, chain.design, restoredPlan);
    } else {
      schedule(restoredPlan, Number(capacity.value));
      if (testPlan !== undefined) validateTestPlan(testPlan, undefined, restoredPlan);
    }
    if (restoredPlan.tasks.some(task => task.test?.cases) && !(chain?.testPlan ?? testPlan)) {
      throw new Error('结果缺少与测试任务绑定的测试方案');
    }
    const restoredArrangement = schedule(restoredPlan, Number(capacity.value));
    monitor.restore(observation, restoredPlan, restoredArrangement);
    restoreStructuredEvents(exportedEvents);
    pipeline = chain;
    draft = undefined;
    inputMode.value = chain ? 'idea' : 'design';
    chainView = chain ? 'design' : 'idea';
    show({provider, spec: sourceDesign, plan: restoredPlan, model, generatedAt, pipeline, testPlan, mode: 'imported'});
    spec.value = input;
    updateInput();
    setRunLabel(runLabel());
    renderChain();
  } catch (error) {
    byId('input-error').textContent = error instanceof SyntaxError ? '结果文件不是有效的 JSON。' : error.message;
  }
});

function show(data) {
  arrangement = schedule(data.plan, Number(capacity.value));
  result = data;
  selected = '';
  floatDocked = false;
  requirementFilter = '';
  chainExpanded = false;
  lastMetricValues = null;
  byId('result-title').textContent = result.plan.project;
  byId('provenance').textContent =
    (data.mode === 'live' ? '现场生成 · DeepSeek API' : '已导入 DeepSeek 结果') + ' · ' + data.model;
  notice.hidden = true;
  byId('results').hidden = false;
  byId('metrics').hidden = false;
  byId('exports').hidden = false;
  render();
  syncTabIndicator();
}

capacity.addEventListener('change', () => {
  updateInputSummary();
  if (!result) return;
  arrangement = schedule(result.plan, Number(capacity.value));
  monitor.log('重新编排', '完成', '每批并行上限 ' + capacity.value + '，共 ' + arrangement.rounds.length + ' 批');
  render();
  renderChain();
});
tabs.forEach(button => button.addEventListener('click', () => {
  active = button.dataset.view;
  render();
}));

byId('go-spec').addEventListener('click', () => {
  selectWorkspace(false);
  if (pipeline?.design) {
    openChain('design');
    return;
  }
  showInput(true);
  byId('input-title').scrollIntoView({block: 'start'});
  if (!busy) spec.focus({preventScroll: true});
});

function openResults(viewName) {
  active = viewName;
  if (byId('workspace').hidden) selectWorkspace(false);
  if (result) render();
  else if (!busy) {
    const showTasks = viewName === 'tasks';
    statusMessage(showTasks ? 'PM Agent · 等待分解任务' : '任务编排 · 等待生成依赖图',
      showTasks ? '点击「运行工作流」，查看 DeepSeek 从设计规格拆出的任务。'
        : '点击「运行工作流」，或导入已有结果，查看任务依赖和执行批次。');
  }
  const title = byId('result-title');
  title.scrollIntoView({block: 'start'});
  title.focus({preventScroll: true});
}

byId('go-tasks').addEventListener('click', () => openResults('tasks'));
byId('go-graph').addEventListener('click', () => openResults('graph'));

const chainDrawer = byId('chain-drawer');
chainDrawer?.addEventListener('transitionend', () => chainDrawer.classList.remove('is-animating'));

function openChain(step, allowToggle = false) {
  if (step === 'schedule') {
    chainExpanded = false;
    renderChain();
    openResults('graph');
    return;
  }
  if (allowToggle && chainExpanded && chainView === step && !runningStage) {
    chainExpanded = false;
    renderChain();
    return;
  }
  chainView = step;
  chainExpanded = true;
  renderChain();
  byId('chain-content').focus({preventScroll: true});
}

function designCard(part) {
  const card = element('article', '', 'chain-card');
  card.append(element('h4', part.id + ' · ' + part.title),
    element('p', '关联需求：' + part.requirements.join('、'), 'hint'),
    element('p', part.design),
    element('p', '接口与数据约定：' + part.contract));
  return card;
}

function renderChain() {
  const chain = byId('chain');
  chain.hidden = inputMode.value !== 'idea';
  if (chain.hidden) return;
  const available = {
    idea: Boolean(spec.value.trim()), requirements: Boolean(pipeline?.requirements),
    design: Boolean(pipeline?.design), schedule: Boolean(result), feedback: Boolean(result),
    tests: Boolean(pipeline?.testPlan),
  };
  const owners = {idea:'参会者 / 负责人', requirements:planningAgents.requirements, design:planningAgents.design,
    tests:planningAgents['test-plan'], schedule:planningAgents.decompose + ' / 编排器', feedback:'编排器'};
  byId('chain-steps').replaceChildren(...steps.map(([id, label], index) => {
    const step = element('button');
    step.type = 'button';
    step.disabled = !available[id];
    const isActive = chainExpanded && id === chainView;
    step.setAttribute('aria-pressed', String(isActive));
    step.setAttribute('aria-expanded', String(isActive));
    if (id === runningStage) step.classList.add('is-generating');
    const head = element('span', '', 'chain-step-head');
    head.append(
      element('span', '0' + (index + 1), 'chain-step-num'),
      element('span', id === runningStage ? '生成中' : available[id]
        ? (id === 'idea' ? '原始输入' : '可查看') : '待生成', 'chain-step-state')
    );
    step.append(head, element('span', label), element('span', owners[id], 'chain-owner'));
    step.addEventListener('click', () => openChain(id, true));
    return step;
  }));
  const drawer = byId('chain-drawer');
  if (drawer) {
    const isCollapsed = !chainExpanded;
    if (drawer.classList.contains('is-collapsed') !== isCollapsed) drawer.classList.add('is-animating');
    drawer.classList.toggle('is-collapsed', isCollapsed);
    drawer.setAttribute('aria-hidden', String(isCollapsed));
  }
  const drawerLabel = byId('chain-drawer-label');
  if (drawerLabel) drawerLabel.textContent = (stepLabels.get(chainView) ?? '阶段产物') + ' · 阶段产物详情';
  if (!chainExpanded) return;
  const content = byId('chain-content');
  content.replaceChildren();
  content.scrollTop = 0;
  if (chainView === 'schedule') {
    content.append(element('p', '编码、单元测试、联调、评审与验收已纳入同一任务集。', 'hint'));
    return;
  }
  if (chainView === 'idea') {
    content.append(element('h3', '原始产品想法'), element('p', spec.value || '请在左侧填写产品想法。', 'chain-text'));
    return;
  }
  const {requirements, design} = pipeline;
  if (chainView === 'requirements') {
    content.append(element('h3', '作业一 · 需求规格'),
      element('p', '目标：' + requirements.goal), element('p', '项目范围：' + requirements.scope));
    for (const req of requirements.requirements) {
      const card = element('article', '', 'chain-card');
      card.append(element('h4', req.id + ' · ' + req.text), element('p', '验收：' + req.acceptance));
      content.append(card);
    }
    return;
  }
  if (chainView === 'design') {
    content.append(element('h3', '设计规格 · 总体设计与模块'), element('p', design.summary));
    content.append(...design.components.map(designCard));
    return;
  }
  if (chainView === 'tests') {
    const {strategy, cases} = pipeline.testPlan;
    const tasks = new Map(result.plan.tasks.map(task => [task.id, task]));
    content.append(element('h3', '测试方案'), element('p', strategy));
    for (const test of cases) {
      const card = element('article', '', 'chain-card');
      const link = element('button', '查看测试任务 ' + test.task, 'task-link');
      link.type = 'button';
      link.addEventListener('click', () => locateGraphTask(test.task));
      const batch = arrangement.rounds.findIndex(ids => ids.includes(test.task)) + 1;
      const level = tasks.get(test.task).test?.level;
      card.append(element('h4', test.id + ' · ' + test.title),
        element('p', (level ? testLevelLabels[level] + ' · ' : '') +
          test.requirements.join('、') + ' → ' + (test.designs?.join('、') ?? test.design) +
          ' → ' + test.task + ' · 第 ' + batch + ' 批',
          'hint'),
        ...caseInstructions(test), link);
      content.append(card);
    }
    return;
  }
  content.append(element('h3', '设计规格回填版'), element('p', design.summary),
    element('p', '每项设计下列出编排结果、前置任务和验收依据。调整并行上限后同步更新批次。', 'hint'));
  for (const part of designFeedback(design, result.plan, arrangement)) {
    const card = designCard(part);
    for (const task of part.tasks) {
      const row = element('div', '', 'feedback-task');
      const link = element('button', task.id + ' · ' + task.title, 'task-link');
      link.type = 'button';
      link.addEventListener('click', () => locateGraphTask(task.id));
      row.append(link, element('p', '第 ' + task.batch + ' 批 · ' + task.role + ' · 交付物 ' + task.output),
        element('p', '前置任务：' + (task.predecessors.join('、') || '无') + '。验收：' + task.acceptance));
      card.append(row);
    }
    content.append(card);
  }
}

function locateGraphTask(id) {
  selected = id;
  floatDocked = false;
  openResults('graph');
  const node = byId('node-' + id);
  if (node) {
    node.scrollIntoView({block: 'nearest', inline: 'center'});
    node.focus({preventScroll: true});
    requestAnimationFrame(() => positionFloatingNearNode(node));
  }
}

function metrics() {
  for (const cancel of metricCleanups) cancel();
  metricCleanups = [];
  const tasks = result.plan.tasks;
  const runtime = monitor.getRuntime();
  const counts = Object.fromEntries(Object.keys(stateLabels).map(state => [state, 0]));
  tasks.forEach(task => counts[taskState(task.id, runtime, arrangement)]++);

  const statusCard = element('div', '', 'metric metric-status');
  const statusHead = element('div', '', 'metric-head');
  statusHead.append(element('span', '任务状态分布', 'metric-label'), element('span', '总任务', 'metric-chip chip-indigo'));
  const totalEl = element('strong', tasks.length);
  statusCard.append(statusHead, totalEl);
  const stack = element('div', '', 'metric-stack');
  stack.setAttribute('role', 'img');
  stack.setAttribute('aria-label', Object.keys(stateLabels).map(state => stateLabels[state] + ' ' + counts[state] + ' 项').join('，'));
  for (const state of Object.keys(stateLabels)) {
    if (!counts[state]) continue;
    const segment = element('span', '', 'metric-segment status-' + state);
    segment.style.flex = counts[state];
    segment.title = stateLabels[state] + ' ' + counts[state] + ' 项';
    stack.append(segment);
  }
  const compactCounts = [
    counts.done ? '完成' + counts.done : '',
    counts.waiting ? '等补' + counts.waiting : '',
    counts.running ? '进行' + counts.running : '',
    counts.ready ? '就绪' + counts.ready : '',
    counts.failed ? '失败' + counts.failed : '',
    counts.pending ? '待' + counts.pending : '',
  ].filter(Boolean).join(' · ') || '暂无';
  statusCard.append(stack, element('span', compactCounts, 'metric-detail'));

  const requirementLinks = new Set(tasks.flatMap(task => task.requirements));
  const tested = tasks.filter(task => task.test || task.review).length;
  const parallelTasks = arrangement.rounds.filter(batch => batch.length > 1).flat().length;
  const proportionCard = (value, total, label, chipText, chipClass, fillClass, detailText, prevPct) => {
    const card = element('div', '', 'metric');
    const head = element('div', '', 'metric-head');
    head.append(element('span', label, 'metric-label'), element('span', chipText, 'metric-chip ' + chipClass));
    const percent = total ? Math.round(value / total * 100) : 0;
    const numEl = element('strong', percent + '%');
    card.append(head, numEl);
    const bar = element('span', '', 'metric-bar');
    const fill = element('span', '', 'metric-fill' + (fillClass ? ' ' + fillClass : ''));
    bar.append(fill);
    if (reducedMotion()) {
      fill.style.width = percent + '%';
    } else {
      fill.style.width = (prevPct ?? 0) + '%';
      requestAnimationFrame(() => { if (fill.isConnected) fill.style.width = percent + '%'; });
    }
    bar.setAttribute('role', 'img');
    bar.setAttribute('aria-label', value + ' / ' + total);
    card.append(bar, element('span', detailText, 'metric-detail'));
    return {card, numEl, percent};
  };

  const reqTotal = result.plan.requirements.length;
  const reqMetric = proportionCard(
    requirementLinks.size, reqTotal, '需求覆盖率',
    requirementLinks.size === reqTotal ? '全关联' : '覆盖', 'chip-green', 'metric-fill-green',
    requirementLinks.size + ' / ' + reqTotal + ' 需求绑定实现与校验', lastMetricValues?.reqPct,
  );
  const parMetric = proportionCard(
    parallelTasks, tasks.length, '并行批次占比',
    '上限 ' + arrangement.capacity, 'chip-indigo', '',
    parallelTasks + ' / ' + tasks.length + ' 处于多节点并行泳道', lastMetricValues?.parPct,
  );
  const testMetric = proportionCard(
    tested, tasks.length, '质检闭环率',
    '单测+评审', 'chip-amber', 'metric-fill-amber',
    tested + ' / ' + tasks.length + ' 项为测试与评审门禁', lastMetricValues?.testPct,
  );
  const strip = element('div', '', 'metrics-strip');
  strip.append(statusCard, reqMetric.card, parMetric.card, testMetric.card);
  byId('metrics').replaceChildren(strip);
  if (lastMetricValues) {
    metricCleanups.push(
      animateNumber(totalEl, lastMetricValues.total, tasks.length, ''),
      animateNumber(reqMetric.numEl, lastMetricValues.reqPct, reqMetric.percent, '%'),
      animateNumber(parMetric.numEl, lastMetricValues.parPct, parMetric.percent, '%'),
      animateNumber(testMetric.numEl, lastMetricValues.testPct, testMetric.percent, '%'),
    );
  }
  lastMetricValues = {total: tasks.length, reqPct: reqMetric.percent, parPct: parMetric.percent, testPct: testMetric.percent};
}

function caseInstructions(test) {
  const list = element('ol', '', 'test-steps');
  test.steps.forEach(step => list.append(element('li', step)));
  return [element('p', '前置条件：' + test.setup), list, element('p', '预期结果：' + test.expected)];
}

function taskCases(task) {
  const plan = result.pipeline?.testPlan ?? result.testPlan;
  const cases = plan?.cases.filter(item => item.task === task.id);
  if (!cases?.length) return [];
  return cases.map(test => {
    const details = element('details', '', 'task-test-case');
    details.append(element('summary', test.id + ' · ' + test.title), ...caseInstructions(test));
    return details;
  });
}

function taskCard(task, full = false, interactive = false, affectedIds = new Set()) {
  const card = element(interactive ? 'button' : 'article', '', 'task');
  card.dataset.role = task.role;
  const runtime = monitor.getRuntime();
  const state = taskState(task.id, runtime, arrangement);
  const affected = affectedIds.has(task.id);

  const stage = taskStage(task);
  const agent = agentForTask(task);
  const head = element('div', '', 'task-head');
  head.append(statusBadge(state, stateLabels[state], {rollbackAffected: affected}));
  card.append(head,
    element('span', task.id + ' · ' + (stage === '编码' ? '编码 / ' + task.role : stage) +
      ' · ' + task.requirements.join('、'), 'task-meta'),
    element('strong', task.title), element('span', agent.name, 'task-agent'));

  if (full) {
    const specs = element('div', '', 'task-specs');
    const addSpec = (key, val) => {
      const row = element('div', '', 'task-spec-row');
      row.append(element('span', key, 'spec-key'), element('span', val, 'spec-val'));
      specs.append(row);
    };
    addSpec('职责', agent.duty);
    addSpec('声明输入', task.inputs.join('、') || 'Design Spec');
    addSpec('交付', task.output);
    addSpec('验收', task.acceptance);
    if (result.pipeline) addSpec('设计来源', task.designs.join('、'));
    if (task.test) addSpec('测试定位范围', task.test.targets.join('、'));
    if (task.review) addSpec('评审对应编码', task.review.target);
    const added = arrangement.edges.filter(edge => edge.to === task.id && !task.inputs.includes(edge.artifact));
    if (added.length) addSpec('编排补齐输入', added.map(edge => edge.artifact).join('、'));
    card.append(specs);
    if (task.test) card.append(...taskCases(task));
  }
  return card;
}

let codeTimer;
  const codeDialog = byId('code-dialog');
  const codeViewer = byId('code-viewer');
  const codeHScroll = codeViewer ? createNeuHScroll(codeViewer, '代码横向位置滑块') : null;
  if (codeDialog && codeHScroll) codeDialog.append(codeHScroll.wrap);
  codeDialog?.addEventListener('close', () => {
    clearTimeout(codeTimer);
    codeTimer = undefined;
  });

byId('gen-code').addEventListener('click', () => {
  const projectName = result ? result.plan.project : '当前项目';
  const codeStr = `
// 任务：${projectName} - 核心后端接口与数据模型
// 框架：Node.js + TypeScript + Express

import { Request, Response } from 'express';
import { prisma } from '../utils/prisma';
import { verifyToken } from '../middlewares/auth';

export const executeCoreTask = async (req: Request, res: Response) => {
  try {
    const { days, spots } = req.body;
    
    if (!Number.isInteger(days) || days <= 0) {
      return res.status(400).json({ error: '参数校验失败，天数必须为正整数' });
    }

    const record = await prisma.coreTask.create({
      data: {
        userId: req.user.id,
        days: days,
        status: 'PENDING'
      }
    });

    return res.status(201).json({ success: true, data: record });
  } catch (error) {
    console.error('[Server Error]', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};`;

  const codeEl = byId('code-content');
  clearTimeout(codeTimer);
  codeEl.textContent = '';
  if (!codeDialog.open) codeDialog.showModal();

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    codeEl.textContent = codeStr;
    codeHScroll?.sync();
    return;
  }

  let i = 0;
  function typeCode() {
    if (!codeDialog.open) return;
    if (i < codeStr.length) {
      codeEl.textContent += codeStr.slice(i, i + 5);
      i += 5;
      codeEl.parentElement.parentElement.scrollTop = codeEl.parentElement.parentElement.scrollHeight;
      codeTimer = setTimeout(typeCode, 10);
    } else {
      codeHScroll?.sync();
    }
  }
  typeCode();
});

function listTasks(affectedIds) {
  const filterBar = element('div', '', 'trace-filter-bar');
  const pills = element('div', '', 'trace-pills');
  pills.setAttribute('aria-label', '按需求编号筛选任务');
  const allPill = element('button', '全部需求', 'trace-button');
  allPill.type = 'button';
  pills.append(allPill);

  const matchStatus = element('div', '', 'hint');
  matchStatus.setAttribute('role', 'status');
  matchStatus.style.margin = '0';
  filterBar.append(pills, matchStatus);

  const activeBanner = element('div', '', 'trace-active-banner');
  activeBanner.hidden = true;

  const table = element('details');
  table.open = false;
  table.append(element('summary', '需求与验收明细 · ' + result.plan.requirements.length + ' 条（可展开或点上方编号筛选）'));
  const list = element('ul', '', 'requirements');
  const taskList = element('div', '', 'task-list');
  const pillButtons = new Map();
  const detailButtons = new Map();
  const reqById = new Map(result.plan.requirements.map(req => [req.id, req]));

  function filter(id) {
    requirementFilter = id;
    allPill.setAttribute('aria-pressed', String(!id));
    for (const [reqId, button] of pillButtons) button.setAttribute('aria-pressed', String(id === reqId));
    for (const [reqId, button] of detailButtons) button.setAttribute('aria-pressed', String(id === reqId));
    const activeReq = id ? reqById.get(id) : undefined;
    activeBanner.hidden = !activeReq;
    if (activeReq) {
      activeBanner.replaceChildren(
        element('strong', activeReq.id + ' · ' + activeReq.text),
        element('span', '验收标准：' + activeReq.acceptance)
      );
    }
    const matches = result.plan.tasks.filter(task => !id || task.requirements.includes(id));
    matchStatus.textContent = (id ? id + ' 对应 ' : '全部 ') + matches.length + ' 项任务';
    taskList.replaceChildren(...matches.map((task, idx) => {
      const card = taskCard(task, true, false, affectedIds);
      card.classList.add('stagger-in');
      card.style.setProperty('--stagger', String(Math.min(idx, 8)));
      const locate = element('button', '在依赖图中查看 →', 'task-link');
      locate.type = 'button';
      locate.addEventListener('click', () => locateGraphTask(task.id));
      card.append(locate);
      return card;
    }));
  }

  allPill.addEventListener('click', () => filter(''));
  for (const requirement of result.plan.requirements) {
    const pill = element('button', requirement.id, 'trace-button');
    pill.type = 'button';
    pill.setAttribute('aria-label', '按需求 ' + requirement.id + ' 筛选任务');
    pill.addEventListener('click', () => filter(requirementFilter === requirement.id ? '' : requirement.id));
    pillButtons.set(requirement.id, pill);
    pills.append(pill);

    const item = element('li', '', 'trace-row');
    const trace = element('button', requirement.id, 'trace-button');
    trace.type = 'button';
    trace.setAttribute('aria-label', '查看 ' + requirement.id + ' 的关联任务');
    trace.addEventListener('click', () => filter(requirementFilter === requirement.id ? '' : requirement.id));
    detailButtons.set(requirement.id, trace);
    const description = element('div');
    description.append(element('strong', requirement.text), element('br'), element('span', '验收：' + requirement.acceptance));
    item.append(trace, description);
    list.append(item);
  }
  table.append(list);
  view.append(filterBar, activeBanner, table, taskList);
  filter(requirementFilter);
}

function showRounds(tasksById, affectedIds) {
  const depths = taskDepths(arrangement.dependencies);
  const chain = criticalChain(arrangement.dependencies, depths);
  const causality = new Map(rollbackCausality(monitor.getRuntime()).map(item => [item.taskId, item]));
  const chainBatches = new Set(chain.map(id => arrangement.rounds.findIndex(batch => batch.includes(id))));
  view.append(element('p', '当前每批最多 ' + arrangement.capacity + ' 项。依赖深度最长链覆盖 ' + chainBatches.size + ' 个批次。', 'hint'));
  arrangement.rounds.forEach((ids, index) => {
    const block = element('div', '', 'round-block stagger-in');
    block.style.setProperty('--stagger', String(Math.min(index, 8)));
    const round = element('section', '', 'round');
    const head = element('div', '', 'round-head');
    head.append(element('h3', '第 ' + (index + 1) + ' 批 · ' + ids.length + ' 项'));
    if (chainBatches.has(index)) head.append(element('span', '关键路径', 'round-critical-pill'));
    const tasks = element('div', '', 'task-list');
    const cards = ids.map(id => {
      const card = taskCard(tasksById.get(id), false, false, affectedIds);
      if (chain.includes(id)) card.classList.add('critical-task');
      const record = monitor.getRuntime()[id];
      if ((record?.attempts ?? 0) > 1) card.append(element('p', '重跑次数：' + record.attempts, 'batch-attempts'));
      const rollback = causality.get(id);
      if (rollback) card.append(element('p', '回退因果：检查点 ' + rollback.checkpoint + ' 失败，目标实现 ' + rollback.target + '；需重验：' + (rollback.invalidated.join('、') || '无'), 'batch-causality'));
      card.append(element('p', '前置任务：' + (arrangement.dependencies[id].join('、') || '无')));
      return card;
    });
    tasks.append(...cards);
    round.append(head, tasks);
    const hScroll = createNeuHScroll(tasks, '第 ' + (index + 1) + ' 批横向位置滑块');
    viewCleanups.push(hScroll.destroy);
    block.append(round, hScroll.wrap);
    view.append(block);
    requestAnimationFrame(() => hScroll.sync());
  });
}

function overviewEdges(edges, ids) {
  const successors = new Map(ids.map(id => [id, []]));
  for (const {from, to} of edges) successors.get(from).push(to);
  return edges.filter(({from, to}) => {
    const pending = successors.get(from).filter(id => id !== to);
    const seen = new Set();
    while (pending.length) {
      const id = pending.pop();
      if (id === to) return false;
      if (seen.has(id)) continue;
      seen.add(id);
      pending.push(...successors.get(id));
    }
    return true;
  });
}

function spreadPorts(routes, endpoint, other, coordinate) {
  const groups = new Map();
  for (const route of routes) {
    const node = route[endpoint];
    if (!groups.has(node)) groups.set(node, []);
    groups.get(node).push(route);
  }
  for (const [node, group] of groups) {
    group.sort((a, b) => a[other].middle - b[other].middle || a[other].batch - b[other].batch);
    const spacing = Math.min(12, (node.height - 18) / group.length);
    group.forEach((route, index) => {
      route[coordinate] = node.middle + (index - (group.length - 1) / 2) * spacing;
    });
  }
}

function showGraph(tasksById, affectedIds) {
  const vertical = graphLayout === 'vertical';
  const controls = element('div', '', 'graph-controls');
  const controlsTop = element('div', '', 'graph-controls-top');
  const layouts = element('div', '', 'graph-layouts soft-toggle');
  layouts.setAttribute('aria-label', '依赖图布局');
  const layoutThumb = element('span', '', 'pill-thumb');
  layoutThumb.setAttribute('aria-hidden', 'true');
  layouts.append(layoutThumb);
  for (const [id, label] of [['horizontal', '横向依赖图'], ['vertical', '纵向执行流程']]) {
    const toggle = element('button', label);
    toggle.type = 'button';
    toggle.dataset.layout = id;
    toggle.setAttribute('aria-pressed', String(id === graphLayout));
    toggle.addEventListener('click', () => {
      if (graphLayout === id) return;
      graphLayout = id;
      render();
      view.querySelector('[data-layout="' + id + '"]')?.focus({preventScroll: true});
    });
    layouts.append(toggle);
  }
  const viewportTools = element('div', '', 'graph-viewport-tools');
  const zoom = {scale: 1, target: 1, velocity: 0};
  let zoomRaf = 0;
  let panRaf = 0;
  let pulseRaf = 0;
  let pulseOrigin = performance.now();
  let lastPulseRoutes = [];

  const rangeWrap = element('div', '', 'range');
  rangeWrap.setAttribute('aria-label', '依赖图缩放滑块');
  const rangeLabel = element('span', '画布缩放', 'range-label');
  const rangeTrack = element('div', '', 'track');
  rangeTrack.tabIndex = 0;
  rangeTrack.setAttribute('role', 'slider');
  rangeTrack.setAttribute('aria-valuemin', '40');
  rangeTrack.setAttribute('aria-valuemax', '200');
  rangeTrack.setAttribute('aria-valuenow', '100');
  rangeTrack.setAttribute('aria-label', '缩放比例');
  const rangeFill = element('div', '', 'fill');
  const rangeKnob = element('div', '', 'knob');
  rangeTrack.append(rangeFill, rangeKnob);
  const zoomReadout = element('div', '100%', 'val zoom-readout');
  zoomReadout.setAttribute('aria-live', 'polite');
  rangeWrap.append(rangeLabel, rangeTrack, zoomReadout);

  let graphHScroll;
  const commitZoomScale = scale => {
    if (!natural.width) {
      natural.width = graph.offsetWidth;
      natural.height = graph.offsetHeight;
    }
    zoom.scale = scale;
    const size = scaledSize(natural, scale);
    graph.style.transform = scale === 1 ? '' : 'scale(' + scale + ')';
    stage.style.width = scale === 1 ? '' : size.width + 'px';
    stage.style.height = scale === 1 ? '' : size.height + 'px';
    const pct = Math.max(0, Math.min(1, (scale - 0.4) / 1.6));
    rangeFill.style.width = (pct * 100) + '%';
    rangeKnob.style.left = (pct * 100) + '%';
    const pctInt = Math.round(scale * 100);
    zoomReadout.textContent = pctInt + '%';
    rangeTrack.setAttribute('aria-valuenow', String(pctInt));
    const phase = pulseRaf ? ((performance.now() - pulseOrigin) / 2100) % 1 : null;
    draw(phase);
    graphHScroll?.sync();
  };
  const applyZoom = (scale, immediate = false) => {
    const clamped = clampScale(scale);
    zoom.target = clamped;
    if (immediate || reducedMotion()) {
      cancelAnimationFrame(zoomRaf);
      zoomRaf = 0;
      zoom.velocity = 0;
      commitZoomScale(clamped);
      return;
    }
    if (zoomRaf) return;
    let lastTime = performance.now();
    const tickZoom = now => {
      if (!graph.isConnected) {
        zoomRaf = 0;
        return;
      }
      const dt = (now - lastTime) / 1000;
      lastTime = now;
      const next = stepSpring(
        {value: zoom.scale, target: zoom.target, velocity: zoom.velocity},
        dt,
        {stiffness: 300, damping: 32, precision: 0.0005},
      );
      zoom.velocity = next.velocity;
      commitZoomScale(next.value);
      if (!next.settled) zoomRaf = requestAnimationFrame(tickZoom);
      else zoomRaf = 0;
    };
    zoomRaf = requestAnimationFrame(tickZoom);
  };

  let sliderDragging = false;
  const zoomFromClientX = clientX => {
    const rect = rangeTrack.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (clientX - rect.left) / Math.max(1, rect.width)));
    applyZoom(0.4 + pct * 1.6, true);
  };
  rangeTrack.addEventListener('pointerdown', e => {
    sliderDragging = true;
    rangeWrap.classList.add('is-dragging');
    rangeTrack.setPointerCapture(e.pointerId);
    zoomFromClientX(e.clientX);
  });
  rangeTrack.addEventListener('pointermove', e => { if (sliderDragging) zoomFromClientX(e.clientX); });
  const stopSliderDrag = () => { sliderDragging = false; rangeWrap.classList.remove('is-dragging'); };
  rangeTrack.addEventListener('pointerup', stopSliderDrag);
  rangeTrack.addEventListener('pointercancel', stopSliderDrag);
  rangeTrack.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') { e.preventDefault(); applyZoom(zoom.target - 0.1); }
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') { e.preventDefault(); applyZoom(zoom.target + 0.1); }
  });

  const fit = element('button', '适应窗口');
  fit.type = 'button';
  fit.setAttribute('aria-label', '适应窗口');
  fit.addEventListener('click', () => { applyZoom(fitScale(natural, {width: scroll.clientWidth, height: scroll.clientHeight})); fit.focus(); });
  const edgeLegend = element('div', '', 'graph-edge-legend');
  edgeLegend.setAttribute('aria-label', '依赖连线图例');
  for (const [cls, label] of [
    ['edge-swatch-up', '前置依赖'],
    ['edge-swatch-down', '后续任务'],
    ['edge-swatch-rb', '失败可回退'],
  ]) {
    const key = element('span', '', 'edge-key');
    key.append(element('span', '', 'edge-swatch ' + cls), document.createTextNode(label));
    edgeLegend.append(key);
  }
  viewportTools.append(rangeWrap, fit);
  controlsTop.append(layouts, viewportTools);

  const toolbar = element('div', '', 'graph-toolbar');
  const explanation = element('p', '', 'hint');
  explanation.setAttribute('role', 'status');
  const reset = element('button', '返回总览');
  reset.type = 'button';
  toolbar.append(explanation, edgeLegend, reset);
  controls.append(controlsTop, toolbar);
  view.append(controls);
  requestAnimationFrame(() => syncPillThumb(layouts));

  const scroll = element('div', '', 'graph-scroll');
  scroll.tabIndex = 0;
  scroll.setAttribute('aria-label', vertical ? '按执行批次从上到下的流程图' : '可横向滚动的任务依赖图');
  const stage = element('div', '', 'graph-stage');
  const graph = element('div', '', vertical ? 'graph graph-inner graph-vertical' : 'graph graph-inner');
  const natural = {width: 0, height: 0};
  graph.style.transformOrigin = 'top left';
  const canvas = element('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  stage.append(graph, canvas);
  scroll.append(stage);
  scroll.addEventListener('wheel', event => {
    if (!event.ctrlKey) return;
    event.preventDefault();
    applyZoom(zoom.target * (event.deltaY < 0 ? 1.1 : 0.9));
  }, {passive: false});
  let dragging = false;
  let spaceHeld = false;
  let lastX = 0;
  let lastY = 0;
  let lastMoveTime = 0;
  let panVx = 0;
  let panVy = 0;
  scroll.addEventListener('keydown', event => { if (event.code === 'Space' && !event.target.matches('button, input, select, textarea, a')) { spaceHeld = true; event.preventDefault(); } });
  scroll.addEventListener('keyup', event => { if (event.code === 'Space') spaceHeld = false; });
  scroll.addEventListener('pointerdown', event => {
    if (event.button !== 1 && !spaceHeld) return;
    cancelAnimationFrame(panRaf);
    panRaf = 0;
    dragging = true;
    lastX = event.clientX;
    lastY = event.clientY;
    lastMoveTime = performance.now();
    panVx = panVy = 0;
    scroll.setPointerCapture(event.pointerId);
    event.preventDefault();
  });
  scroll.addEventListener('pointermove', event => {
    if (!dragging) return;
    const now = performance.now();
    const dt = Math.max(0.004, (now - lastMoveTime) / 1000);
    const dx = event.clientX - lastX;
    const dy = event.clientY - lastY;
    scroll.scrollLeft -= dx;
    scroll.scrollTop -= dy;
    panVx = panVx * 0.45 + (-dx / dt) * 0.55;
    panVy = panVy * 0.45 + (-dy / dt) * 0.55;
    lastX = event.clientX;
    lastY = event.clientY;
    lastMoveTime = now;
    event.preventDefault();
  });
  let dragged = false;
  scroll.addEventListener('pointerup', event => {
    if (!dragging) return;
    dragging = false;
    dragged = true;
    scroll.releasePointerCapture(event.pointerId);
    event.preventDefault();
    if (reducedMotion() || Math.hypot(panVx, panVy) < 40) return;
    let prev = performance.now();
    const glide = now => {
      if (!scroll.isConnected || dragging) { panRaf = 0; return; }
      const dt = Math.min(0.032, (now - prev) / 1000);
      prev = now;
      const decay = Math.exp(-8.5 * dt);
      panVx *= decay;
      panVy *= decay;
      scroll.scrollLeft += panVx * dt;
      scroll.scrollTop += panVy * dt;
      if (Math.hypot(panVx, panVy) >= 14) panRaf = requestAnimationFrame(glide);
      else panRaf = 0;
    };
    panRaf = requestAnimationFrame(glide);
  });
  scroll.addEventListener('click', event => { if (dragged) { dragged = false; event.preventDefault(); event.stopPropagation(); } }, true);
  const breadcrumb = element('nav', '', 'graph-breadcrumb');
  breadcrumb.setAttribute('aria-label', '依赖图焦点路径');
  const detail = element('div', '', 'graph-detail');
  const buttons = new Map();
  const columns = [];
  const orderedRounds = orderLayers(arrangement.rounds, arrangement.edges);
  const batches = new Map(orderedRounds.flatMap((ids, batch) => ids.map(id => [id, batch])));
  const overview = overviewEdges(arrangement.edges, [...batches.keys()]);
  const parallel = arrangement.rounds.filter(batch => batch.length > 1).length;
  const reason = result.plan.serialJustification;
  if (typeof reason === 'string' && reason) view.append(element('p', '编码需串行：' + reason, 'hint'));
  const graphArea = element('div', '', vertical ? 'graph-area vertical-area' : 'graph-area');

  function draw(pulsePhase = null) {
    const edges = selected
      ? arrangement.edges.filter(edge => edge.from === selected || edge.to === selected)
      : overview;
    const bounds = graph.getBoundingClientRect();
    const begin = box => vertical ? box.top - bounds.top : box.left - bounds.left;
    const endOf = box => vertical ? box.bottom - bounds.top : box.right - bounds.left;
    const acrossEnd = box => vertical ? box.right - bounds.left : box.bottom - bounds.top;
    const nodes = new Map([...buttons].map(([id, button]) => {
      const box = button.getBoundingClientRect();
      const breadth = vertical ? box.width : box.height;
      return [id, {
        left: begin(box), right: endOf(box), middle: acrossEnd(box) - breadth / 2,
        height: breadth, batch: batches.get(id),
      }];
    }));
    const routes = edges.map(edge => ({edge, start: nodes.get(edge.from), end: nodes.get(edge.to)}));
    spreadPorts(routes, 'start', 'end', 'y1');
    spreadPorts(routes, 'end', 'start', 'y2');

    const gutters = columns.slice(1).map(() => []);
    const longRoutes = [];
    for (const route of routes) {
      const {start, end} = route;
      if (end.batch === start.batch + 1) {
        gutters[start.batch].push({route, key: 'out', order: route.y1 - route.y2});
      } else {
        gutters[start.batch].push({route, key: 'out', order: -Infinity});
        gutters[end.batch - 1].push({route, key: 'in', order: Infinity});
        longRoutes.push(route);
      }
    }
    gutters.forEach((tracks, index) => {
      const left = endOf(columns[index].getBoundingClientRect()) + 8 * zoom.scale;
      const right = begin(columns[index + 1].getBoundingClientRect()) - 10 * zoom.scale;
      tracks.sort((a, b) => a.order - b.order || a.route.y1 - b.route.y1 || a.route.y2 - b.route.y2);
      tracks.forEach(({route, key}, lane) => {
        route[key] = left + (right - left) * (lane + 1) / (tracks.length + 1);
      });
    });

    const rows = [];
    const laneStart = Math.max(...columns.map(column =>
      acrossEnd((vertical ? column : column.lastElementChild).getBoundingClientRect()))) + 18 * zoom.scale;
    longRoutes.sort((a, b) => a.start.batch - b.start.batch || a.end.batch - b.end.batch);
    for (const route of longRoutes) {
      let row = rows.findIndex(end => end < route.start.batch);
      if (row === -1) row = rows.length;
      rows[row] = route.end.batch;
      route.floor = laneStart + row * 11 * zoom.scale;
    }
    const returns = vertical && selected ? rollbackTargets(tasksById.get(selected)) : [];
    const padProp = vertical ? 'paddingRight' : 'paddingBottom';
    const targetPad = 26 + (rows.length + returns.length) * 11 + 'px';
    if (graph.style[padProp] !== targetPad) graph.style[padProp] = targetPad;
    natural.width = graph.offsetWidth;
    natural.height = graph.offsetHeight;
    if (zoom.scale !== 1) {
      const size = scaledSize(natural, zoom.scale);
      stage.style.width = size.width + 'px';
      stage.style.height = size.height + 'px';
    }

    const ratio = window.devicePixelRatio || 1;
    const targetW = Math.ceil(stage.clientWidth * ratio);
    const targetH = Math.ceil(stage.clientHeight * ratio);
    if (canvas.width !== targetW) {
      canvas.width = targetW;
      canvas.style.width = stage.clientWidth + 'px';
    }
    if (canvas.height !== targetH) {
      canvas.height = targetH;
      canvas.style.height = stage.clientHeight + 'px';
    }
    const context = canvas.getContext('2d');
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.clearRect(0, 0, stage.clientWidth, stage.clientHeight);
    context.lineJoin = 'round';
    const position = ([along, across]) => vertical ? [across, along] : [along, across];
    function drawRoute(points, color, dashed = false) {
      const [along, across] = points.at(-1);
      const direction = Math.sign(along - points.at(-2)[0]);
      context.strokeStyle = context.fillStyle = color;
      context.lineWidth = 1.65;
      context.setLineDash(dashed ? [5, 4] : []);
      context.beginPath();
      const mapped = points.map(position);
      context.moveTo(mapped[0][0], mapped[0][1]);
      for (let i = 1; i < mapped.length - 1; i++) {
        const [x0, y0] = mapped[i - 1];
        const [x1, y1] = mapped[i];
        const [x2, y2] = mapped[i + 1];
        const r = Math.min(6 * zoom.scale, Math.hypot(x1 - x0, y1 - y0) / 2, Math.hypot(x2 - x1, y2 - y1) / 2);
        if (r > 0.5) context.arcTo(x1, y1, x2, y2, r);
        else context.lineTo(x1, y1);
      }
      const [lastX, lastY] = mapped.at(-1);
      context.lineTo(lastX, lastY);
      context.stroke();
      context.setLineDash([]);
      context.beginPath();
      context.moveTo(...position([along, across]));
      context.lineTo(...position([along - direction * 6.5, across - 4]));
      context.lineTo(...position([along - direction * 6.5, across + 4]));
      context.fill();
    }
    lastPulseRoutes = [];
    for (const {edge, start, end, y1, y2, out, in: entry, floor} of routes) {
      const points = [[start.right, y1], [out, y1]];
      if (floor !== undefined) points.push([out, floor], [entry, floor], [entry, y2]);
      else points.push([out, y2]);
      points.push([end.left - 2, y2]);
      const baseColor = edge.to === selected
        ? (pulsePhase !== null ? 'rgba(59, 130, 246, 0.55)' : '#3b82f6')
        : (pulsePhase !== null ? 'rgba(79, 70, 229, 0.36)' : '#4f46e5');
      drawRoute(points, baseColor);
      if (selected) lastPulseRoutes.push({points, rgb: edge.to === selected ? '59, 130, 246' : '79, 70, 229'});
    }
    returns.forEach((id, index) => {
      const from = nodes.get(selected);
      const to = nodes.get(id);
      const lane = laneStart + (rows.length + index) * 11 * zoom.scale;
      const leave = endOf(columns[from.batch].getBoundingClientRect()) + (16 + index * 4) * zoom.scale;
      const enter = endOf(columns[to.batch].getBoundingClientRect()) + 19 * zoom.scale;
      const points = [[from.right, from.middle + 6], [leave, from.middle + 6], [leave, lane],
        [enter, lane], [enter, to.middle + 6], [to.right + 3, to.middle + 6]];
      drawRoute(points, pulsePhase !== null ? 'rgba(181, 103, 38, 0.45)' : '#b56726', true);
      if (selected) lastPulseRoutes.push({points, rgb: '79, 70, 229'});
    });
    if (pulsePhase !== null && selected && !reducedMotion()) {
      for (const {points, rgb} of lastPulseRoutes) {
        drawBeamAlongPolyline(context, points, pulsePhase, {position, tailLen: 0.28, color: rgb});
      }
    }
  }

  function stopPulse() {
    cancelAnimationFrame(pulseRaf);
    pulseRaf = 0;
    scroll.dataset.pulseActive = 'false';
  }
  function startPulse() {
    if (!selected || reducedMotion() || document.hidden || byId('workspace').hidden) {
      stopPulse();
      return;
    }
    if (pulseRaf) return;
    scroll.dataset.pulseActive = 'true';
    const stepPulse = now => {
      if (!selected || reducedMotion() || document.hidden || !graph.isConnected || byId('workspace').hidden) {
        stopPulse();
        return;
      }
      if (!zoomRaf) draw(((now - pulseOrigin) / 2100) % 1);
      pulseRaf = requestAnimationFrame(stepPulse);
    };
    pulseRaf = requestAnimationFrame(stepPulse);
  }
  const onVisibilityChange = () => {
    if (document.hidden) stopPulse();
    else startPulse();
  };
  document.addEventListener('visibilitychange', onVisibilityChange);
  stopGraphMotion = () => {
    cancelAnimationFrame(zoomRaf);
    cancelAnimationFrame(panRaf);
    zoomRaf = panRaf = 0;
    stopPulse();
    document.removeEventListener('visibilitychange', onVisibilityChange);
  };

  function select(id, {openFloat = !floatDocked} = {}) {
    selected = id;
    graphArea.classList.toggle('has-selection', Boolean(id));
    for (const [taskId, button] of buttons) button.setAttribute('aria-pressed', String(id === taskId));
    reset.hidden = !id;
    if (!id) {
      floatDocked = false;
      dockActiveInspector = null;
      hideFloatingInspector();
      breadcrumb.replaceChildren();
      const hidden = arrangement.edges.length - overview.length;
      explanation.textContent = parallel + ' 批含并行任务。总览显示 ' + overview.length + ' 条连线。' +
        (hidden ? '另有 ' + hidden + ' 条可通过中间任务追溯。' : '') + '点击任务小卡可在旁悬浮检视详情。';
      detail.replaceChildren();
      updateRightRailContext();
      stopPulse();
      draw();
      return;
    }
    const count = arrangement.edges.filter(edge => edge.from === id || edge.to === id).length;
    explanation.textContent = id + ' 的 ' + count + ' 条连线 · 蓝色为前置依赖，靛蓝指向后续任务。';
    const task = tasksById.get(id);
    const card = taskCard(task, true, false, affectedIds);
    const upstream = transitiveUpstream(id, arrangement.dependencies);
    const downstream = transitiveDownstream(id, arrangement.edges);

    const buildBreadcrumb = () => {
      const nav = element('nav', '', 'graph-breadcrumb');
      nav.setAttribute('aria-label', '依赖图焦点路径');
      const root = element('button', '总览', 'task-link');
      root.type = 'button';
      root.addEventListener('click', () => select(''));
      nav.append(root);
      for (const item of focusBreadcrumb(id, arrangement.dependencies).slice(0, -1)) {
        const itemId = typeof item === 'string' ? item : item.id;
        const link = element('button', itemId, 'task-link');
        link.type = 'button';
        link.addEventListener('click', () => {
          select(itemId, {openFloat: !floatDocked});
          buttons.get(itemId)?.scrollIntoView({block: 'nearest', inline: 'center'});
        });
        nav.append(element('span', ' / '), link);
      }
      nav.append(element('span', ' / ' + id));
      return nav;
    };

    const chainEl = element('div', '', 'graph-chain');
    const levels = items => groupByDepth(items).map(([depth, ids]) => '第 ' + depth + ' 层 ' + ids.join('、')).join(' ／ ') || '无';
    chainEl.append(element('p', '上游：' + levels(upstream)), element('p', '下游：' + levels(downstream)));

    const buildOpenExecution = (className, text) => {
      const btn = element('button', text, className);
      btn.type = 'button';
      btn.addEventListener('click', () => {
        openResults('execution');
        const item = byId('execution-' + id);
        item.scrollIntoView({block: 'start'});
        item.focus({preventScroll: true});
      });
      return btn;
    };

    let rollbackEl = null;
    const targets = rollbackTargets(task);
    if (targets.length) {
      if (vertical) explanation.textContent += ' 橙色虚线表示失败时可回退的编码。';
      rollbackEl = element('div', '', 'graph-rollback');
      rollbackEl.append(element('h3', '失败回退', 'dependency-heading'));
      for (const target of targets) {
        const change = rollbackScope(target, arrangement);
        rollbackEl.append(element('p', target + ' · ' + tasksById.get(target).title + ' · 影响 ' + change.length + ' 项后续任务'));
      }
    }

    const relationNodes = [];
    for (const [caption, here, other] of [
      ['前置任务', 'to', 'from'], ['后续任务', 'from', 'to'],
    ]) {
      relationNodes.push(element('h3', caption, 'dependency-heading'));
      const edges = arrangement.edges.filter(edge => edge[here] === id);
      if (!edges.length) {
        relationNodes.push(element('p', '无'));
        continue;
      }
      const relations = element('ul', '', 'dependency-list');
      for (const edge of edges) {
        const neighbor = tasksById.get(edge[other]);
        const button = element('button', neighbor.id + ' · ' + neighbor.title, 'task-link');
        button.type = 'button';
        button.addEventListener('click', () => {
          const node = buttons.get(neighbor.id);
          select(neighbor.id, {openFloat: !floatDocked});
          node?.scrollIntoView({block: 'nearest', inline: 'center'});
          node?.focus({preventScroll: true});
        });
        const item = element('li');
        item.append(button, element('span', edgeReason(edge, tasksById.get(edge.to))));
        relations.append(item);
      }
      relationNodes.push(relations);
    }

    if (openFloat && floatingEl && floatingHead && floatingBody) {
      floatDocked = false;
      const cols = element('div', '', 'floating-insp-cols');
      const leftCol = element('div', '', 'floating-col');
      const rightCol = element('div', '', 'floating-col');
      leftCol.append(card);
      rightCol.append(
        chainEl,
        ...(rollbackEl ? [rollbackEl] : []),
        ...relationNodes,
        buildOpenExecution('floating-exec-btn', '打开此节点的执行与交互 →'),
      );
      cols.append(leftCol, rightCol);
      floatingHead.textContent = '节点检视 · ' + id;
      floatingBody.replaceChildren(buildBreadcrumb(), cols);
      const targetBtn = buttons.get(id);
      positionFloatingNearNode(targetBtn);
      requestAnimationFrame(() => {
        if (!floatingEl.hidden && selected === id) positionFloatingNearNode(targetBtn);
      });
      dockActiveInspector = () => {
        floatDocked = true;
        select(id, {openFloat: false});
      };
      updateRightRailContext(id, null, {floating: true, title: id + ' · ' + task.title});
    } else {
      floatDocked = true;
      hideFloatingInspector();
      dockActiveInspector = null;
      breadcrumb.replaceChildren(...buildBreadcrumb().childNodes);
      card.append(chainEl, buildOpenExecution('task-link', '打开此节点的执行与交互'));
      if (rollbackEl) card.append(rollbackEl);
      card.append(...relationNodes);
      detail.replaceChildren(card);
      updateRightRailContext(id, inspector, {
        floating: false,
        onReopen: () => {
          floatDocked = false;
          select(id, {openFloat: true});
        },
      });
    }
    pulseOrigin = performance.now();
    draw(reducedMotion() ? null : 0);
    startPulse();
  }

  orderedRounds.forEach((ids, index) => {
    const column = element('section', '', 'column');
    const batchLabel = element('h3', '第 ' + (index + 1) + ' 批');
    if (ids.length > 1) batchLabel.append(element('span', vertical ? ids.length + ' 项可并行' : ids.length + ' 项'));
    column.append(batchLabel);
    for (const id of ids) {
      const button = taskCard(tasksById.get(id), false, true, affectedIds);
      button.id = 'node-' + id;
      button.type = 'button';
      button.setAttribute('aria-pressed', 'false');
      button.addEventListener('click', () => {
        if (selected === id && floatDocked) {
          floatDocked = false;
          select(id, {openFloat: true});
        } else if (selected === id) {
          select('');
        } else {
          floatDocked = false;
          select(id, {openFloat: true});
        }
      });
      buttons.set(id, button);
      column.append(button);
    }
    graph.append(column);
    columns.push(column);
  });
  const inspector = element('div', '', 'graph-inspector');
  inspector.append(breadcrumb, detail);
  graphHScroll = createNeuHScroll(scroll, '依赖图横向位置滑块');
  viewCleanups.push(graphHScroll.destroy);
  const graphScrollShell = element('div', '', 'graph-scroll-shell');
  graphScrollShell.append(scroll, graphHScroll.wrap);
  graphArea.append(graphScrollShell);
  view.append(graphArea);
  natural.width = graph.offsetWidth;
  natural.height = graph.offsetHeight;
  reset.addEventListener('click', () => {
    const node = buttons.get(selected);
    select('');
    node?.focus({preventScroll: true});
  });
  select(selected);
  requestAnimationFrame(() => graphHScroll?.sync());
  observer?.disconnect();
  observer = new ResizeObserver(() => {
    draw(pulseRaf ? ((performance.now() - pulseOrigin) / 2100) % 1 : null);
    graphHScroll?.sync();
  });
  observer.observe(graph);
}

function render() {
  stopGraphMotion?.();
  stopGraphMotion = undefined;
  hideFloatingInspector();
  dockActiveInspector = null;
  for (const cleanup of viewCleanups) cleanup();
  viewCleanups = [];
  observer?.disconnect();
  tabs.forEach(button => button.setAttribute('aria-pressed', String(active === button.dataset.view)));
  syncTabIndicator();
  view.replaceChildren();
  updateRightRailContext();
  renderRailOverview();
  metrics();
  const tasks = new Map(result.plan.tasks.map(task => [task.id, task]));
  const affectedIds = rollbackAffectedIds(result.plan.tasks, arrangement, monitor.getRuntime(), rollbackTargets);
  if (active === 'tasks') listTasks(affectedIds);
  if (active === 'graph') showGraph(tasks, affectedIds);
  if (active === 'rounds') showRounds(tasks, affectedIds);
  if (active === 'execution') monitor.renderExecution(view);
}

function edgeReason(edge, target) {
  return target.inputs.includes(edge.artifact) ? '需要交付物 ' + edge.artifact :
    '同一需求的测试等待交付物 ' + edge.artifact;
}

function downloadFile(name, text, type) {
  const url = URL.createObjectURL(new Blob([text], {type}));
  const anchor = element('a');
  anchor.href = url;
  anchor.download = name;
  anchor.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

byId('download').addEventListener('click', () => {
  const feedback = result.pipeline && designFeedback(result.pipeline.design, result.plan, arrangement);
  downloadFile('se-workflow.json', JSON.stringify({...result, arrangement, designFeedback: feedback,
    observation: monitor.snapshot(), events: getStructuredEvents(), summary: buildSummary()}, null, 2),
    'application/json');
});

byId('report').addEventListener('click', () => {
  const {plan, model, mode} = result;
  const byTask = new Map(plan.tasks.map(task => [task.id, task]));
  const lines = [
    '# ' + plan.project + ' · 开发执行计划', '',
    '模型：' + model + '  ',
    '来源：' + (mode === 'live' ? '现场调用 DeepSeek API' : '导入的 DeepSeek 结果') + '  ',
    '并行上限：' + arrangement.capacity + ' 项／批', '',
    '## 需求与验收', '',
  ];
  for (const req of plan.requirements) {
    const links = plan.tasks.filter(task => task.requirements.includes(req.id)).map(task => task.id);
    lines.push('- **' + req.id + '** ' + req.text,
      '  - 验收：' + req.acceptance, '  - 关联任务：' + links.join('、'));
  }
  lines.push('', '## 实现阶段任务集', '');
  for (const task of plan.tasks) {
    lines.push('### ' + task.id + ' · ' + task.title, '',
      '- 角色：' + task.role, '- 执行 Agent：' + agentForTask(task).name, '- 工作类型：' + taskStage(task),
      '- 关联需求：' + task.requirements.join('、'),
      '- 交付物：' + task.output, '- 验收：' + task.acceptance);
    if (result.pipeline) lines.push('- 设计来源：' + task.designs.join('、'));
    if (task.test) lines.push('- 测试层次：' + testLevelLabels[task.test.level],
      '- 测试目标及失败定位范围：' + task.test.targets.join('、'),
      ...(task.test.cases ? ['- 测试方案用例：' + task.test.cases.join('、')] : []));
    if (task.review) lines.push('- 评审对象：' + task.review.target);
    lines.push('');
  }
  lines.push('## 任务依赖', '');
  for (const edge of arrangement.edges) {
    lines.push('- ' + edge.from + ' → ' + edge.to + ' · ' + edgeReason(edge, byTask.get(edge.to)));
  }
  if (!arrangement.edges.length) lines.push('无前置任务。');
  lines.push('', '## 执行批次', '', '上一批全部完成后，下一批才开始。同批任务可并行。', '');
  arrangement.rounds.forEach((ids, index) => lines.push(
    '- 第 ' + (index + 1) + ' 批 · ' + ids.map(id => id + ' ' + byTask.get(id).title).join('、')));
  if (result.pipeline) {
    const {idea, requirements, design} = result.pipeline;
    lines.push('', '## 原始产品想法', '', idea, '', '## 作业一需求规格的目标与范围', '',
      '- 目标：' + requirements.goal, '- 范围：' + requirements.scope, '', '## 编排回填到设计规格', '');
    for (const part of designFeedback(design, plan, arrangement)) {
      lines.push('### ' + part.id + ' · ' + part.title, '', '关联需求：' + part.requirements.join('、'));
      for (const task of part.tasks) {
        lines.push('- ' + task.id + ' · ' + task.title + ' · ' + task.role + ' · 第 ' + task.batch + ' 批',
          '  - 交付物：' + task.output, '  - 前置任务：' + (task.predecessors.join('、') || '无'),
          '  - 验收：' + task.acceptance);
      }
      lines.push('');
    }
  }
  const testPlan = result.pipeline?.testPlan ?? result.testPlan;
  if (testPlan) {
    lines.push('## 测试方案', '', testPlan.strategy, '');
    for (const test of testPlan.cases) {
      const batch = arrangement.rounds.findIndex(ids => ids.includes(test.task)) + 1;
      const level = taskStage(byTask.get(test.task));
      lines.push('### ' + test.id + ' · ' + test.title, '',
        '关联：' + level + ' · ' +
        [test.requirements.join('、'), test.designs?.join('、') ?? test.design, test.task].filter(Boolean)
          .join(' → ') + ' · 第 ' + batch + ' 批',
        '', '前置条件：' + test.setup, '');
      test.steps.forEach((step, index) => lines.push((index + 1) + '. ' + step));
      lines.push('', '预期结果：' + test.expected, '');
    }
  }
  lines.push('', result.pipeline ? '## 送入编排的设计规格' : '## 原始 Design Spec', '',
    ...result.spec.split(/\r?\n/).map(line => '> ' + line));
  downloadFile('开发执行计划.md', lines.join('\n') + '\n', 'text/markdown;charset=utf-8');
});

byId('startup').hidden = true;
for (const id of ['workspace', 'workspace-nav', 'mast-actions', 'flow', 'app-foot']) byId(id).hidden = false;
byId('legend-slot')?.replaceChildren(statusLegend(stateLabels));
initFloatingInspectorControls();
renderRailActivity([]);
syncTabIndicator();
changeSpec();
void checkStatus();
