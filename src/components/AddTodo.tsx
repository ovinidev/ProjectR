import {
  Button,
  Input,
  InputGroup,
  InputRightElement
} from "@chakra-ui/react";

import {
  forwardRef,
  ForwardRefRenderFunction
} from "react";

interface AddTodoProps {
  addTodo: () => void;
}

export const AddTodoBase: ForwardRefRenderFunction<HTMLInputElement, AddTodoProps> = (
  { addTodo }, ref: any) => {
  return (
    <InputGroup mt={'2rem'} mb={'4rem'} size='lg' w='100%'>
      <Input
        focusBorderColor='pink.400'
        bgColor={'gray.400'}
        h={50}
        px={'4'}
        ref={ref}
      />
      <InputRightElement>
        <Button
          onClick={addTodo}
          mr='0.5rem'
          colorScheme={'pink'}>
          +
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export const AddTodo = forwardRef(AddTodoBase);
