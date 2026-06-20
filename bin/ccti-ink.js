#!/usr/bin/env node

import React from 'react';
import { render } from 'ink';
import App from '../src/App.jsx';
import { QUESTIONS } from '../src/model.js';
import { scoreAnswers } from '../src/scoring.js';
import { formatResult, formatTypeList, formatShareCard } from '../src/format.js';

const args = process.argv.slice(2);

// 帮助
if (args.includes('--help') || args.includes('-h')) {
  console.log(`CCTI - Coder Character Type Indicator

Usage:
  ccti           Start the interactive test (Ink UI)
  ccti --types   List all 16 result types
  ccti --json    Print the final result as JSON
  ccti --answers ABBA...  Score a 28-letter A/B answer string
  ccti --share   Generate share card after test
  ccti --help    Show help

Run from GitHub:
  npx github:peter-xs/CCTI
`);
  process.exit(0);
}

// 类型列表
if (args.includes('--types')) {
  console.log(formatTypeList());
  process.exit(0);
}

// JSON 输出
if (args.includes('--json')) {
  const presetAnswers = getOptionValue(args, '--answers');
  if (!presetAnswers) {
    console.error('--json requires --answers');
    process.exit(1);
  }
  
  const answers = answersFromString(presetAnswers);
  const result = scoreAnswers(answers);
  console.log(JSON.stringify(result, null, 2));
  process.exit(0);
}

// 分享卡片（非 TTY 使用文本格式）
if (args.includes('--share') && args.includes('--answers')) {
  const presetAnswers = getOptionValue(args, '--answers');
  const answers = answersFromString(presetAnswers);
  const result = scoreAnswers(answers);
  
  if (!process.stdout.isTTY) {
    // 非 TTY 环境：使用文本格式
    console.log(formatShareCard(result));
    process.exit(0);
  }
  
  // TTY 环境：使用 Ink UI
  render(React.createElement(App, { presetAnswers: answers, showShare: true }));
} else if (args.includes('--answers')) {
  // 仅答案，无分享
  const presetAnswers = getOptionValue(args, '--answers');
  const answers = answersFromString(presetAnswers);
  const result = scoreAnswers(answers);
  
  if (!process.stdout.isTTY) {
    console.log(formatResult(result));
    process.exit(0);
  }
  
  render(React.createElement(App, { presetAnswers: answers, showShare: false }));
} else {
  // 交互式测试
  if (!process.stdout.isTTY) {
    console.error('CCTI interactive mode requires a TTY. Use --answers with preset answers.');
    process.exit(1);
  }
  
  render(React.createElement(App));
}

function getOptionValue(args, name) {
  const index = args.indexOf(name);
  if (index === -1) return undefined;
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
