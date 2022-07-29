/* eslint-disable react/no-children-prop */
import { Flex, FormControl, FormLabel, Icon, Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
import { RiSearchLine } from 'react-icons/ri'

export default function InputChakra() {
  return (
    <Flex h='100vh' align='center' justify='center'>
      <Stack bgColor='gray.900' p='14' spacing='4'>
        <Input
          bgColor='gray.800'
          w={400}
          variant='filled'
          size='lg'
          _hover={{ background: 'transparent' }}
          focusBorderColor='pink.700'
          placeholder='Digite aqui'
        />

        <Input
          bgColor='gray.800'
          w={400}
          variant='outline'
          size='lg'
          _hover={{ background: 'transparent' }}
          focusBorderColor='pink.700'
          borderColor={'pink.700'}
          border={'2px'}
          placeholder='Digite aqui'
        />

        <FormControl pt='2'>
          <FormLabel>Login</FormLabel>
          <Input
            bgColor='gray.800'
            w={400}
            variant='outline'
            size='lg'
            _hover={{ background: 'gray.800' }}
            focusBorderColor='blue.700'
            borderColor={'blue.700'}
            border={'2px'}
            placeholder='Email'
          />
        </FormControl>

        <Flex
          as='label'
          py='4'
          px='8'
          width={400}
          color='gray.200'
          bg='gray.800'
          borderRadius='full'
          align='center'
        >
          <Input
            color='gray.50'
            variant='unstyled'
            mr='4'
            placeholder='Buscar'
            _placeholder={{ color: 'gray.400' }}
          />
          <Icon as={RiSearchLine} fontSize='20' />
        </Flex>

        <InputGroup size={'lg'}>
          <InputLeftElement
            pointerEvents='none'
            children={<RiSearchLine />}
            fontSize='20'
          />
          <Input
            bgColor='gray.800'
            w={400}
            variant='outline'
            size='lg'
            _hover={{ background: 'transparent' }}
            focusBorderColor='pink.700'
            borderColor={'pink.700'}
            border={'2px'}
            placeholder='Buscar'
            borderRadius='full'
          />
        </InputGroup>
      </Stack>
    </Flex>
  );
}
