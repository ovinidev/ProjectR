import { Heading, Stack, Text } from '@chakra-ui/react';
// @ts-ignore
import { Zoom } from 'react-reveal';
import { Container } from '../Container';

export const FavDay = () => {
  return (
    <Container
      bg="secondary"
      color="primary"
      display="flex"
    >
      <Zoom>
        <Stack spacing="10">
          <Heading fontSize={{ base: '1.6rem', xl: '2.6rem' }}>O dia 25</Heading>
          <Text fontSize={{ base: '1.2rem', xl: '1.4rem', nb: '1.6rem' }}>
            25 é nosso dia, o dia que ficamos pela primeira vez, o dia que começamos
            a namorar, pode apostar que será o dia que pedirei você em casamento
            (spoiler).
          </Text>
        </Stack>
      </Zoom>

    </Container>
  );
};
