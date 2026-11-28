import assert from 'node:assert/strict';
import test from 'node:test';
import {taskDepths, criticalChain, rollbackCausality} from '../graph/batches.mjs';

test('taskDepths follows a linear chain and a diamond', () => {
  assert.deepEqual([...taskDepths({A: [], B: ['A'], C: ['B']})], [['A', 0], ['B', 1], ['C', 2]]);
  assert.equal(taskDepths({A: [], B: ['A'], C: ['A'], D: ['B', 'C']}).get('D'), 2);
});

test('criticalChain chooses the greatest-depth branch with id tie break', () => {
  const dependencies = {A: [], B: ['A'], C: ['A'], D: ['B', 'C']};
  const depths = taskDepths(dependencies);
  assert.deepEqual(criticalChain(dependencies, depths), ['A', 'B', 'D']);
});

test('rollbackCausality reads rollback and invalidated notes', () => {
  const runtime = {
    T1: {notes: [{action: 'rollback', test: 'T3', target: 'T1'}]},
    T2: {notes: [{action: 'invalidated', test: 'T3', target: 'T1'}]},
    T3: {notes: []},
  };
  assert.deepEqual(rollbackCausality(runtime), [{taskId: 'T1', checkpoint: 'T3', target: 'T1', time: undefined, invalidated: ['T2']}]);
});

test('rollbackCausality keeps the latest round for a task', () => {
  const runtime = {T1: {notes: [
    {action: 'rollback', test: 'T3', target: 'T1', time: '2026-01-01T00:00:00.000Z'},
    {action: 'rollback', test: 'T4', target: 'T1', time: '2026-01-02T00:00:00.000Z'},
  ]}, T2: {notes: [
    {action: 'invalidated', test: 'T4', target: 'T1', time: '2026-01-02T00:00:00.000Z'},
  ]}};
  assert.deepEqual(rollbackCausality(runtime), [{taskId: 'T1', checkpoint: 'T4', target: 'T1', time: '2026-01-02T00:00:00.000Z', invalidated: ['T2']}]);
});
