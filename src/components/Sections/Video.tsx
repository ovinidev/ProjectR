import { Flex } from '@chakra-ui/react';
// @ts-ignore
import { Slide } from 'react-reveal';
import { Container } from '../Container';

export const Video = () => {
  return (
    <Container display="flex" bg="secondary">
      <Slide bottom>
        <Flex align="center" justify="center" h="100vh">
          <video autoPlay loop muted style={{ height: '100%' }}>
            <source src="video.mp4" type="video/mp4" />
          </video>
        </Flex>
      </Slide>
    </Container>
  );
};
