import { Box, BoxProps } from '@chakra-ui/react';
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
      {children}
    </Box>
  );
};
