import { Heading, Stack, Text } from '@chakra-ui/react';
import { Container } from '../Container';

export const About = () => {
  return (
    <Container bg="secondary" color="primary" display="flex">
      <Stack spacing="10">

        <Heading fontSize={{ base: '1.6rem', xl: '2.6rem' }}>Quem é Renatha Silva?</Heading>

        <Text fontSize={{ base: '1rem', xl: '1.4rem', nb: '1.6rem' }}>
          Ela é uma pessoa muito especial, sem dúvida umas das pessoas mais incríveis
          que ja conheci, inteligente, super educada, carinhosa (comigo), estudiosa,
          tudo de bom! E sou muito sortudo em te-la como namorada.
          Ela é uma pessoa muito especial, sem dúvida umas das pessoas mais incríveis
          que ja conheci, inteligente, super educada, carinhosa (comigo), estudiosa,
          tudo de bom! E sou muito sortudo em te-la como namorada.
          Ela é uma pessoa muito especial, sem dúvida umas das pessoas mais incríveis
          que ja conheci, inteligente, super educada, carinhosa (comigo), estudiosa,
          tudo de bom! E sou muito sortudo em te-la como namorada.
        </Text>
      </Stack>

    </Container>
  );
};
