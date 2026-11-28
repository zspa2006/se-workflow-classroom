import test from 'node:test';
import assert from 'node:assert/strict';
import { stepSpring, samplePolyline } from '../motion.mjs';

test('stepSpring converges monotonically and settles accurately at target', () => {
  let state = {value: 1, target: 0.8, velocity: 0};
  let steps = 0;
  while (!state.settled && steps < 200) {
    state = stepSpring(state, 1 / 60, {stiffness: 300, damping: 32, precision: 0.0005});
    steps++;
    assert.ok(Number.isFinite(state.value) && Number.isFinite(state.velocity));
  }
  assert.equal(state.settled, true);
  assert.equal(state.value, 0.8);
  assert.equal(state.velocity, 0);
  assert.ok(steps > 5 && steps < 60, `expected crisp convergence within 1s, took ${steps} frames`);
});

test('stepSpring clamps huge dt spikes cleanly', () => {
  const state = stepSpring({value: 1, target: 1.5, velocity: 0}, 5, {stiffness: 300, damping: 32});
  assert.ok(state.value > 1 && state.value < 1.6);
});

test('samplePolyline interpolates accurately along multi-segment orthogonal path', () => {
  const path = [[0, 0], [100, 0], [100, 100]];
  assert.deepEqual(samplePolyline(path, 0), [0, 0]);
  assert.deepEqual(samplePolyline(path, 0.25), [50, 0]);
  assert.deepEqual(samplePolyline(path, 0.5), [100, 0]);
  assert.deepEqual(samplePolyline(path, 0.75), [100, 50]);
  assert.deepEqual(samplePolyline(path, 1), [100, 100]);
});
