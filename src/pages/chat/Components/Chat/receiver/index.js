import {
  Avatar,
  Box,
  Flex,
  Skeleton,
  SkeletonCircle,
  Stack,
  Text,
} from "@chakra-ui/react";
import UseGetUsers from "pages/chat/Hooks/useGetUsers";
import React, { useEffect } from "react";
import useStore from "store";

function Receiver({ item }) {
  const LoadingUserSelected = useStore(
    (state) => state.channels.LoadingUserSelected
  );
  const userSelected = useStore((state) => state.channels.userSelected);
  // console.log("item", );
  const convert = (date) => {
    let app = parseInt(date.replace(/[:\s\/\.-]/g, ""));
    return app;
  };
  // useEffect(() => {
  //   convert(item.createdAt)
  // }, [])

  const { user } = UseGetUsers();

  return (
    
      <Stack direction={"row"} align="flex-end" bg='#eee' m={5}  >
        {LoadingUserSelected ? (
          <SkeletonCircle size="8" />
        ) : (
          <Avatar
            cursor="pointer"
            name={userSelected.firstname}
            src="https://bit.ly/tioluwani-kolawole"
            size="sm"
            m="5"
          />
        )}
   

        {LoadingUserSelected ? (
          <>
            <Skeleton m="2" w="100px" height="35px" />
          </>
        ) : (
            <Flex
              bg="#ccc"
              boxShadow={"md"}
              borderRadius={20}
              px={3}
              h="35px"
              justifyContent={"center"}
              direction={"column"}
              alignItems="center"
              mb={5}
            >
              <Text>{item.body}</Text>
            </Flex>
        )}
      </Stack>
    
  );
}

export default Receiver;
