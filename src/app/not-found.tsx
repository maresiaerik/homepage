"use client";

import { Center, Text } from "@chakra-ui/react";
import { ReactElement } from "react";

export default function Error(): ReactElement {
  return (
    <Center width={"full"} height={"calc(100vh / 2)"}>
      <Text>The page you are looking at doesn&apos;t exist</Text>
    </Center>
  );
}
