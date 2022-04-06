import {
  Avatar,
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  WrapItem,
  Spinner,
  Center,
} from "@chakra-ui/react";
import React from "react";
import { Icon } from "@chakra-ui/react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Profile from "./Profile.js";
import { BiSend } from "react-icons/bi";
import HeadChat from "./headChat/index.js";
import Receiver from "./receiver/index.js";
import Sender from "./Sender/index.js";
import useGetChannels from "../../Hooks/useGetChannels";
function BackGroundMessage() {
  const { loading, channels } = useGetChannels();
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
                  name="Oan Abrahmov"
                  src="https://bit.ly/tioluwani-kolawole"
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
                {/* <InputLeftElement
                  pointerEvents="none"
                  children={<Icon as={BiSearchAlt2} color="gray.300" />}
                /> */}
                <Input
                  type="tel"
                  placeholder="search or start new chat"
                  borderRadius="20"
                  boxShadow="sm"
                />
              </InputGroup>
            </Box>
          </Box>

          <Box overflowY="auto" h="full" pb="8" pt="5" bg="#fff">
            <Heading as="h2" px={"5"} size="md" color="#2DDCB1">
              Chats
            </Heading>
            {loading ? (
              <Center p="8">
                <Spinner color="#2DDCB1" />
              </Center>
            ) : (
              <>
                {channels &&
                  channels.length > 0 &&
                  channels.map((channel) => (
                    <Profile
                      date={channel.createdAt}
                      key={channel.channelId}
                      title={channel.userId}
                      url="https://bit.ly/tioluwani-kolawole"
                      channel={channel}
                    />
                  ))}
              </>
            )}
          </Box>
        </Box>
        <Box h="83vh" bg="#888" w="100%">
          <HeadChat />

          <Box
            w="100%"
            h="100%"
            bgGradient={[
              "linear(to-tr, gray.100, gray.400)",
              "linear(to-t, blue.200, teal.500)",
              "linear(to-b, gray.100, gray.100)",
            ]}
            pos={"relative"}
          >
            <Receiver />
            <Sender />

            <Flex
              bg={"#fff"}
              m="5"
              pos={"absolute"}
              bottom="5rem"
              w="95%"
              borderRadius={25}
            >
              <InputGroup>
                <Input placeholder="send a message" borderRadius={25} />
                <InputRightElement
                  pointerEvents="stroke"
                  children={
                    <Icon
                      color="gray.300"
                      as={BiSend}
                      cursor="pointer"
                      boxSize="30px"
                    />
                  }
                />
              </InputGroup>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default BackGroundMessage;
// <Icon as={BiSend} boxSize='30px' />
