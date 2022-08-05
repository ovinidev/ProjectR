import {
  Heading, Image, SimpleGrid,
} from '@chakra-ui/react';
import { Container } from '../Container';

export const Character = () => {
  return (
    <Container
      color="secondary"
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
        <Image src="/1.png" h={{ base: 150, xl: 300 }} />
        <Image src="/2.png" h={{ base: 150, xl: 300 }} />
        <Image src="/3.png" h={{ base: 150, xl: 300 }} />
        <Image src="/4.png" h={{ base: 150, xl: 300 }} />
        <Image src="/5.png" h={{ base: 150, xl: 300 }} />
        <Image src="/6.png" h={{ base: 150, xl: 300 }} />
      </SimpleGrid>
    </Container>
  );
};
