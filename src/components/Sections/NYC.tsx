import {
  Text,
} from '@chakra-ui/react';
// @ts-ignore
import { Slide } from 'react-reveal';
import { Container } from '../Container';
import { Glass } from '../Glass';

export const NYC = () => {
  return (
    <Container
      bgImage="nyc.jpg"
      h="100vh"
      display="flex"
      bgPosition="top"
    >
      <Slide bottom>
        <Glass textAlign="center">
          <Text
            fontSize={{ base: '1.4rem', xl: '1.4rem', nb: '1.6rem' }}
            fontWeight="500"
            color="white"
          >
            E aqui que vamos morar, certo? Num apartamento lindo como sempre sonhamos,
            TE AMO MINHA VIDA TODA
          </Text>
        </Glass>
      </Slide>
    </Container>
  );
};
