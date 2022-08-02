import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import ReactAudioPlayer from 'react-audio-player';
import { Container } from '../Container';
import { Glass } from '../Glass';
import { FloatMotion } from '../Motion/FloatMotion';

export const Welcome = () => {
  return (
    <Container
      color="secondary"
      display="flex"
    >
      <Stack spacing="16" align="center">
        <FloatMotion>
          <Image src="/ravena.png" h={{ base: 300, xl: 400 }} alt="fisio" />
        </FloatMotion>
        <Flex align="center" direction="column">
          <Heading fontSize={{ base: '1.6rem', xl: '2.6rem' }} fontWeight="700">
            Bem vinda, Renatha Silva
          </Heading>
          <Text fontSize={{ base: '1rem', xl: '1.4rem', nb: '1.6rem' }} mt="1rem" fontWeight="500">
            Hoje é seu aniversário, então fiz essa surpresa para você.
            Saiba que você é muito especial para mim!
          </Text>
        </Flex>

        <ReactAudioPlayer
          src="paratodos.mp3"
          autoPlay
          loop
          volume={0.2}
        />
      </Stack>
    </Container>
  );
};
