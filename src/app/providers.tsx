"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { PropsWithChildren, ReactElement } from "react";

import Script from "next/script";
import theme from "../styles/theme";

export default function ParentProvider({ children }: PropsWithChildren): ReactElement {
  return (
    <CacheProvider>
      <Analytics />
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}

function Analytics(): ReactElement {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-HK4JRC261P" />
      <Script id="google-analytics">
        {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
       
         gtag('config', 'G-HK4JRC261P');
          `}
      </Script>
    </>
  );
}
