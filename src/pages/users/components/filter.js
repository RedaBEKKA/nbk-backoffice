import React from "react";
import {
  Select,
  FormControl,
  FormLabel,
  Button,
  Stack,
  Box,
  Input,
} from "@chakra-ui/react";
import useFilter from "../hooks/useFilter";

export default function Filter() {
  const { register, handleSubmit, isSubmitting, onSubmit } = useFilter();

  const queries = [
    "userId",
    "userTypeId",
    "userTag",
    "specifiedUSPerson",
    "controllingPersonType",
    "employeeType",
    "email",
    "name",
    "legalName",
    "parentUserId",
  ];
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction={{ base: "column", md: "row" }} flexWrap="wrap">
        {queries.map((query, i) => (
          <FormControl h="100%" flex={"1 0 21%"} key={i}>
            <FormLabel m="2">{query}</FormLabel>
            <Input
              m="2"
              placeholder={query}
              variant="filled"
              {...register(query)}
            ></Input>
          </FormControl>
        ))}
      </Stack>
      <Stack direction={{ base: "column", md: "row" }} flexWrap="wrap">
        <FormControl h="100%" flex={"1 0 21%"}>
          <FormLabel>userStatus</FormLabel>
          <Select variant="filled" {...register("userStatus")}>
            <option value={""}>none</option>
            <option value="validated">validé</option>
            <option value="pending">en attendant</option>
            <option value="canceled">annulé</option>
          </Select>
        </FormControl>

        <FormControl flex={"1 0 21%"}>
          <FormLabel>sortBy</FormLabel>
          <Select variant="filled" {...register("sortBy")}>
            <option value={""}>none</option>
            <option value={"createdDateFrom"}>createdDateFrom</option>
            <option value={"userId"}>userId</option>
            <option value={"userTypeId"}>walletTypeId</option>
            <option value={"updatedDateTo"}>updatedDateTo</option>
            <option value={"updatedDateFrom"}>updatedDateFrom</option>
          </Select>
        </FormControl>
        <FormControl flex={"1 0 21%"}>
          <FormLabel>sortOrder</FormLabel>
          <Select variant="filled" {...register("sortOrder")}>
            <option value={""}>none</option>
            <option value={"DESC"}>DESC</option>
            <option value={"ASC"}>ASC</option>
          </Select>
        </FormControl>
      </Stack>

      <Box m="4" display="flex" justifyContent="flex-end">
        <Button
          _hover={{ bg: "gray.900" }}
          _focus={{ bg: "gray.900" }}
          bg="black"
          color="white"
          isLoading={isSubmitting}
          isDisabled={isSubmitting}
          type="submit"
        >
          apply
        </Button>
      </Box>
    </form>
  );
}
