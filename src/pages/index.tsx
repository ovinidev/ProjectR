import { Box, Flex, Heading, Select, Stack } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { AddTodo } from '../components/AddTodo';
import { TodoItem } from '../components/TodoItem';

export default function ToDoList() {
  const [id, setId] = useState(0);
  const [todo, setTodo] = useState([{ text: 'Example', id: id }]);

  const textRef = useRef<HTMLInputElement>({ value: '' } as HTMLInputElement);

  const addTodo = () => {
    setId(id => id + 1);
    setTodo([...todo, { text: textRef.current.value, id: id + 1 }]);
    localStorage.setItem('todo', JSON.stringify([...todo, { text: textRef.current.value, id: id + 1 }]));
  }

  const removeTodo = (id: number) => {
    const newTodo = todo.filter(item => {
      return item.id !== id;
    })

    localStorage.setItem('todo', JSON.stringify(newTodo));
    setTodo(newTodo);
  }

  useEffect(() => {
    const todoLocalStorage = localStorage.getItem('todo');

    if (todoLocalStorage) {
      setTodo(JSON.parse(todoLocalStorage));
    }
  }, [])

  return (
    <Flex
      align={'center'}
      h='100vh'
      flexDirection={'column'}
      width={'100%'}
    >
      <Box
        w='100%'
        maxWidth={600}
        display='flex'
        flexDirection='column'
        px={['6', '8', '10']}
        mt='6rem'
      >
        <Heading
          alignSelf={'center'}
          color={'pink.600'}
          fontSize='2rem'
        >
          Lista de tarefas
        </Heading>

        <AddTodo
          addTodo={addTodo}
          ref={textRef}
        />

        <Stack spacing='4'>
          {todo.map((item) => {

            return (
              <TodoItem
                key={item.id}
                text={item.text}
                removeTodo={() => removeTodo(item.id)}
              />
            )
          })}
        </Stack>
      </Box>
    </Flex>

  )
}
