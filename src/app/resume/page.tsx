"use client";

import LoadingSpinner from "@/components/LoadingSpinner";
import UnexpectedError from "@/components/UnexpectedError";
import { WorkExperience } from "@/lib/entities/work-experience";
import useFetchResumeData from "@/lib/hooks/useFetchResumeData";

import EducationCard from "@/components/EducationCard";
import WorkExperienceCard from "@/components/WorkExperienceCard";
import { EducationItem, EducationItemResponse } from "@/lib/entities/education";
import { Skill, Skills } from "@/lib/entities/skills";
import {
  Center,
  CircularProgress,
  CircularProgressLabel,
  Divider,
  Flex,
  Icon,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { AiOutlineDownload } from "react-icons/ai";

export default function Resume(): ReactElement {
  const { data, isError, isLoading } = useFetchResumeData();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <UnexpectedError />;
  }

  const { workExperience, education, skills } = data!;

  return (
    <VStack width={"full"} height={"full"}>
      <DownloadResumeAsPdf />
      <Center width={"full"}>
        <VStack width={{ base: "100%", md: "70%" }} alignItems={"center"}>
          <ListOfSkills skills={skills} />
          <ListOfWorkExperience workExperience={workExperience} />
          <ListOfEducation education={education} />
        </VStack>
      </Center>
    </VStack>
  );
}

function DownloadResumeAsPdf(): ReactElement {
  return (
    <Flex width={"full"} justifyContent={"flex-start"}>
      <Link
        href={"/files/maresia-cv.pdf"}
        target={"_blank"}
        download={"maresia-cv.pdf"}
        display={"flex"}
        alignItems={"center"}
      >
        PDF format
        <Icon as={AiOutlineDownload} ml={"8px"} />
      </Link>
    </Flex>
  );
}

function ListOfSkills({ skills }: { skills: Skills }): ReactElement {
  return (
    <SimpleGrid
      columns={{ base: 4, md: 8 }}
      spacing={{ base: "15px", md: "10px" }}
      mb={"50px"}
      mt={{ base: "50px", md: 0 }}
    >
      {Object.keys(skills).map((skillName: keyof Skill) => (
        <VStack key={skillName} alignItems={"center"}>
          <Text fontSize={{ base: "xs", xl: "md" }}>{skillName}</Text>
          <CircularProgress value={skills[skillName]} color={"blue.500"} thickness={"5px"}>
            <CircularProgressLabel>{skills[skillName]}%</CircularProgressLabel>
          </CircularProgress>
        </VStack>
      ))}
    </SimpleGrid>
  );
}

function ListOfWorkExperience({
  workExperience,
}: {
  workExperience: WorkExperience[];
}): ReactElement {
  return (
    <VStack spacing={"80px"}>
      {workExperience.map((item: WorkExperience, itemIdx: number) => (
        <VStack width={"full"} key={item.id} spacing={"80px"}>
          <WorkExperienceCard
            id={item.id}
            companyName={item.companyName}
            companyUrl={item.companyUrl}
            companyImage={item.companyImage}
            role={item.role}
            roleDescription={item.roleDescription}
            workType={item.workType}
            location={item.location}
            startDate={item.startDate}
            endDate={item.endDate}
          />
          {itemIdx < workExperience.length - 1 && <Divider width={"80%"} />}
        </VStack>
      ))}
    </VStack>
  );
}

function ListOfEducation({ education }: { education: EducationItem }): ReactElement {
  return (
    <VStack width={"full"} spacing={"80px"} my={"80px"}>
      <Text
        as={"h1"}
        color={"blue.900"}
        fontWeight={"600"}
        fontSize={"3xl"}
        fontFamily={"monospace"}
      >
        Education
      </Text>
      <VStack width={"full"} spacing={"80px"} mb={"80px"}>
        {education.universities.map((university: EducationItemResponse, universityIdx: number) => (
          <VStack width={"full"} key={university.id} spacing={"80px"}>
            <EducationCard {...university} />
            {universityIdx < education.universities.length - 1 && <Divider width={"80%"} />}
          </VStack>
        ))}
      </VStack>
      <VStack width={"full"} spacing={"80px"}>
        <Text
          as={"h3"}
          fontWeight={"600"}
          color={"blue.900"}
          fontSize={"2xl"}
          fontFamily={"monospace"}
        >
          Certificates
        </Text>
        {education.certificates.map(
          (certificate: EducationItemResponse, certificateIdx: number) => (
            <VStack width={"full"} key={certificate.id} spacing={"80px"}>
              <EducationCard {...certificate} />
              {certificateIdx < education.certificates.length - 1 && <Divider width={"80%"} />}
            </VStack>
          ),
        )}
      </VStack>
    </VStack>
  );
}
