/**
 * Pure second-order spring-damper integrator, polyline sampler,
 * and lightweight reduced-motion-safe FLIP / numeric helpers.
 */

export function stepSpring(
  state,
  dt,
  {stiffness = 300, damping = 32, precision = 0.001} = {},
) {
  const value0 = Number.isFinite(state?.value) ? state.value : 0;
  const target = Number.isFinite(state?.target) ? state.target : value0;
  const velocity0 = Number.isFinite(state?.velocity) ? state.velocity : 0;
  const clampedDt = Number.isFinite(dt) ? Math.min(Math.max(dt, 0), 0.032) : 0;
  if (clampedDt === 0) {
    const settled = Math.abs(target - value0) < precision && Math.abs(velocity0) < precision;
    return {value: settled ? target : value0, target, velocity: settled ? 0 : velocity0, settled};
  }
  const displacement = value0 - target;
  const force = -stiffness * displacement - damping * velocity0;
  const velocity = velocity0 + force * clampedDt;
  const value = value0 + velocity * clampedDt;
  if (Math.abs(target - value) < precision && Math.abs(velocity) < precision) {
    return {value: target, target, velocity: 0, settled: true};
  }
  return {value, target, velocity, settled: false};
}

export function samplePolyline(points, progress) {
  if (!Array.isArray(points) || !points.length) return [0, 0];
  if (points.length === 1) return [points[0][0], points[0][1]];
  const t = Math.min(1, Math.max(0, Number.isFinite(progress) ? progress : 0));
  const lengths = [];
  let total = 0;
  for (let i = 1; i < points.length; i++) {
    const len = Math.hypot(points[i][0] - points[i - 1][0], points[i][1] - points[i - 1][1]);
    lengths.push(len);
    total += len;
  }
  if (total <= 1e-6) return [points[0][0], points[0][1]];
  let remaining = t * total;
  for (let i = 0; i < lengths.length; i++) {
    const len = lengths[i];
    if (remaining <= len || i === lengths.length - 1) {
      const local = len > 1e-6 ? Math.min(1, Math.max(0, remaining / len)) : 0;
      const [x0, y0] = points[i];
      const [x1, y1] = points[i + 1];
      return [x0 + (x1 - x0) * local, y0 + (y1 - y0) * local];
    }
    remaining -= len;
  }
  return [points.at(-1)[0], points.at(-1)[1]];
}

export function reducedMotion() {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function animateFlipSlide(el, prevRect, {duration = 240, easing = 'cubic-bezier(0.22, 1, 0.36, 1)'} = {}) {
  if (reducedMotion() || !el || !prevRect || typeof el.animate !== 'function') return;
  const nextRect = el.getBoundingClientRect();
  if (!nextRect.width || !prevRect.width) return;
  const dx = prevRect.left - nextRect.left;
  const dy = prevRect.top - nextRect.top;
  const sx = prevRect.width / nextRect.width;
  if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5 && Math.abs(sx - 1) < 0.01) return;
  try {
    el.style.transformOrigin = 'left center';
    el.animate(
      [
        {transform: `translate(${dx}px, ${dy}px) scaleX(${sx})`},
        {transform: 'translate(0px, 0px) scaleX(1)'},
      ],
      {duration, easing},
    );
  } catch {
    // Graceful no-op in headless/partial WAAPI environments.
  }
}

export function animateNumber(el, from, to, suffix = '', duration = 280) {
  if (!el) return () => {};
  if (reducedMotion() || from === to || typeof requestAnimationFrame !== 'function') {
    el.textContent = String(to) + suffix;
    return () => {};
  }
  const start = performance.now();
  let rafId = 0;
  const tick = now => {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    const current = Math.round(from + (to - from) * eased);
    el.textContent = String(current) + suffix;
    if (t < 1) rafId = requestAnimationFrame(tick);
  };
  el.textContent = String(from) + suffix;
  rafId = requestAnimationFrame(tick);
  return () => cancelAnimationFrame(rafId);
}

