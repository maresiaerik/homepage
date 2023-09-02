"use client";

import { Flex, HStack, Icon, Link, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { ReactElement } from "react";
import { MdLocationOn } from "react-icons/md";

import ContentfulJsx from "@/components/ContentfulJsX";
import LoadingSpinner from "@/components/LoadingSpinner";
import UnexpectedError from "@/components/UnexpectedError";
import { About, getAbout } from "@/lib/entities/about";
import useFetchData from "@/lib/hooks/useFetchData";
import NextLink from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function AboutPage(): ReactElement | null {
  const { data, isError, isLoading } = useFetchData<About>(getAbout);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <UnexpectedError />;
  }

  const aboutData = data!;

  return (
    <Flex flexDirection={{ base: "column-reverse", xl: "row" }} width={"full"} height={"full"}>
      <Flex width={{ base: "100%", xl: "50%" }} position={"relative"}>
        <Image
          alt="Profile picture"
          src={`https:${aboutData.profilePicture.fields.file?.url}`}
          width={450}
          height={500}
          style={{
            objectFit: "contain",
          }}
        />
      </Flex>
      <VStack
        width={"full"}
        height={"full"}
        padding={{ base: 1, xl: 8 }}
        marginBottom={{ base: "20px", xl: 0 }}
      >
        <VStack width={{ base: "100%", xl: "50%" }} justifyContent={"flex-start"} spacing={"20px"}>
          {aboutData.description.content.map((content, contentIdx) => (
            <ContentfulJsx richTextDocument={content} key={contentIdx} alignItems={"flex-start"} />
          ))}
          <BioLinks currentLocation={aboutData.currentLocation} />
        </VStack>
      </VStack>
    </Flex>
  );
}

function BioLinks({
  currentLocation,
}: {
  currentLocation: About["currentLocation"];
}): ReactElement {
  return (
    <HStack justifyContent={"flex-start"} width={"full"} spacing={"10px"} alignItems={"center"}>
      <NextLink
        href={"https://www.linkedin.com/in/maresiaerik/"}
        target={"_blank"}
        passHref
        legacyBehavior
      >
        <Link display={"flex"}>
          <Icon as={AiFillLinkedin} color={"linkedin.700"} boxSize={7} />
        </Link>
      </NextLink>
      <NextLink href={"https://github.com/maresiaerik/"} target={"_blank"} passHref legacyBehavior>
        <Link display={"flex"}>
          <Icon as={AiFillGithub} boxSize={7} />
        </Link>
      </NextLink>
      <HStack width={"full"} justifyContent={"flex-start"} color={"gray.400"} alignItems={"center"}>
        <Icon as={MdLocationOn} boxSize={5} />
        <Text>{currentLocation}</Text>
      </HStack>
    </HStack>
  );
}
