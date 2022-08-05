import {
  Image, SimpleGrid,
} from '@chakra-ui/react';
import { Container } from '../Container';

export const Gallery = () => {
  return (
    <Container
      color="secondary"
      display="flex"
      h={{ base: '140vh', xl: '100vh' }}
      bgImage="paratodos2.jpg"
    >
      <SimpleGrid
        columns={{ base: 1, xl: 2 }}
        gap="8"
        alignSelf="center"
      >
        <Image src="7.png" height={{ base: 250, xl: 350 }} />
        <Image src="8.png" height={{ base: 250, xl: 350 }} />
        <Image src="9.png" height={{ base: 250, xl: 350 }} />
        <Image src="10.png" height={{ base: 250, xl: 350 }} />
      </SimpleGrid>
    </Container>
  );
};
