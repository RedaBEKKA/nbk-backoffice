import React from 'react';
import { Flex, Heading, Button, Text, Stack } from '@chakra-ui/react';
import { BiShow } from 'react-icons/bi';

export default function header() {
  return (
    <Flex
      mb="4"
      justifyContent="space-between"
      p="12"
      bg="linear-gradient(to right, #56ab2f, #a8e063)"
      color="white"
    >
      <Heading>title here</Heading>
      <Stack spacing={4}>
        <Stack direction="row">
          <Button _hover={{ bg: 'gray.900' }} _focus={{ bg: 'gray.900' }} bg="black" color="white">
            ajoutes
          </Button>
          <Button _hover={{ bg: 'gray.900' }} _focus={{ bg: 'gray.900' }} bg="black" color="white">
            export
          </Button>
        </Stack>
        <Stack align="center" direction="row" fontSize="lg" fontWeight="bold">
          <BiShow style={{ fontSize: 24 }}></BiShow>
          <Text>show filter</Text>
        </Stack>
      </Stack>
    </Flex>
  );
}
