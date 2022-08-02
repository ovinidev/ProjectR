import { Box, BoxProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface GlassProps extends BoxProps{
  children: ReactNode
}

export const Glass = ({ children, ...rest }: GlassProps) => {
  return (
    <Box
      bg="rgba(255, 255, 255, 0.100 )"
      boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.37 )"
      backdropFilter="blur(10px)"
      borderRadius="base"
      p="4"
      {...rest}
    >
      {children}
    </Box>
  );
};
