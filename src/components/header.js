import React, { useState } from 'react';
import { Flex, Heading, Button, Text, Stack } from '@chakra-ui/react';
import { BiShow } from 'react-icons/bi';
import { FaFileExport } from 'react-icons/fa';
import { AiFillFileAdd } from 'react-icons/ai';
import Filter from './filter';

export default function Header() {
  const [showfilter, setShowfilter] = useState(false);
  const handleShowfilter = () => {
    setShowfilter(!showfilter);
  };
  return (
    <>
      <Flex
        mb="4"
        justifyContent="space-between"
        p="4"
        pt="16"
        bg="linear-gradient(to right, #56ab2f, #a8e063)"
        color="white"
        h={showfilter && 'xs'}
      >
        <Heading>title here</Heading>
        <Stack spacing={4}>
          <Stack direction="row">
            <Button
              leftIcon={<AiFillFileAdd />}
              _hover={{ bg: 'gray.900' }}
              _focus={{ bg: 'gray.900' }}
              bg="black"
              color="white"
            >
              Ajoutes
            </Button>
            <Button
              leftIcon={<FaFileExport />}
              _hover={{ bg: 'gray.900' }}
              _focus={{ bg: 'gray.900' }}
              bg="black"
              color="white"
            >
              Export
            </Button>
          </Stack>
          <Stack
            cursor="pointer"
            onClick={handleShowfilter}
            align="center"
            direction="row"
            fontSize="lg"
            fontWeight="bold"
          >
            <BiShow style={{ fontSize: 24 }}></BiShow>
            <Text>{showfilter ? 'masquer les filtres' : 'afficher les filtres'}</Text>
          </Stack>
        </Stack>
      </Flex>
      {showfilter && <Filter></Filter>}
    </>
  );
}
