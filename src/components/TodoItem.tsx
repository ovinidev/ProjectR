import { Button, Flex, Input } from "@chakra-ui/react";

interface TodoItemProps {
  text: string;
  removeTodo: () => void;
}

export const TodoItem = ({ text, removeTodo }: TodoItemProps) => {
  return (
    <Flex
      as='label'
      bgColor={'gray.400'}
      borderRadius='4'
      w={'100%'}
      py={'3'}
      pr='6'
      pl='2'
      align='center'
      justify={'space-between'}
      border={'2px solid #F012A2'}
    >
      <Input
        border='none'
        defaultValue={text}
        w={'80%'}
        variant='outline'
        focusBorderColor="transparent"
      />
      <Button
        onClick={removeTodo}
        colorScheme={'pink'}>Apagar</Button>
    </Flex>
  );
};
