import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

function Receiver({item}) {
  return (
    <>
      <Flex direction={"row"} align="flex-end">
        <Avatar
          m="5"
          cursor="pointer"
          name="Ban nbrahmov"
          src="https://bit.ly/tioluwani-kolawole"
          size="md"
        />

        <Box>
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
            <Text>{item.body}</Text>
          </Flex>
        </Box>
      </Flex>


    </>
  );
}

export default Receiver;
