import { BoxProps, chakra } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionBoxProps extends BoxProps{
  children: ReactNode;
}

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});

export function MotionBox({ children, ...rest }: MotionBoxProps) {

  return (
    <ChakraBox
      animate={{ y: [0, 15, 0] }}
      // @ts-ignore no problem in operation, although type error appears.
      transition={{
        duration: 2,
        ease: "easeIn",
        repeat: Infinity,
      }}
      {...rest}>
      {children}
    </ChakraBox>
  );
}
