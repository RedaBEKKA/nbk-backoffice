import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

function Receiver() {
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


    </>
  );
}

export default Receiver;
