import {
  Box,
  Text,
} from '@chakra-ui/react';
import { Container } from '../Container';

export const Film = () => {
  return (
    <Container
      backgroundImage="paratodos.jpg"
      h={{ base: '75vh', xl: '100vh' }}
      display="flex"
    >
      <Box bg="white" color="primary" borderRadius="base" p="4">
        <Text fontSize={{ base: '1rem', xl: '1.4rem', nb: '1.6rem' }} mt="1rem" fontWeight="500">
          Você sem dúvidas é meu amuleto da sorte, quero você para todo o sempre!
        </Text>
      </Box>
    </Container>
  );
};
