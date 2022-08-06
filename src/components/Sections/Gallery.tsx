import {
  Box,
  Image, SimpleGrid,
} from '@chakra-ui/react';
// @ts-ignore
import { Slide } from 'react-reveal';
import { Container } from '../Container';

export const Gallery = () => {
  return (
    <Slide
      right
    >
      <Container
        color="secondary"
        display="flex"
        h={{ base: '180vh', xl: '100vh' }}
        bgImage="paratodos2.jpg"
      >

        <SimpleGrid
          columns={{ base: 1, xl: 2 }}
          gap="8"
          alignSelf="center"
        >
          <Box
            bg="white"
            p="1rem 1rem 4rem"
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
          >

            <Image mt="1rem" src="7.png" height={{ base: 250, xl: 250, '2xl': 350 }} />
          </Box>
          <Box
            bg="white"
            p="1rem 1rem 4rem"
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
          >
            <Image src="8.png" height={{ base: 250, xl: 250, '2xl': 350 }} />
          </Box>

          <Box
            bg="white"
            p="1rem 1rem 4rem"
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
          >
            <Image src="9.png" height={{ base: 250, xl: 250, '2xl': 350 }} />
          </Box>

          <Box
            bg="white"
            p="1rem 1rem 4rem"
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
          >
            <Image src="10.png" height={{ base: 250, xl: 250, '2xl': 350 }} />
          </Box>
        </SimpleGrid>
      </Container>
    </Slide>
  );
};
