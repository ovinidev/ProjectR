import {
  Image, Button, Flex, Stack, Heading,
} from '@chakra-ui/react';
import Link from 'next/link';
import ReactAudioPlayer from 'react-audio-player';
import { FloatMotion } from '../components/Motion/FloatMotion';

export default function Home() {
  return (
    <Flex
      h="100vh"
      w="100vw"
      align="center"
      justify="center"
      direction="column"
    >
      <Stack spacing="14" display="flex" align="center">
        <FloatMotion>
          <Image width={400} src="https://i.pinimg.com/originals/38/61/3b/38613bd0e62977f75495b768b36d5874.png" alt="Dan Abramov" />
        </FloatMotion>

        <Button
          colorScheme="purple"
          w={100}
        >
          <Link href="/home">
            Iniciar
          </Link>
        </Button>
      </Stack>

      <ReactAudioPlayer
        src="gorila.mp3"
        autoPlay
        loop
        volume={0.5}
      />
    </Flex>
  );
}
