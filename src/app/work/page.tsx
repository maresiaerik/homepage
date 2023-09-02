"use client";

import { Flex, Link, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { ReactElement } from "react";

import LoadingSpinner from "@/components/LoadingSpinner";
import ProgrammingLanguagesUsed from "@/components/ProgrammingLanguageIcon";
import UnexpectedError from "@/components/UnexpectedError";
import { ProgrammingLanguage, Project, getWork } from "@/lib/entities/project";
import useFetchData from "@/lib/hooks/useFetchData";

export default function Work(): ReactElement {
  const { data, isError, isLoading } = useFetchData<Project[]>(getWork);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <UnexpectedError />;
  }

  const projectData = data!;

  return (
    <Flex width={"full"} height={"full"} justifyContent={"center"} alignItems={"center"}>
      <VStack spacing={"40px"} alignItems={"flex-start"} py={"60px"}>
        {projectData.map((project: Project, projectIdx: number) => (
          <VStack key={projectIdx} spacing={0} alignItems={"flex-start"}>
            <NextLink href={`/work/${project.id}`} passHref>
              <Link fontSize="3xl" color={"blue.900"} _hover={{ color: "blue.500" }}>
                {project.workName}
                <Text as={"span"} ml={"8px"}>
                  {project.languagesUsed?.map(
                    (language: ProgrammingLanguage, languageIdx: number) => (
                      <ProgrammingLanguagesUsed
                        programmingLanguage={language}
                        boxSize={7}
                        key={languageIdx}
                      />
                    ),
                  )}
                </Text>
              </Link>
            </NextLink>
            <Text color={"gray.400"}>{project.summary}</Text>
          </VStack>
        ))}
      </VStack>
    </Flex>
  );
}
