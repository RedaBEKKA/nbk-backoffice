import React, { useState } from "react";
import { Flex, Heading, Button, Text, Stack } from "@chakra-ui/react";
import { BiShow } from "react-icons/bi";
import { FaFileExport } from "react-icons/fa";
import { AiFillFileAdd } from "react-icons/ai";
import Filter from "./filter";

export default function Header({ title, FilterForm, edit, Actions, isHeader }) {
  const [showfilter, setShowfilter] = useState(false);
  const handleShowfilter = () => {
    setShowfilter(!showfilter);
  };
  return (
    <>
      <>
        <Flex
          mb="4"
          justifyContent="space-between"
          direction={{ base: "column", md: "row" }}
          p="4"
          pt="16"
          // bg="linear-gradient(to right, #56ab2f, #a8e063)"
          bg="#2DDCB1"
          color="white"
          // h={showfilter && 'xs'}
        >
          <Heading>{title}</Heading>
          {!edit && (
            <Stack spacing={2} justify="flex-start">
              <Stack direction="column">
                {/* {Actions && <Actions></Actions>} */}
                <Button
                  leftIcon={<FaFileExport />}
                  _hover={{ bg: "gray.900" }}
                  _focus={{ bg: "gray.900" }}
                  bg="black"
                  color="white"
                >
                  Export
                </Button>
              </Stack>
              <Stack
                cursor="pointer"
                onClick={handleShowfilter}
                align="center"
                direction="row"
                fontSize="lg"
                fontWeight="bold"
              >
                <BiShow style={{ fontSize: 24 }}></BiShow>
                <Text>
                  {showfilter ? "masquer les filtres" : "afficher les filtres"}
                </Text>
              </Stack>
            </Stack>
          )}
        </Flex>
        {showfilter && <Filter FilterForm={FilterForm}></Filter>}
      </>
    </>
  );
}
