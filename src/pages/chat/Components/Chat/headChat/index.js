import { Avatar, Flex, Heading, WrapItem } from "@chakra-ui/react";
import React from "react";

function HeadChat() {
  return (
    <Flex align={"center"} bg="#2DDCB1" h="4rem" px={5}>
      <WrapItem>
        <Avatar
          cursor="pointer"
          name="Oan Abrahmov"
          src="https://bit.ly/tioluwani-kolawole"
          size="md"
        />
      </WrapItem>

      <Heading as="h2" px={"5"} size="md" color="#fff">
        Dan Abrahmov
      </Heading>
    </Flex>
  );
}

export default HeadChat;
