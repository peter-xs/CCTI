import { DIMENSIONS, TYPES } from './model.js';

const RESET = '\x1b[0m';
const BOLD = '\x1b[1m';
const DIM = '\x1b[2m';
const CYAN = '\x1b[36m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';

export function color(text, code) {
  if (!process.stdout.isTTY || process.env.NO_COLOR) {
    return text;
  }

  return `${code}${text}${RESET}`;
}

export function formatResult(result) {
  const lines = [];

  lines.push('');
  lines.push(color(`你的 CCTI 类型是：${result.code} - ${result.type.name}`, BOLD + CYAN));
  lines.push(color(result.type.title, DIM));
  lines.push('');
  lines.push(result.type.summary);
  lines.push('');
  lines.push(color('维度结果', BOLD));

  for (const dimension of result.dimensions) {
    const [left, right] = dimension.letters;
    const [leftName, rightName] = dimension.names;
    const leftScore = dimension.scores[left];
    const rightScore = dimension.scores[right];
    const label = `${dimension.label}: ${left}${leftScore} / ${right}${rightScore}`;
    const winnerName = dimension.winner === left ? leftName : rightName;
    lines.push(`- ${label} -> ${dimension.winner} (${winnerName}), 倾向强度 ${dimension.confidence}%`);
  }

  lines.push('');
  lines.push(color('你擅长', BOLD + GREEN));
  for (const item of result.type.strengths) {
    lines.push(`- ${item}`);
  }

  lines.push('');
  lines.push(color('需要留意', BOLD + YELLOW));
  for (const item of result.type.risks) {
    lines.push(`- ${item}`);
  }

  lines.push('');
  lines.push(color('分享文案', BOLD));
  lines.push(`我是 ${result.code} ${result.type.name}。你也来测测自己的代码人格：npx github:peter-xs/CCTI`);
  lines.push('');

  return lines.join('\n');
}

export function formatTypeList() {
  const lines = [];

  lines.push(color('CCTI 16 种代码人格', BOLD + CYAN));
  lines.push('');

  for (const [code, type] of Object.entries(TYPES)) {
    lines.push(`${code} ${type.name} - ${type.summary}`);
  }

  lines.push('');
  lines.push(color('四个维度', BOLD));

  for (const dimension of DIMENSIONS) {
    const [left, right] = dimension.letters;
    const [leftName, rightName] = dimension.names;
    lines.push(`- ${dimension.label}: ${left} ${leftName} / ${right} ${rightName}`);
  }

  return lines.join('\n');
}

export function formatShareCard(result) {
  const { code, type, dimensions } = result;
  
  // 计算维度百分比
  const dimInfo = dimensions.map(d => {
    const [left, right] = d.letters;
    const leftScore = d.scores[left];
    const rightScore = d.scores[right];
    const total = leftScore + rightScore;
    const confidence = Math.round((Math.abs(leftScore - rightScore) / total) * 100);
    return `${d.winner}(${confidence}%)`;
  }).join(' ');
  
  const card = `
╔════════════════════════════════════════╗
║                                        ║
║           ██████╗██║  ██║              ║
║          ██╔════╝██║  ██║              ║
║          ██║     ███████║              ║
║          ██║     ██╔══██║              ║
║          ╚██████╗██║  ██║              ║
║           ╚═════╝╚═╝  ╚═╝              ║
║                                        ║
║  CCTI - Code Character Type Indicator  ║
║                                        ║
║  ${code.padEnd(4)}  ${type.name.padEnd(32)}║
║  ${type.title.padEnd(36)}  ║
║                                        ║
║  ${dimInfo.padEnd(36)}  ║
║                                        ║
║  npx github:peter-xs/CCTI              ║
║                                        ║
╚════════════════════════════════════════╝
`;

  const lines = [];
  lines.push('');
  lines.push(color('分享卡片已生成！', BOLD + CYAN));
  lines.push('');
  lines.push(card);
  lines.push('');
  lines.push(color('简短分享文案：', BOLD + GREEN));
  lines.push(`我是 ${code} ${type.name}。你也来测测：npx github:peter-xs/CCTI`);
  lines.push('');

  return lines.join('\n');
}
