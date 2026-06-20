import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { QUESTIONS } from './model.js';
import { scoreAnswers } from './scoring.js';
import { formatResult, formatTypeList } from './format.js';

export async function runCli(args) {
  if (args.includes('--help') || args.includes('-h')) {
    printHelp();
    return;
  }

  if (args.includes('--types')) {
    console.log(formatTypeList());
    return;
  }

  const json = args.includes('--json');
  const presetAnswers = getOptionValue(args, '--answers');

  if (!input.isTTY && !json && !presetAnswers) {
    throw new Error('CCTI interactive mode requires a TTY. Use --json only with programmatic wrappers after adding stored answers.');
  }

  const answers = presetAnswers ? answersFromString(presetAnswers) : await askQuestions();
  const result = scoreAnswers(answers);

  if (json) {
    console.log(JSON.stringify(result, null, 2));
    return;
  }

  console.log(formatResult(result));
}

function printHelp() {
  console.log(`CCTI - Coder Character Type Indicator

Usage:
  ccti           Start the interactive test
  ccti --types   List all 16 result types
  ccti --json    Print the final result as JSON
  ccti --answers ABBA...  Score a 28-letter A/B answer string
  ccti --help    Show help

Run from GitHub:
  npx github:peter-xs/CCTI
`);
}

function getOptionValue(args, name) {
  const index = args.indexOf(name);

  if (index === -1) {
    return undefined;
  }

  return args[index + 1];
}

function answersFromString(value) {
  if (!value) {
    throw new Error('--answers requires a 28-letter string of A and B choices.');
  }

  const normalized = value.trim().toUpperCase();

  if (normalized.length !== QUESTIONS.length) {
    throw new Error(`--answers requires exactly ${QUESTIONS.length} choices. Received ${normalized.length}.`);
  }

  return [...normalized].map((choice, index) => {
    const question = QUESTIONS[index];

    if (choice === 'A') {
      return {
        questionId: question.id,
        dimension: question.dimension,
        letter: question.options[0].letter,
      };
    }

    if (choice === 'B') {
      return {
        questionId: question.id,
        dimension: question.dimension,
        letter: question.options[1].letter,
      };
    }

    throw new Error(`Invalid answer "${choice}" at position ${index + 1}. Use only A or B.`);
  });
}

async function askQuestions() {
  const rl = createInterface({ input, output });
  const answers = [];

  try {
    console.log('');
    console.log('CCTI - Coder Character Type Indicator');
    console.log('不是测试你是什么样的人，而是探索你写代码时是什么样的人。');
    console.log('');
    console.log('请输入 A 或 B 作答。按 Ctrl+C 可随时退出。');
    console.log('');

    for (let index = 0; index < QUESTIONS.length; index += 1) {
      const question = QUESTIONS[index];
      const answer = await askOne(rl, question, index + 1, QUESTIONS.length);
      answers.push({
        questionId: question.id,
        dimension: question.dimension,
        letter: answer.letter,
      });
    }
  } finally {
    rl.close();
  }

  return answers;
}

async function askOne(rl, question, current, total) {
  console.log(`[${current}/${total}] ${question.prompt}`);
  console.log(`  A. ${question.options[0].text}`);
  console.log(`  B. ${question.options[1].text}`);

  while (true) {
    const raw = await rl.question('> ');
    const normalized = raw.trim().toUpperCase();

    if (normalized === 'A') {
      console.log('');
      return question.options[0];
    }

    if (normalized === 'B') {
      console.log('');
      return question.options[1];
    }

    console.log('请输入 A 或 B。');
  }
}