/**
 * Aligns `.pill-thumb` inside a `.soft-toggle` or `.pill-tabs-track` capsule rail
 * to the currently pressed child button.
 */
export function syncPillThumb(container) {
  if (!container) return;
  const thumb = container.querySelector('.pill-thumb');
  const current = container.querySelector('button[aria-pressed="true"]');
  if (!thumb || !current || !current.offsetWidth) return;
  thumb.style.width = current.offsetWidth + 'px';
  thumb.style.transform = `translateX(${current.offsetLeft}px)`;
}

const activeSelects = new Set();
let selectGlobalBound = false;

function closeAllCustomSelects(except) {
  for (const entry of activeSelects) {
    if (entry === except) continue;
    entry.wrap.classList.remove('is-open');
    entry.trigger.setAttribute('aria-expanded', 'false');
  }
}

/**
 * Synchronizes a custom `.neu-select` wrapper with programmatic option/value changes.
 */
export function syncCustomSelect(sel) {
  if (!sel || typeof sel._syncCustomSelect !== 'function') return;
  sel._syncCustomSelect();
}

/**
 * Enhances a native `<select>` with a clean light `.neu-select` dropdown menu,
 * eliminating OS-level sharp black popup borders while preserving `.value` & `change` events.
 */
export function enhanceSelect(sel) {
  if (!sel || typeof document === 'undefined') return null;
  if (sel.dataset.neuEnhanced === 'true') {
    syncCustomSelect(sel);
    return sel.closest('.neu-select');
  }
  sel.dataset.neuEnhanced = 'true';
  if (!selectGlobalBound) {
    selectGlobalBound = true;
    document.addEventListener('click', () => closeAllCustomSelects());
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeAllCustomSelects();
    });
  }

  const wrap = document.createElement('div');
  wrap.className = 'neu-select';
  sel.parentNode.insertBefore(wrap, sel);
  sel.classList.add('neu-select-native');
  sel.tabIndex = -1;
  wrap.appendChild(sel);

  const trigger = document.createElement('button');
  trigger.type = 'button';
  trigger.className = 'neu-select-trigger';
  trigger.setAttribute('aria-haspopup', 'listbox');
  trigger.setAttribute('aria-expanded', 'false');
  const ariaLabel = sel.getAttribute('aria-label');
  if (ariaLabel) trigger.setAttribute('aria-label', ariaLabel);

  const labelSpan = document.createElement('span');
  labelSpan.className = 'neu-select-label';
  const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  arrow.setAttribute('width', '13');
  arrow.setAttribute('height', '13');
  arrow.setAttribute('viewBox', '0 0 16 16');
  arrow.setAttribute('fill', 'none');
  arrow.setAttribute('aria-hidden', 'true');
  arrow.setAttribute('class', 'neu-select-arrow');
  arrow.innerHTML = '<path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>';
  trigger.append(labelSpan, arrow);

  const menu = document.createElement('div');
  menu.className = 'neu-select-menu';
  menu.setAttribute('role', 'listbox');

  const entry = {wrap, trigger, sel};
  activeSelects.add(entry);

  function rebuildOptions() {
    const options = [...sel.options];
    const buttons = [];
    menu.replaceChildren();
    options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'neu-select-option';
      btn.setAttribute('role', 'option');
      btn.setAttribute('aria-selected', String(idx === sel.selectedIndex));
      const text = document.createElement('span');
      text.textContent = opt.textContent;
      const check = document.createElement('span');
      check.className = 'neu-select-check';
      check.setAttribute('aria-hidden', 'true');
      check.textContent = '✓';
      btn.append(text, check);
      btn.addEventListener('click', () => {
        if (sel.disabled) return;
        const changed = sel.selectedIndex !== idx;
        sel.selectedIndex = idx;
        syncState();
        closeAllCustomSelects();
        trigger.focus();
        if (changed) sel.dispatchEvent(new Event('change', {bubbles: true}));
      });
      buttons.push(btn);
      menu.append(btn);
    });
    entry.buttons = buttons;
  }

  function syncState() {
    const options = [...sel.options];
    if (!entry.buttons || entry.buttons.length !== options.length ||
        entry.buttons.some((b, i) => b.firstChild?.textContent !== options[i]?.textContent)) {
      rebuildOptions();
    }
    labelSpan.textContent = sel.selectedOptions[0]?.textContent || options[0]?.textContent || '';
    trigger.disabled = sel.disabled;
    wrap.classList.toggle('is-disabled', sel.disabled);
    entry.buttons?.forEach((b, i) => b.setAttribute('aria-selected', String(i === sel.selectedIndex)));
  }

  sel._syncCustomSelect = syncState;
  const observer = typeof MutationObserver === 'function'
    ? new MutationObserver(syncState)
    : null;
  observer?.observe(sel, {childList: true, attributes: true, attributeFilter: ['disabled']});

  // Keep `<label for="...">` focusing the visible custom trigger smoothly
  if (sel.id) {
    const explicitLabel = document.querySelector(`label[for="${CSS.escape(sel.id)}"]`);
    explicitLabel?.addEventListener('click', e => {
      e.preventDefault();
      if (!sel.disabled) trigger.click();
    });
  }

  trigger.addEventListener('click', e => {
    e.stopPropagation();
    if (sel.disabled) return;
    syncState();
    const willOpen = !wrap.classList.contains('is-open');
    closeAllCustomSelects(entry);
    wrap.classList.toggle('is-open', willOpen);
    trigger.setAttribute('aria-expanded', String(willOpen));
  });
  trigger.addEventListener('keydown', e => {
    if (sel.disabled) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      const step = e.key === 'ArrowDown' ? 1 : -1;
      const nextIdx = Math.max(0, Math.min(sel.options.length - 1, sel.selectedIndex + step));
      if (nextIdx !== sel.selectedIndex) {
        sel.selectedIndex = nextIdx;
        syncState();
        sel.dispatchEvent(new Event('change', {bubbles: true}));
      }
    }
  });

  syncState();
  wrap.append(trigger, menu);
  return wrap;
}

