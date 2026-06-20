import React from 'react';
import { Box, Text } from 'ink';

// 绘制简单的终端雷达图
function drawRadarChart(dimensions) {
  const lines = [];
  
  // 计算每个维度的百分比
  const percentages = dimensions.map(d => {
    const [left, right] = d.letters;
    const leftScore = d.scores[left];
    const rightScore = d.scores[right];
    const total = leftScore + rightScore;
    
    if (d.winner === left) {
      return { left: Math.round((leftScore / total) * 100), right: Math.round((rightScore / total) * 100) };
    } else {
      return { left: Math.round((leftScore / total) * 100), right: Math.round((rightScore / total) * 100) };
    }
  });
  
  lines.push('┌─────────────────────────────────────┐');
  
  dimensions.forEach((d, i) => {
    const [left, right] = d.letters;
    const pct = percentages[i];
    const leftBar = '█'.repeat(Math.round(pct.left / 5));
    const rightBar = '░'.repeat(Math.round(pct.right / 5));
    
    lines.push(`│ ${left} ${leftBar}${rightBar} ${right}  ${d.winner}(${pct[d.winner === left ? 'left' : 'right']}%) │`);
  });
  
  lines.push('└─────────────────────────────────────┘');
  
  return lines.join('\n');
}

export default function Result({ result }) {
  const { code, type, dimensions } = result;
  const radarChart = drawRadarChart(dimensions);
  
  return (
    <Box flexDirection="column" padding={1}>
      <Box marginBottom={1}>
        <Text color="cyan" bold>
          🎉 测试完成！
        </Text>
      </Box>
      
      <Box marginBottom={1}>
        <Text color="green" bold>
          你的 CCTI 类型是：{code} - {type.name}
        </Text>
      </Box>
      
      <Box marginBottom={1}>
        <Text dimColor>
          {type.title}
        </Text>
      </Box>
      
      <Box marginBottom={1}>
        <Text>
          {type.summary}
        </Text>
      </Box>
      
      <Box marginBottom={1}>
        <Text dimColor>
          {radarChart}
        </Text>
      </Box>
      
      <Box marginTop={1} marginBottom={1}>
        <Text color="green" bold>
          你擅长
        </Text>
      </Box>
      {type.strengths.map((s, i) => (
        <Box key={i} marginLeft={2}>
          <Text color="green">
            ✓ {s}
          </Text>
        </Box>
      ))}
      
      <Box marginTop={1} marginBottom={1}>
        <Text color="yellow" bold>
          需要留意
        </Text>
      </Box>
      {type.risks.map((r, i) => (
        <Box key={i} marginLeft={2}>
          <Text color="yellow">
            ⚠ {r}
          </Text>
        </Box>
      ))}
      
      <Box marginTop={2}>
        <Text dimColor>
          ─────────────────────────────────────
        </Text>
      </Box>
      
      <Box marginTop={1}>
        <Text color="blue">
          运行 ccti --share 生成分享卡片
        </Text>
      </Box>
      
      <Box marginTop={1}>
        <Text dimColor>
          分享文案：我是 {code} {type.name}。你也来测测：npx github:peter-xs/CCTI
        </Text>
      </Box>
    </Box>
  );
}
