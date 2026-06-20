import React, { useState } from 'react';
import { Box, Text, useInput } from 'ink';

export default function Question({ question, current, total, onAnswer }) {
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  useInput((input, key) => {
    if (showResult) return;
    
    const normalized = input.toUpperCase();
    
    if (normalized === 'A' || normalized === '1') {
      setSelected('A');
    } else if (normalized === 'B' || normalized === '2') {
      setSelected('B');
    } else if (key.return && selected) {
      setShowResult(true);
      setTimeout(() => {
        onAnswer(selected === 'A' ? question.options[0] : question.options[1]);
      }, 300);
    }
  });

  // Progress bar
  const progress = Math.round((current / total) * 100);
  const barWidth = 40;
  const filledWidth = Math.round((current / total) * barWidth);
  const emptyWidth = barWidth - filledWidth;
  const progressBar = '█'.repeat(filledWidth) + '░'.repeat(emptyWidth);

  return (
    <Box flexDirection="column" padding={1}>
      {/* Progress */}
      <Box marginBottom={1}>
        <Text dimColor>
          [{progressBar}] {progress}% ({current}/{total})
        </Text>
      </Box>
      
      {/* Question */}
      <Box marginBottom={1}>
        <Text bold color="cyan">
          {question.prompt}
        </Text>
      </Box>
      
      {/* Options */}
      <Box flexDirection="column" marginLeft={2}>
        <Box marginBottom={1}>
          <Text 
            color={selected === 'A' ? 'green' : 'white'}
            bold={selected === 'A'}
          >
            {selected === 'A' ? '→ ' : '  '}A. {question.options[0].text}
          </Text>
        </Box>
        <Box marginBottom={1}>
          <Text 
            color={selected === 'B' ? 'green' : 'white'}
            bold={selected === 'B'}
          >
            {selected === 'B' ? '→ ' : '  '}B. {question.options[1].text}
          </Text>
        </Box>
      </Box>
      
      {/* Hint */}
      {!selected && (
        <Box marginTop={1}>
          <Text dimColor>
            输入 A 或 B 选择，按 Enter 确认
          </Text>
        </Box>
      )}
      
      {selected && !showResult && (
        <Box marginTop={1}>
          <Text color="yellow">
            按 Enter 确认选择
          </Text>
        </Box>
      )}
      
      {showResult && (
        <Box marginTop={1}>
          <Text color="green">
            ✓ 已记录
          </Text>
        </Box>
      )}
    </Box>
  );
}
