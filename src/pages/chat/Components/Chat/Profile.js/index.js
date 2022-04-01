import {
  Avatar,
  Box,
  Flex,
  Heading,
  Text,
  WrapItem,
  Skeleton,
  SkeletonCircle,
} from "@chakra-ui/react";
import React from "react";
import dayjs from "dayjs";
import UseGetUsers from "../../../Hooks/useGetUsers";

function Profile({ title, url, date }) {
  const { loading, user } = UseGetUsers(title);
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
            {loading ? (
              <SkeletonCircle size="8" />
            ) : (
              <Avatar
                cursor="pointer"
                name={user?.firstname}
                src={url}
                size="sm"
              />
            )}
          </WrapItem>
          <Box px={3}>
            {loading ? (
              <>
                <Skeleton m="2" w="100px" height="20px" />
                <Skeleton m="2" w="100px" height="10px" />
              </>
            ) : (
              <>
                <Heading fontSize="sm">{user?.firstname}</Heading>
                <Text fontSize="xs">Lorem ipsu m lorem lorem</Text>
              </>
            )}
          </Box>
        </Flex>
        <Box px={"5"}>
          <Text fontSize="sm">{date}</Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default Profile;