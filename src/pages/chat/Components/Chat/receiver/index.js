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

function Receiver({ item,first }) {
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

 
  const bg = item?.author === first  ? 'a' :'b'
  const bg1 = item?.author ===  first ? '#ddd' :'#eee'


  return (
    <Box display="flex" alignItems="center" mb={2}>
      {LoadingUserSelected ? (
        <SkeletonCircle size="8" ml="7" mt="15" />
      ) : (
        <Avatar
          cursor="pointer"
          name={bg}
          src="https://bit.ly/tioluwani-kolawole"
          size="sm"
          ml="7"
          mt="15"
        />
      )}

      {LoadingUserSelected ? (
        <>
          <Skeleton w="300px" height="25px" ml="7" mt="15" borderRadius={20} />
        </>
      ) : (
        <Flex
          bg={bg1}
          boxShadow={"md"}
          borderRadius={20}
          px={3}
          h="30px"
          justifyContent={"center"}
          direction={"column"}
          alignItems="center"
          ml="6"
          mt="15"
        >
          <Text fontSize='md'>{item.body}</Text>
        </Flex>
      )}
    </Box>
  );
}

export default Receiver;