/**
 * Creates a standardized external bottom horizontal scrollbar (`.neu-hscroll-wrap`)
 * placed outside and below `scrollEl`, hiding the native internal scrollbar.
 */
export function createNeuHScroll(scrollEl, ariaLabel = '横向位置滑块') {
  const wrap = document.createElement('div');
  wrap.className = 'neu-hscroll-wrap';
  const track = document.createElement('div');
  track.className = 'neu-hscroll-track';
  track.setAttribute('role', 'scrollbar');
  track.setAttribute('aria-orientation', 'horizontal');
  track.setAttribute('aria-label', ariaLabel);
  track.setAttribute('aria-valuenow', '0');
  const thumb = document.createElement('div');
  thumb.className = 'neu-hscroll-thumb';
  track.append(thumb);
  wrap.append(track);

  const sync = () => {
    if (!scrollEl.isConnected || (!scrollEl.offsetParent && scrollEl.clientWidth === 0)) return;
    const maxScroll = Math.max(0, scrollEl.scrollWidth - scrollEl.clientWidth);
    wrap.hidden = maxScroll <= 2;
    if (maxScroll <= 2) return;
    const trackInnerW = track.clientWidth - 8;
    if (trackInnerW <= 0) return;
    const thumbW = Math.max(56, Math.round((scrollEl.clientWidth / scrollEl.scrollWidth) * trackInnerW));
    const ratio = maxScroll ? scrollEl.scrollLeft / maxScroll : 0;
    const left = 4 + Math.round((trackInnerW - thumbW) * ratio);
    thumb.style.width = thumbW + 'px';
    thumb.style.left = left + 'px';
    track.setAttribute('aria-valuenow', String(Math.round(ratio * 100)));
  };

  scrollEl.addEventListener('scroll', sync);
  const ro = typeof ResizeObserver === 'function' ? new ResizeObserver(sync) : null;
  ro?.observe(scrollEl);

  let dragging = false;
  let startX = 0;
  let startLeft = 0;
  thumb.addEventListener('pointerdown', e => {
    dragging = true;
    startX = e.clientX;
    startLeft = thumb.offsetLeft - 4;
    wrap.classList.add('is-dragging');
    thumb.setPointerCapture(e.pointerId);
    e.stopPropagation();
  });
  thumb.addEventListener('pointermove', e => {
    if (!dragging) return;
    const trackInnerW = track.clientWidth - 8;
    const maxOffset = Math.max(1, trackInnerW - thumb.offsetWidth);
    const next = Math.max(0, Math.min(maxOffset, startLeft + (e.clientX - startX)));
    const maxScroll = Math.max(0, scrollEl.scrollWidth - scrollEl.clientWidth);
    scrollEl.scrollLeft = (next / maxOffset) * maxScroll;
  });
  const endDrag = () => {
    dragging = false;
    wrap.classList.remove('is-dragging');
  };
  thumb.addEventListener('pointerup', endDrag);
  thumb.addEventListener('pointercancel', endDrag);
  track.addEventListener('pointerdown', e => {
    if (e.target === thumb) return;
    const r = track.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1,
      (e.clientX - r.left - thumb.offsetWidth / 2) / Math.max(1, r.width - thumb.offsetWidth)));
    scrollEl.scrollLeft = pct * Math.max(0, scrollEl.scrollWidth - scrollEl.clientWidth);
  });

  return {
    wrap,
    sync,
    destroy() {
      scrollEl.removeEventListener('scroll', sync);
      ro?.disconnect();
    },
  };
}

