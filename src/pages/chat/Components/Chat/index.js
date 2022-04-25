import { Box } from "@chakra-ui/react";
import React from "react";
import HeadChat from "./headChat/index.js";
import UseGetUsers from "pages/chat/Hooks/useGetUsers.js";
import { ItemsRender } from "./ItemsRender/index.js";
import Chatcontainer from "pages/chat/Hooks/ChatContainer.js";
import ChannelsProfiles from "../ChannelsChat/index.js";
import ContainerSendMessage from "../SendMessage/index.js";
function BackGroundMessage() {
  const { nombre, Messages, userSelected, LoadingUserSelected } = UseGetUsers();
  console.log("Messages----", Messages);
  const BackGround = [
    "linear(to-tr, gray.100, gray.400)",
    "linear(to-t, blue.200, teal.500)",
    "linear(to-b, gray.100, gray.100)",
  ];

  return (
    <Chatcontainer>
      {/* Left side Chat */}
      <ChannelsProfiles />

      {/* Right side Chat */}
      <Box h="83vh" bg="#eee" w="100%">
        <HeadChat
          userSelected={userSelected}
          LoadingUserSelected={LoadingUserSelected}
        />

        <Box w="100%" h="100%" bgGradient={BackGround} pos={"relative"}>
          {Messages?.map((i) => {
            return (
              <ItemsRender
                item={i}
                nombre={nombre}
                first={Messages[0].author}
                userSelected={userSelected}
              />
            );
          })}

          {/* Send messgae */}
          <ContainerSendMessage />
        </Box>
      </Box>
    </Chatcontainer>
  );
}

export default BackGroundMessage;
