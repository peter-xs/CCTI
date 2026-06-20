import { DIMENSIONS, TYPES } from './model.js';

export function createEmptyScores() {
  return Object.fromEntries(
    DIMENSIONS.flatMap((dimension) =>
      dimension.letters.map((letter) => [letter, 0]),
    ),
  );
}

export function scoreAnswers(answers) {
  const scores = createEmptyScores();

  for (const answer of answers) {
    if (!Object.hasOwn(scores, answer.letter)) {
      throw new Error(`Unknown answer letter: ${answer.letter}`);
    }

    scores[answer.letter] += 1;
  }

  const dimensions = DIMENSIONS.map((dimension) => {
    const [left, right] = dimension.letters;
    const leftScore = scores[left];
    const rightScore = scores[right];
    const winner = leftScore >= rightScore ? left : right;
    const total = leftScore + rightScore;
    const confidence = total === 0 ? 0 : Math.round((Math.abs(leftScore - rightScore) / total) * 100);

    return {
      key: dimension.key,
      label: dimension.label,
      letters: dimension.letters,
      names: dimension.names,
      scores: {
        [left]: leftScore,
        [right]: rightScore,
      },
      winner,
      confidence,
    };
  });

  const code = dimensions.map((dimension) => dimension.winner).join('');
  const type = TYPES[code];

  if (!type) {
    throw new Error(`No CCTI type definition found for ${code}`);
  }

  return {
    code,
    type,
    scores,
    dimensions,
  };
}