/**
 * Renders a pure thin theme-colored gradient beam line looping along an orthogonal graph edge
 * (no circular head flare).
 */
export function drawBeamAlongPolyline(ctx, pts, cyclePhase, {position = p => p, tailLen = 0.28, color = '79, 70, 229'} = {}) {
  const span = 1 + tailLen;
  for (const offset of [0, 0.5]) {
    const p = ((cyclePhase + offset) % 1) * span;
    const head = Math.min(1, p);
    const tail = Math.max(0, p - tailLen);
    if (head - tail < 0.02) continue;

    const steps = 18;
    const samples = [];
    for (let i = 0; i <= steps; i++) {
      const t = tail + (head - tail) * (i / steps);
      samples.push(position(samplePolyline(pts, t)));
    }
    const edgeFade = Math.min(1, head / 0.12) * Math.min(1, (1 + tailLen - p) / 0.14);

    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    for (let i = 0; i < steps; i++) {
      const k = (i + 1) / steps;
      const intensity = Math.pow(k, 1.65) * edgeFade;
      ctx.strokeStyle = `rgba(${color}, ${(0.16 * intensity).toFixed(3)})`;
      ctx.lineWidth = 3.8;
      ctx.beginPath();
      ctx.moveTo(samples[i][0], samples[i][1]);
      ctx.lineTo(samples[i + 1][0], samples[i + 1][1]);
      ctx.stroke();

      const r = Math.round(79 + (129 - 79) * k);
      const g = Math.round(70 + (140 - 70) * k);
      const b = Math.round(229 + (248 - 229) * k);
      ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${(0.95 * intensity).toFixed(3)})`;
      ctx.lineWidth = 2.0;
      ctx.beginPath();
      ctx.moveTo(samples[i][0], samples[i][1]);
      ctx.lineTo(samples[i + 1][0], samples[i + 1][1]);
      ctx.stroke();
    }
    ctx.restore();
  }
}
