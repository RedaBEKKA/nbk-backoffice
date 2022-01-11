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
                <FormControl>
                  <FormLabel>nouveau mot de passe</FormLabel>
                  <Input required placeholder="nouveau mot de passe" variant="filled"></Input>
                </FormControl>
                <FormControl>
                  <FormLabel>confirmer le nouveau mot de passe</FormLabel>
                  <Input
                    required
                    placeholder="confirmer le nouveau mot de passe"
                    variant="filled"
                  ></Input>
                </FormControl>
                <FormControl>
                  <FormLabel>code</FormLabel>
                  <Input required placeholder="code" variant="filled"></Input>
                </FormControl>
              </Stack>
              <Button width="full" my="8" colorScheme="green">
                réinitialiser
              </Button>
            </form>
          </Box>
        </Container>
      </Flex>
    </Box>
  );
}
