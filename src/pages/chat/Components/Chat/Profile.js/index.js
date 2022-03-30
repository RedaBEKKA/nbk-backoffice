import { Avatar, Box, Flex, Heading, Text, WrapItem } from "@chakra-ui/react";
import React from "react";

function Profile({ title, url }) {
  return (
    <Box
      mt="5"
      _hover={{
        background: "#eee",
        color: "teal.500",
      }}
    >
      <Flex direction={"row"} justify={"space-between"} py="3" w="100%">
        <Flex px={"5"} direction={"row"} align="center">
          <WrapItem>
            <Avatar cursor="pointer" name={title} src={url} size="sm" />
          </WrapItem>
          <Box px={3}>
            <Heading fontSize="sm">{title}</Heading>
            <Text fontSize="xs">Lorem ipsu m lorem lorem</Text>
          </Box>
        </Flex>
        <Box px={"5"}>
          <Text fontSize="sm">jun 02,2022</Text>
          {/* <Text fontSize="sm">Lorem ipsu m</Text> */}
        </Box>
      </Flex>
    </Box>
  );
}

export default Profile;
