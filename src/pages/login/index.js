import React from 'react';
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';

export default function Login() {
  return (
    <Box bg="linear-gradient(to right, #56ab2f, #a8e063)" w="100%" h="100vh">
      <Flex align="center" justifyContent="center" h="100%">
        <Container maxW="6xl" bg="white" shadow="lg" rounded="lg" p="8">
          <Heading>login</Heading>
        </Container>
      </Flex>
    </Box>
  );
}
