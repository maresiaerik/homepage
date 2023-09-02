"use client";

import { Flex, HStack, Icon, Link, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { useParams } from "next/navigation";
import { ReactElement } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

import ContentfulJsx from "@/components/ContentfulJsX";
import LoadingSpinner from "@/components/LoadingSpinner";
import ProgrammingLanguageIcon from "@/components/ProgrammingLanguageIcon";
import UnexpectedError from "@/components/UnexpectedError";
import { ProgrammingLanguage, Project, getWorkById } from "@/lib/entities/project";
import useFetchData from "@/lib/hooks/useFetchData";

export default function WorkItem(): ReactElement {
  const params = useParams();
  const workItemId = params.item as string;
  const { data, isError, isLoading } = useFetchData<Project>(() => getWorkById(workItemId));

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <UnexpectedError />;
  }

  const projectData = data!;

  return (
    <Flex width={"full"} height={"full"} justifyContent={"center"}>
      <VStack
        width={{ base: "100%", md: "60%" }}
        height={"full"}
        alignItems={"left"}
        spacing={"30px"}
      >
        <HStack>
          <Text as={"h1"} fontSize={"5xl"} fontWeight={600}>
            {projectData.workName}
            <ProgrammingLanguagesUsed languagesUsed={projectData.languagesUsed} />
          </Text>
        </HStack>
        <VStack alignItems={"flex-start"} spacing={"10px"}>
          <HostedUrl hostedUrl={projectData.hostedUrl} />
          <ProjectLink link={projectData.link} />
        </VStack>
        <Flex width={"full"} height={"full"}>
          <ContentfulJsx richTextDocument={projectData.description} alignItems={"flex-start"} />
        </Flex>
      </VStack>
    </Flex>
  );
}

function HostedUrl({ hostedUrl }: { hostedUrl: Project["hostedUrl"] }): ReactElement | null {
  if (!hostedUrl) {
    return null;
  }

  return (
    <HStack>
      <NextLink href={hostedUrl} target={"_blank"} passHref legacyBehavior>
        <Flex alignItems={"center"}>
          <Icon as={FiExternalLink} mr={"8px"} />
          <Link color={"blue.500"}>This project can also be seen in its hosted environment</Link>
        </Flex>
      </NextLink>
    </HStack>
  );
}

function ProjectLink({ link }: { link: Project["link"] }): ReactElement | null {
  if (link === undefined || link.length === 0) {
    return null;
  }

  return (
    <HStack>
      <NextLink href={link} passHref legacyBehavior>
        <Flex alignItems={"center"}>
          <Icon as={AiFillGithub} mr={"8px"} />
          <Link color={"blue.500"}>Github Repository</Link>
        </Flex>
      </NextLink>
    </HStack>
  );
}

function ProgrammingLanguagesUsed({
  languagesUsed,
}: {
  languagesUsed: Project["languagesUsed"];
}): ReactElement | null {
  return (
    <Text as={"span"} marginLeft={"10px"}>
      {languagesUsed?.map((language: ProgrammingLanguage, languageIdx: number) => (
        <ProgrammingLanguageIcon key={languageIdx} programmingLanguage={language} />
      ))}
    </Text>
  );
}
