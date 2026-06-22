import React from 'react';
import { Box, Text } from 'ink';

export default function ShareCard({ result }) {
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
╔══════════════════════════════════════╗
║                                      ║
║          ██████╗██║  ██║             ║
║         ██╔════╝██║  ██║             ║
║         ██║     ███████║             ║
║         ██║     ██╔══██║             ║
║         ╚██████╗██║  ██║             ║
║          ╚═════╝╚═╝  ╚═╝             ║
║                                      ║
║  CCTI - Code Character Type Indicator   ║
║                                      ║
║  ${code.padEnd(4)}  ${type.name.padEnd(30)}║
║  ${type.title.padEnd(34)}  ║
║                                      ║
║  ${dimInfo.padEnd(34)}  ║
║                                      ║
║  npx github:peter-xs/CCTI            ║
║                                      ║
╚══════════════════════════════════════╝
`;

  return (
    <Box flexDirection="column" padding={1}>
      <Box marginBottom={1}>
        <Text color="cyan" bold>
          分享卡片已生成！
        </Text>
      </Box>
      
      <Box marginBottom={1}>
        <Text>
          {card}
        </Text>
      </Box>
      
      <Box marginTop={1}>
        <Text dimColor>
          复制以上内容分享到社交媒体
        </Text>
      </Box>
      
      <Box marginTop={1}>
        <Text color="green">
          简短分享文案：
        </Text>
      </Box>
      <Box marginLeft={2}>
        <Text color="green">
          我是 {code} {type.name}。你也来测测：npx github:peter-xs/CCTI
        </Text>
      </Box>
    </Box>
  );
}
