import {
  Box,
  Text,
} from '@chakra-ui/react';
import { Container } from '../Container';
import { Glass } from '../Glass';

export const Film = () => {
  return (
    <Container
      bgImage="paratodos.jpg"
      h="100vh"
      display="flex"
    >
      <Glass textAlign="center">
        <Text
          fontSize={{ base: '1rem', xl: '1.4rem', nb: '1.6rem' }}
          fontWeight="500"
          color="white"
        >
          Quando eles perguntam o motivo, eu nunca consigo explicar
          <br />
          Mas uma sinfonia tocou quando você me disse seu nome
          <br />
          E eu considerei isso um sinal
          <br />

        </Text>
        <Text
          fontSize={{ base: '1rem', xl: '1.4rem', nb: '1.6rem' }}
          fontWeight="500"
          color="white"
        >
          Você será meu começo, meu meio, meu fim?
          <br />
          Você será meu começo, meu meio, meu fim?
          <br />
          Você será meu começo, meu meio, meu fim?
          <br />
          Você será meu?
        </Text>
      </Glass>
    </Container>
  );
};
