import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Icon } from "@chakra-ui/react";
import { BiSend } from "react-icons/bi";
import useSendMessages from "pages/chat/Hooks/useSendMessage";
import { useForm } from "react-hook-form";

const ContainerSendMessage = ({ ChannelSelected }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const [body, setbody] = useState("");
  const { onSubmit } = useSendMessages();
  const submit = () => {
    onSubmit(ChannelSelected.channelId, ChannelSelected.userId, body);
    setTimeout(() => {
      setbody("");
    }, 2000);
  };
  const handleChange = (event) => setbody(event.target.value);
  return (
    <form onSubmit={handleSubmit(submit)}>
      <Flex
        bg={"#fff"}
        m="5"
        pos={"absolute"}
        bottom="5rem"
        w="95%"
        borderRadius={25}
      >
        <InputGroup>
          <Input
            placeholder="send a message"
            borderRadius={25}
            value={body}
            onChange={handleChange}
          />
          <Button style={{ backgroundColor: "transparent" }} type="submit">
            <InputRightElement
              pointerEvents="stroke"
              children={
                <Icon
                  color="gray.300"
                  as={BiSend}
                  cursor="pointer"
                  boxSize="30px"
                  _hover={{
                    color: "#2DDCB1",
                  }}
                />
              }
            />
          </Button>
        </InputGroup>
      </Flex>
    </form>
  );
};

export default ContainerSendMessage;
