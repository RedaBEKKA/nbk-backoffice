import React from 'react';
import {
  Box,
  Container,
  Flex,
  Input,
  FormControl,
  FormLabel,
  Alert,
  SimpleGrid,
  Stack,
  GridItem,
  Button,
  Checkbox,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <Box bg="linear-gradient(to right, #56ab2f, #a8e063)" w="100%" h="100vh">
      <Flex align="center" justifyContent="center" h="100%">
        <Container maxW="lg">
          <Box p="8" shadow="lg" rounded="lg" bg="white">
            <form>
              <Stack spacing={3}>
                <FormControl>
                  <FormLabel>Address e-mail</FormLabel>
                  <Input required placeholder="Address e-mail" variant="filled"></Input>
                </FormControl>
              </Stack>
              <Button width="full" my="8" colorScheme="green">
                demander le code de réinitialisation
              </Button>
            </form>
          </Box>
        </Container>
      </Flex>
    </Box>
  );
}
