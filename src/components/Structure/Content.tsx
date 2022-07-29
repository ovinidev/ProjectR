import { Flex, FlexProps } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface ContentProps extends FlexProps{
  children: ReactNode
}

export const Content = ({ children, ...rest }: ContentProps) => {
  return (
    <Flex
      justify="center"
      direction="column"
      w={{ base: '80%', nb: '100%' }}
      maxW={800}
      mx="auto"
      {...rest}
    >
      {children}
    </Flex>
  );
};
