"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { PropsWithChildren, ReactElement } from "react";

import theme from "../styles/theme";

export default function ParentProvider({ children }: PropsWithChildren): ReactElement {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
