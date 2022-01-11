import React from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
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
        <Container maxW="6xl">
          <SimpleGrid overflow="hidden" shadow="lg" rounded="lg" bg="white" columns={2}>
            <GridItem p="8" colSpan={{ base: 2, md: 1 }}>
              <Flex m="4" justifyContent="center">
                <Heading size="lg">Se connecter à votre compte</Heading>
              </Flex>
              <form>
                <Stack spacing={3}>
                  <FormControl>
                    <FormLabel>Address e-mail</FormLabel>
                    <Input required placeholder="Address e-mail" variant="filled"></Input>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Mot de passe</FormLabel>
                    <Input
                      required
                      placeholder="Mot de passe"
                      variant="filled"
                      type="password"
                    ></Input>
                  </FormControl>
                  <Flex justifyContent="space-between">
                    <Checkbox colorScheme="green">Se souvenir de moi</Checkbox>
                    <Link to="/resetPassword">
                      <Text color="green.500">Mot de passe oublié ?</Text>
                    </Link>
                  </Flex>
                </Stack>
                <Button width="full" my="8" colorScheme="green">
                  SE CONNECTER
                </Button>
              </form>
            </GridItem>
            <GridItem
              overflow="hidden"
              bg="green.700"
              p="8"
              display={{ base: 'none', md: 'block' }}
              color="white"
            >
              <Flex p="8" direction="column" alignItems="center" justifyContent="center" h="100%">
                <Heading size="2xl">Bienvenue parmi NOUS!</Heading>
                <Text fontSize="xl">
                  s simply dummy text of the printing and typesetting industry. Lorem
                </Text>
              </Flex>
            </GridItem>
          </SimpleGrid>
        </Container>
      </Flex>
    </Box>
  );
}
