"use-client";

import { Flex } from "@chakra-ui/react";
import { PropsWithChildren, ReactElement } from "react";

export default function Main({ children }: PropsWithChildren): ReactElement {
  return (
    <Flex padding={"50px"} height={"full"} width={"full"}>
      {children}
    </Flex>
  );
}
