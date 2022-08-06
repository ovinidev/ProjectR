import { Heading, Stack, Text } from '@chakra-ui/react';
// @ts-ignore
import { Slide } from 'react-reveal';
import { Container } from '../Container';

export const HappyB = () => {
  return (
    <Container
      color="secondary"
      display="flex"
    >
      <Slide right>
        <Stack spacing="10">
          <Text fontSize={{ base: '1.2rem', xl: '1.4rem', nb: '1.6rem' }}>
            Queria primeiramente agradecer a Deus por ter te encontrado, gostaria
            de parabenizar você nessa data tão especial na qual eu esperei tanto,
            ano passado te conheci já depois do seu aniversário e nem pude dar parabéns,
            mas, para esse ano eu preparei isso para você, pois você merece demais.
            Quero envelhecer ao seu lado, casar e construir uma linda família, esse é
            meu primeiro aniversário seu de muitos com você. Feliz aniversário meu amor,
            você é tudo para mim e sempre rezo para Deus te abençoar e realizar seus sonhos,
            minha fisio linda e perfeita.
          </Text>
        </Stack>
      </Slide>

    </Container>
  );
};
