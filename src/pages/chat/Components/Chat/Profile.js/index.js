import {
  Avatar,
  Box,
  Flex,
  Heading,
  Text,
  WrapItem,
  Skeleton,
  SkeletonCircle,
  Center,
} from "@chakra-ui/react";
import React from "react";
import UseGetUsers from "../../../Hooks/useGetUsers";

function Profile({ title, url, date, channel, subject }) {
  const { loading, user, getMessages, getUserSelected } = UseGetUsers(
    title,
    channel.channelId
  );
  const get = () => {
    getMessages(channel.channelId);
    getUserSelected(title);
  };
  console.log(user);
  return (
    <Center
      mt="2"
      cursor={"pointer"}
      _hover={{
        background: "#eee",
        color: "teal.500",
      }}
      onClick={get}
    >
      <Flex direction={"row"} justify={"space-around"} py="3" w="100%">
        <Flex direction={"row"} align="center" w="50%">
          <WrapItem>
            {loading ? (
              <SkeletonCircle size="8" mx={"2"} />
            ) : (
              <Avatar
                cursor="pointer"
                name={user?.firstname}
                src={url}
                size="sm"
                mx={"2"}
              />
            )}
          </WrapItem>
          <Flex mr="2" >
            {loading ? (
              <>
                <Skeleton m="2" w="100px" height="20px" />
                <Skeleton m="2" w="40px" height="10px" />
              </>
            ) : (
              <Flex align={"center"}>
                <Center  height="40px"  >
                  <Heading fontSize="sm">
                    {user?.firstname} {user?.lastname}
                  </Heading>
                </Center>

                <Box w={"100%"}  mx='2' >
                  {subject ? (
                    <Text fontSize="16px"  >
                      {subject.slice(0, 11) + "..."}
                    </Text>
                  ) : (
                    <Box fontSize="12px"  >
                      {"No subject"}
                    </Box>
                  )}
                </Box>
              </Flex>
            )}
          </Flex>
        </Flex>
        <Center w="25%">
          {date}
        </Center>
      </Flex>
    </Center>
  );
}

export default Profile;
