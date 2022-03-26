import React from "react";
import { ListItem, UnorderedList, Text } from "@chakra-ui/react";

export default function ErrorHandler({ res }) {
  if (res?.data?.StatusDescription?.errors) {
    return (
      <UnorderedList>
        {res.data.StatusDescription.errors.map((err, i) => (
          <ListItem key={i}>{err?.message}</ListItem>
        ))}
      </UnorderedList>
    );
  } else {
    return <Text>quelque chose s'est mal passé</Text>;
  }
}
