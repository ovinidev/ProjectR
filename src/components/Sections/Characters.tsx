import {
  Heading, Image, SimpleGrid,
} from '@chakra-ui/react';
import { Container } from '../Container';

export const Character = () => {
  return (
    <Container
      bg="secondary"
      color="primary"
      display="flex"
      h={{ base: '100vh', xl: '120vh' }}
    >
      <Heading fontSize={{ base: '1.6rem', xl: '2.6rem' }}>Personagens que lembram você</Heading>
      <SimpleGrid
        columns={{ base: 2, xl: 2 }}
        gap="4"
        mt="8"
        alignSelf={{ base: 'center', xl: 'normal' }}
      >
        <Image src="/verde.jpeg" h={{ base: 150, xl: 300 }} />
        <Image src="/coelho.jpg" h={{ base: 150, xl: 300 }} />
        <Image src="/docinho.png" h={{ base: 150, xl: 300 }} />
        <Image src="/fofinha.png" h={{ base: 150, xl: 300 }} />
        <Image src="/coelho.jpeg" h={{ base: 150, xl: 300 }} />
        <Image src="/mike.jpg" h={{ base: 150, xl: 300 }} />
      </SimpleGrid>
    </Container>
  );
};
