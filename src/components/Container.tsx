import { Box, BoxProps, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface ContainerProps extends BoxProps {
  children: ReactNode
}

export const Container = ({ children, ...rest }: ContainerProps) => {
  return (
    <Box
      h="100vh"
      w="100%"
      {...rest}
    >
      <Flex
        justify="center"
        direction="column"
        w={{ base: '80%', nb: '100%' }}
        maxW={800}
        mx="auto"
      >
        {children}
      </Flex>
    </Box>
  );
};
