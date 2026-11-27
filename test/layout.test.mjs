import assert from 'node:assert/strict';
import test from 'node:test';
import {orderLayers, transitiveUpstream, transitiveDownstream, focusBreadcrumb} from '../graph/layout.mjs';

test('orderLayers removes a two-layer crossing and is idempotent', () => {
  const rounds = [['A', 'B'], ['C', 'D']];
  const edges = [{from: 'A', to: 'D'}, {from: 'B', to: 'C'}];
  const ordered = orderLayers(rounds, edges);
  assert.deepEqual(ordered, [['A', 'B'], ['D', 'C']]);
  assert.deepEqual(orderLayers(ordered, edges), ordered);
});

test('transitive focus chains cover a diamond and isolated node', () => {
  const dependencies = {A: [], B: ['A'], C: ['A'], D: ['B', 'C'], X: []};
  const edges = [{from: 'A', to: 'B'}, {from: 'A', to: 'C'}, {from: 'B', to: 'D'}, {from: 'C', to: 'D'}];
  assert.deepEqual(transitiveUpstream('D', dependencies), [{id: 'B', depth: 1}, {id: 'C', depth: 1}, {id: 'A', depth: 2}]);
  assert.deepEqual(transitiveDownstream('A', edges), [{id: 'B', depth: 1}, {id: 'C', depth: 1}, {id: 'D', depth: 2}]);
  assert.deepEqual(focusBreadcrumb('D', dependencies), ['A', 'B', 'D']);
  assert.deepEqual(transitiveUpstream('X', dependencies), []);
  assert.deepEqual(transitiveDownstream('X', edges), []);
});
