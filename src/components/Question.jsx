import React, { useState, useEffect } from 'react';
import { Box, Text, useInput } from 'ink';

export default function Question({ question, current, total, onAnswer }) {
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  // 切换题目时重置状态，确保没有默认选中
  useEffect(() => {
    setSelected(null);
    setShowResult(false);
  }, [question.id]);

  useInput((input, key) => {
    if (showResult) return;

    if (key.upArrow || key.downArrow) {
      if (selected === 'A') {
        setSelected('B');
      } else if (selected === 'B') {
        setSelected('A');
      } else {
        setSelected('A');
      }
      return;
    }

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

  const progress = Math.round((current / total) * 100);
  const barWidth = 40;
  const filledWidth = Math.round((current / total) * barWidth);
  const emptyWidth = barWidth - filledWidth;
  const progressBar = '█'.repeat(filledWidth) + '░'.repeat(emptyWidth);

  return (
    <Box flexDirection="column" padding={1}>
      <Box marginBottom={1}>
        <Text dimColor>
          [{progressBar}] {progress}% ({current}/{total})
        </Text>
      </Box>

      <Box marginBottom={1}>
        <Text bold color="cyan">
          {question.prompt}
        </Text>
      </Box>

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

      {!selected && (
        <Box marginTop={1}>
          <Text dimColor>
            按 ↑/↓ 选择，A/B 键选择，Enter 确认
          </Text>
        </Box>
      )}

      {selected && !showResult && (
        <Box marginTop={1}>
          <Text color="yellow">
            按 Enter 确认，↑/↓ 切换选项
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
