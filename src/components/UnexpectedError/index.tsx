import { Center, Text } from "@chakra-ui/layout";
import { ReactElement } from "react";

export default function UnexpectedError(): ReactElement {
  return (
    <Center width={"100vw"} height={"100vh"}>
      <Text>Something unexpected happened. Please try again</Text>
    </Center>
  );
}
