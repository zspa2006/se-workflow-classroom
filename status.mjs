const statusOrder = ['pending', 'ready', 'running', 'waiting', 'failed', 'done'];
const statusGlyphs = Object.freeze({
  pending: '⋯', ready: '▶', running: '●', waiting: '✋', failed: '!', done: '✓',
});

export function statusBadge(state, label, {rollbackAffected = false} = {}) {
  const safeState = statusOrder.includes(state) ? state : 'pending';
  const badge = document.createElement('span');
  badge.className = 'status-badge status-' + safeState +
    (rollbackAffected ? ' is-rollback-affected' : '');
  badge.setAttribute('aria-label', label + (rollbackAffected ? '，受回退影响' : ''));
  const glyph = document.createElement('span');
  glyph.className = 'status-glyph';
  glyph.setAttribute('aria-hidden', 'true');
  glyph.textContent = statusGlyphs[safeState];
  badge.append(glyph, document.createTextNode(label));
  if (rollbackAffected) {
    const marker = document.createElement('span');
    marker.className = 'status-marker';
    marker.setAttribute('aria-hidden', 'true');
    marker.textContent = '↺';
    badge.append(marker);
  }
  return badge;
}

export function statusLegend(labels) {
  const legend = document.createElement('div');
  legend.className = 'status-legend';
  legend.setAttribute('aria-label', '任务状态图例');
  for (const state of statusOrder) legend.append(statusBadge(state, labels[state]));
  const note = document.createElement('span');
  note.className = 'status-legend-note';
  note.append(statusBadge('done', '受回退影响', {rollbackAffected: true}));
  legend.append(note);
  return legend;
}

// 回退影响是叠加标记，沿着现有依赖边传播，不改变六种任务状态。
export function rollbackAffectedIds(tasks, arrangement, runtime, getTargets) {
  const targets = new Set();
  for (const checkpoint of tasks) {
    if (runtime[checkpoint.id]?.status !== 'failed') continue;
    for (const target of getTargets(checkpoint) ?? []) {
      const record = runtime[target];
      const rolledBack = record?.attempts > 0 &&
        record.notes?.some(item => item.action === 'rollback');
      if (rolledBack) targets.add(target);
    }
  }
  const affected = new Set();
  for (const id of arrangement.rounds.flat()) {
    if (targets.has(id) || arrangement.dependencies[id]?.some(parent => affected.has(parent))) {
      affected.add(id);
    }
  }
  return affected;
}
