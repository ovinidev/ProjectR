import { Heading, Stack, Text } from '@chakra-ui/react';
// @ts-ignore
import { Slide } from 'react-reveal';
import { Container } from '../Container';

export const About = () => {
  return (
    <Container
      bg="secondary"
      color="primary"
      display="flex"
    >
      <Slide left>
        <Stack spacing="10">
          <Heading fontSize={{ base: '1.6rem', xl: '2.6rem' }}>Quem é Renatha Silva?</Heading>
          <Text fontSize={{ base: '1rem', xl: '1.4rem', nb: '1.6rem' }}>
            Ela é uma pessoa muito especial, sem dúvida umas das pessoas mais incríveis
            que ja conheci, inteligente, super educada, carinhosa (comigo), estudiosa,
            tudo de bom! E sou muito sortudo em te-la como namorada.
            Desde quando a conheci eu sabia que ia namorar porque não poderia perder
            essa oportunidade de ouro, não costumo acreditar ou confiar nas pessoas,
            mas com ela é diferente, com ela eu sei q posso confiar e ficar tranquilo
            que ficará tudo bem no final.
            Obrigado por tudo meu amor, te amo de verdade verdadeira, para sempre, demais,
            infinito mesmo te amo.
          </Text>
        </Stack>
      </Slide>
    </Container>
  );
};
