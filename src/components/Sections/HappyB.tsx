import { Heading, Stack, Text } from '@chakra-ui/react';
import { Container } from '../Container';

export const HappyB = () => {
  return (
    <Container
      color="secondary"
      display="flex"
    >
      <Stack spacing="10">
        <Text fontSize={{ base: '1rem', xl: '1.4rem', nb: '1.6rem' }}>
          Texto de niver
        </Text>
      </Stack>
    </Container>
  );
};
