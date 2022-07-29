import {
  Box,
  Flex,
  Heading, Image, Stack, Text,
} from '@chakra-ui/react';
import { Container } from '../Structure/Container';
import { Content } from '../Structure/Content';
import { FloatMotion } from '../Motion/FloatMotion';

export const Welcome = () => {
  return (
    <Container
      color="secondary"
      display="flex"
    >
      <Content>
        <Stack spacing="16" align="center">
          <FloatMotion>
            <Image src="/ravena.png" height={{ base: 300, xl: 400 }} alt="fisio" />
          </FloatMotion>
          <Flex align="center" direction="column">
            <Heading fontSize={{ base: '1.6rem', xl: '2.6rem' }} fontWeight="700">
              Bem vinda, Renatha Silva
            </Heading>
            <Text fontSize={{ base: '1rem', xl: '1.2rem' }} mt="1rem" fontWeight="500">
              Hoje é seu aniversário, então fiz essa surpresa para você.
              Saiba que você é muito especial para mim!
            </Text>
          </Flex>
        </Stack>

      </Content>
    </Container>
  );
};
