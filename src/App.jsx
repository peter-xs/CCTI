import React, { useState, useEffect } from 'react';
import { Box, Text, useInput, useApp } from 'ink';
import Welcome from './components/Welcome.jsx';
import Question from './components/Question.jsx';
import Result from './components/Result.jsx';
import ShareCard from './components/ShareCard.jsx';
import { QUESTIONS } from './model.js';
import { scoreAnswers } from './scoring.js';

// 状态：welcome, testing, calculating, result, share
export default function App({ presetAnswers, showShare }) {
  const { exit } = useApp();
  const [state, setState] = useState('welcome');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  
  // 检查是否支持 TTY
  const isTTY = process.stdin.isTTY;
  
  // 如果有预设答案，直接计算结果
  useEffect(() => {
    if (presetAnswers && presetAnswers.length > 0) {
      const calculatedResult = scoreAnswers(presetAnswers);
      setResult(calculatedResult);
      setState(showShare ? 'share' : 'result');
    }
  }, [presetAnswers, showShare]);
  
  // 欢迎页面监听 Enter（仅在 TTY 环境）
  useInput((input, key) => {
    if (!isTTY || presetAnswers) return;
    
    if (state === 'welcome' && key.return) {
      setState('testing');
    }
    
    if (state === 'result' && input.toLowerCase() === 's') {
      setState('share');
    }
    
    if ((state === 'result' || state === 'share') && key.return) {
      exit();
    }
  });
  
  // 处理答题
  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    
    if (currentIndex + 1 < QUESTIONS.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // 计算结果
      setState('calculating');
      setTimeout(() => {
        const calculatedResult = scoreAnswers(newAnswers);
        setResult(calculatedResult);
        setState('result');
      }, 500);
    }
  };
  
  // 计算中状态
  if (state === 'calculating') {
    return (
      <Box flexDirection="column" padding={1}>
        <Text color="cyan">
          正在分析你的代码人格...
        </Text>
        <Box marginTop={1}>
          <Text dimColor>
            ████████████░░░░░░░░░░░░░░░░░░░░ 50%
          </Text>
        </Box>
      </Box>
    );
  }
  
  // 欢迎页面
  if (state === 'welcome' && !presetAnswers) {
    return <Welcome onStart={() => setState('testing')} />;
  }
  
  // 答题页面
  if (state === 'testing') {
    return (
      <Question
        question={QUESTIONS[currentIndex]}
        current={currentIndex + 1}
        total={QUESTIONS.length}
        onAnswer={handleAnswer}
      />
    );
  }
  
  // 结果页面
  if (state === 'result' && result) {
    return (
      <Box flexDirection="column">
        <Result result={result} />
        <Box marginTop={1}>
          <Text dimColor>
            按 S 查看分享卡片，按 Enter 退出
          </Text>
        </Box>
      </Box>
    );
  }
  
  // 分享卡片页面
  if (state === 'share' && result) {
    return (
      <Box flexDirection="column">
        <ShareCard result={result} />
        <Box marginTop={1}>
          <Text dimColor>
            按 Enter 退出
          </Text>
        </Box>
      </Box>
    );
  }
  
  // 加载状态
  return (
    <Box flexDirection="column" padding={1}>
      <Text color="cyan">
        正在计算...
      </Text>
    </Box>
  );
}
