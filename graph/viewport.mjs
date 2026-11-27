export function clampScale(scale, min = 0.4, max = 2) {
  return Math.min(max, Math.max(min, scale));
}

export function fitScale(content, viewport, min = 0.4, max = 2) {
  if (!content.width || !content.height || !viewport.width || !viewport.height) return 1;
  return clampScale(Math.min(viewport.width / content.width, viewport.height / content.height), min, max);
}

export function logicalToScreen(point, transform) {
  return {x: point.x * transform.scale + transform.x, y: point.y * transform.scale + transform.y};
}

export function screenToLogical(point, transform) {
  return {x: (point.x - transform.x) / transform.scale, y: (point.y - transform.y) / transform.scale};
}
