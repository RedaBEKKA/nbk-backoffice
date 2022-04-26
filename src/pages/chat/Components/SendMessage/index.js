import { Flex, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React from 'react';
import { Icon } from "@chakra-ui/react";
import { BiSend } from "react-icons/bi";

const ContainerSendMessage = () => {
    return (
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
    );
}

export default ContainerSendMessage;
