function average(values) {
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : Infinity;
}

function sweep(layers, edges, forward) {
  const positions = new Map();
  layers.forEach((layer, index) => layer.forEach((id, order) => positions.set(id, {layer: index, order})));
  const start = forward ? 1 : layers.length - 2;
  const end = forward ? layers.length : -1;
  const step = forward ? 1 : -1;
  for (let layerIndex = start; layerIndex !== end; layerIndex += step) {
    const adjacent = new Map(layers[layerIndex].map(id => [id, []]));
    for (const edge of edges) {
      const source = forward ? edge.from : edge.to;
      const target = forward ? edge.to : edge.from;
      if (positions.get(target)?.layer !== layerIndex || positions.get(source)?.layer !== layerIndex - step) continue;
      adjacent.get(target)?.push(positions.get(source).order);
    }
    const original = new Map(layers[layerIndex].map((id, order) => [id, order]));
    layers[layerIndex].sort((a, b) => average(adjacent.get(a)) - average(adjacent.get(b)) ||
      original.get(a) - original.get(b));
    layers[layerIndex].forEach((id, order) => { positions.get(id).order = order; });
  }
}

export function orderLayers(rounds, edges) {
  const layers = rounds.map(layer => [...layer]);
  sweep(layers, edges, true);
  sweep(layers, edges, false);
  return layers;
}

function transitive(id, neighbors) {
  const result = [];
  const seen = new Set([id]);
  let frontier = [id];
  let depth = 0;
  while (frontier.length) {
    const next = [];
    for (const current of frontier) for (const neighbor of neighbors(current)) {
      if (seen.has(neighbor)) continue;
      seen.add(neighbor);
      next.push(neighbor);
      result.push({id: neighbor, depth: depth + 1});
    }
    frontier = next;
    depth++;
  }
  return result;
}

export function transitiveUpstream(id, dependencies) {
  return transitive(id, current => dependencies[current] ?? []);
}

export function transitiveDownstream(id, edges) {
  const successors = new Map();
  for (const edge of edges) {
    if (!successors.has(edge.from)) successors.set(edge.from, []);
    successors.get(edge.from).push(edge.to);
  }
  return transitive(id, current => successors.get(current) ?? []);
}

export function focusBreadcrumb(id, dependencies) {
  const ancestors = transitiveUpstream(id, dependencies);
  const depths = new Map(ancestors.map(item => [item.id, item.depth]));
  const path = [id];
  let current = id;
  while ((dependencies[current] ?? []).length) {
    const parent = [...dependencies[current]].sort((a, b) =>
      (depths.get(b) ?? -1) - (depths.get(a) ?? -1) || a.localeCompare(b))[0];
    path.push(parent);
    current = parent;
  }
  return path.reverse();
}

export function groupByDepth(items) {
  const groups = new Map();
  for (const item of items) {
    if (!groups.has(item.depth)) groups.set(item.depth, []);
    groups.get(item.depth).push(item.id);
  }
  return [...groups.entries()].sort((a, b) => a[0] - b[0]);
}
