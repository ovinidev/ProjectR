import { Image, SimpleGrid, Button, Flex, Stack } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MotionBox } from "../components/MotionBox";

export default function Motion() {
  const [visible, setVisible] = useState(false);

  return (
    <AnimatePresence>
      <Flex
        height='100vh'
        w='100%'
        display='flex'
        alignItems={'center'}
        justifyContent='center'
        flexDirection={'column'}>

        <SimpleGrid columns={[null, 1, 2, 3]} spacing='8'>
          <Image width={400} src='https://i.pinimg.com/originals/38/61/3b/38613bd0e62977f75495b768b36d5874.png' alt='Dan Abramov' />
          <Image width={400} src='https://i.pinimg.com/originals/38/61/3b/38613bd0e62977f75495b768b36d5874.png' alt='Dan Abramov' />
          <Image width={400} src='https://i.pinimg.com/originals/38/61/3b/38613bd0e62977f75495b768b36d5874.png' alt='Dan Abramov' />
          <Image width={400} src='https://i.pinimg.com/originals/38/61/3b/38613bd0e62977f75495b768b36d5874.png' alt='Dan Abramov' />
          <Image width={400} src='https://i.pinimg.com/originals/38/61/3b/38613bd0e62977f75495b768b36d5874.png' alt='Dan Abramov' />
          <Image width={400} src='https://i.pinimg.com/originals/38/61/3b/38613bd0e62977f75495b768b36d5874.png' alt='Dan Abramov' />
        </SimpleGrid>
      </Flex>
    </AnimatePresence>

  );
}
