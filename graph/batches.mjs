export function taskDepths(dependencies) {
  const depths = new Map();
  const visiting = new Set();
  function depth(id) {
    if (depths.has(id)) return depths.get(id);
    if (visiting.has(id)) return 0;
    visiting.add(id);
    const value = Math.max(-1, ...(dependencies[id] ?? []).map(parent => depth(parent))) + 1;
    visiting.delete(id);
    depths.set(id, value);
    return value;
  }
  for (const id of Object.keys(dependencies)) depth(id);
  return depths;
}

export function criticalChain(dependencies, depths) {
  let current = [...depths.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))[0]?.[0];
  const chain = [];
  while (current) {
    chain.unshift(current);
    current = (dependencies[current] ?? []).filter(parent => depths.get(parent) === depths.get(chain[0]) - 1)
      .sort((a, b) => a.localeCompare(b))[0];
  }
  return chain;
}

export function rollbackCausality(runtime) {
  const rows = [];
  for (const [taskId, record] of Object.entries(runtime)) for (const note of record.notes ?? []) {
    if (note.action !== 'rollback') continue;
    rows.push({taskId, checkpoint: note.test, target: note.target,
      invalidated: Object.entries(runtime).filter(([, item]) =>
        item.notes?.some(entry => entry.action === 'invalidated' && entry.test === note.test && entry.target === note.target))
        .map(([id]) => id).sort()});
  }
  return rows;
}
