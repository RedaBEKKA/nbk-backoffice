import {
  Avatar,
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Skeleton,
  Text,
  WrapItem,
} from "@chakra-ui/react";
import LoadingMessages from "components/LoadingMessages";
import React from "react";
import { Icon } from "@chakra-ui/react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BiSearchAlt2 } from "react-icons/bi";
import Profile from "./Profile.js";

function BackGroundMessage() {
  return (
    <Box
      bg="#333"
      outline="hidden"
      m="20px 60px"
      h="83vh"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="md"
    >
      <Flex direction="row">
        <Box h="83vh" bg="#fff" w={"25vw"}>
          <Box bg="#f5f5f5" h="15%" pt="2">
            <Flex
              direction="row"
              align={"center"}
              justify="space-between"
              px="5"
            >
              <WrapItem>
                <Avatar
                  cursor="pointer"
                  name="Dan Abrahmov"
                  src="https://bit.ly/dan-abramov"
                  size="sm"
                />
              </WrapItem>
              <Icon
                as={BiDotsVerticalRounded}
                boxSize="25px"
                cursor="pointer"
              />
            </Flex>
            <Box mx="5" mt="4">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<Icon as={BiSearchAlt2} color="gray.300" />}
                />
                <Input
                  type="tel"
                  placeholder="search or start new chat"
                  borderRadius="20"
                  boxShadow="sm"
                />
              </InputGroup>
            </Box>
          </Box>

          <Box pt="5" bg="#fff">
            <Heading as="h2" px={"5"} size="md" color="#2DDCB1">
              Chats
            </Heading>
            <Profile title="Ryan Florence" url="https://bit.ly/ryan-florence" />
            <Profile
              title="Prosper Otemuyiwa"
              url="https://bit.ly/prosper-baba"
            />
            <Profile
              title="Christian Nwamba"
              url="https://bit.ly/sage-adebayo"
            />
          </Box>
        </Box>
        <Box h="83vh" bg="#888" w="100%">
          <Flex align={"center"} bg="#252F3E" h="4rem" px={5}>
            <WrapItem>
              <Avatar
                cursor="pointer"
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
                size="md"
              />
            </WrapItem>

            <Heading as="h2" px={"5"} size="md" color="#fff">
              Dan Abrahmov
            </Heading>
          </Flex>
          <Box
            w="100%"
            h="100%"
            bgGradient={[
              "linear(to-tr, green.100, yellow.400)",
              "linear(to-t, blue.200, teal.500)",
              "linear(to-b, green.100, green.100)",
            ]}
          >
            <Flex direction={"row"} align='flex-end'  >
              <Avatar
                m="5"
                cursor="pointer"
                name="Dan Abrahmov"
                src="https://bit.ly/sage-adebayo"
                size="md"
              />
                  
              <Box   >
                <Flex
                  bg="#eee"
                  boxShadow={"md"}
                  borderRadius={20}
                  px={3}
                  h="40px"
                  my="3"
                  justifyContent={"center"}
                  direction={"column"}
                  w="65px"
                >
                  <Text>Hello</Text>
                </Flex>

                <Flex
                  bg="#eee"
                  boxShadow={"md"}
                  borderRadius={20}
                  px={3}
                  h="40px"
                  my="3"
                  justifyContent={"center"}
                  direction={"column"}
                  w="175px"

                >
                  <Text>lorem ipsum lorem</Text>
                </Flex>
                <Flex
                  bg="#eee"
                  boxShadow={"md"}
                  borderRadius={20}
                  px={3}
                  h="40px"
                  my="3"
                  justifyContent={"center"}
                  direction={"column"}
                >
                  <Text>lorem ipsum lorem lorem ipsum loremlorem ipsum lorem</Text>
                </Flex>
       
              </Box>

            </Flex>
            
                  
            <Flex w={"100%"}  justifyContent={"flex-end"}  pr='4' >
                <Flex
                  bg="#999"
                  boxShadow={"md"}
                  borderRadius={20}
                  px={3}
                  h="40px"
                  my="3"
                  justifyContent={"center"}
                  direction={"column"}
                  w="175px"

                >
                  <Text color={"#fff"}>lorem ipsum lorem</Text>
                </Flex>
                </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default BackGroundMessage;
