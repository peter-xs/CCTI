import { test } from 'node:test';
import assert from 'node:assert/strict';
import { scoreAnswers, createEmptyScores } from '../src/scoring.js';

test('all A answers should yield CSTA', () => {
  const answers = Array.from({ length: 28 }, (_, index) => ({
    questionId: index + 1,
    dimension: index < 7 ? 'ci' : index < 14 ? 'sd' : index < 21 ? 'te' : 'ao',
    letter: 'A',
  }));

  const result = scoreAnswers(answers);

  assert.equal(result.code, 'CSTA');
  assert.equal(result.type.name, '架构建造师');
  assert.equal(result.dimensions.length, 4);
});

test('all B answers should yield IDEO', () => {
  const answers = Array.from({ length: 28 }, (_, index) => ({
    questionId: index + 1,
    dimension: index < 7 ? 'ci' : index < 14 ? 'sd' : index < 21 ? 'te' : 'ao',
    letter: 'B',
  }));

  const result = scoreAnswers(answers);

  assert.equal(result.code, 'IDEO');
  assert.equal(result.type.name, '开源创客');
});

test('empty answers create zero scores', () => {
  const scores = createEmptyScores();

  assert.equal(Object.keys(scores).length, 8);
  assert.equal(scores.C, 0);
  assert.equal(scores.I, 0);
});
