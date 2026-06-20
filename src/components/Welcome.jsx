import React from 'react';
import { Box, Text } from 'ink';

const CCTI_LOGO = `
   ██████╗██╗  ██╗████████╗
  ██╔════╝██║  ██║╚══██╔══╝
  ██║     ███████║   ██║   
  ██║     ██╔══██║   ██║   
  ╚██████╗██║  ██║   ██║   
   ╚═════╝╚═╝  ╚═╝   ╚═╝   
`;

export default function Welcome({ onStart }) {
  return (
    <Box flexDirection="column" padding={1}>
      <Box marginBottom={1}>
        <Text color="cyan" bold>
          {CCTI_LOGO}
        </Text>
      </Box>
      
      <Box marginBottom={1}>
        <Text color="blue">
          Code Character Type Indicator
        </Text>
      </Box>
      
      <Box marginBottom={1}>
        <Text dimColor>
          程序员代码人格测试 - 不是测试你是什么样的人
        </Text>
      </Box>
      <Box marginBottom={1}>
        <Text dimColor>
          而是探索你写代码时是什么样的人
        </Text>
      </Box>
      
      <Box marginTop={2}>
        <Text color="green">
          按 Enter 开始测试...
        </Text>
      </Box>
      
      <Box marginTop={1}>
        <Text dimColor>
          按 Ctrl+C 可随时退出
        </Text>
      </Box>
    </Box>
  );
}
