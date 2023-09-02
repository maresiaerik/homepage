"use client";

import { Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { ReactElement, useEffect, useState } from "react";

import Cursor from "@/components/Cursor";
import useTypewriter from "@/lib/hooks/useTypewriter";

export default function Welcome(): ReactElement {
  return (
    <VStack width={"full"} height={"full"}>
      <TypewriterWelcomeText />
      <IntroductionText />
    </VStack>
  );
}

function IntroductionText(): ReactElement {
  return (
    <Flex width={"full"} justifyContent={"flex-start"} alignItems={"center"}>
      <VStack width={{ base: "100%", lg: "70%" }} alignItems={"flex-start"}>
        <Heading fontWeight={"500"} fontSize={{ base: "35px", md: "45px" }} mb={"10px"}>
          <Text as={"span"}>I&apos;m Erik.</Text>
          &nbsp;
          <Text as={"span"} color={"blue.500"}>
            Nice to meet you!
          </Text>
        </Heading>
        <Link href={"/resume"}>
          <Button
            borderRadius={0}
            fontSize={{ base: "18px", md: "25px" }}
            background={"white"}
            color={"blue.500"}
            border={"2px solid"}
            fontFamily={"monospace"}
            maxWidth={"450px"}
            height={{ base: "100px", md: "120px" }}
            fontWeight={"500"}
            whiteSpace={"normal"}
            padding={"50px"}
            _hover={{
              background: "blue.500",
              color: "white",
            }}
          >
            CHECK OUT MY RESUME
          </Button>
        </Link>
      </VStack>
    </Flex>
  );
}

function TypewriterWelcomeText(): ReactElement {
  const [shouldCursorRender, setShouldCursorRender] = useState(true);
  const { text, isDone } = useTypewriter(["CIAO", "MOI", "HI!"]);

  useEffect(() => {
    let killCursorTimeout: NodeJS.Timeout;

    if (isDone) {
      killCursorTimeout = setTimeout(() => {
        setShouldCursorRender(false);
      }, 5000);
    }

    return () => clearTimeout(killCursorTimeout);
  }, [isDone]);

  return (
    <Flex width={"full"} height={{ base: "170px", md: "375px" }}>
      <Text
        as={"h1"}
        fontFamily={"revert"}
        fontSize={{ base: "90px", md: "250px" }}
        fontWeight={"800"}
      >
        {text}
      </Text>
      {shouldCursorRender && <Cursor />}
    </Flex>
  );
}
