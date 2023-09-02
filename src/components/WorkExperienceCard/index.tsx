"use client";

import { WorkExperience } from "@/lib/entities/work-experience";
import { HStack, Icon, Link, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { ReactElement } from "react";

import { getFormattedContentfulDate } from "@/lib/services/contentful";
import { FaMapMarkerAlt } from "react-icons/fa";
import ContentfulJsx from "../ContentfulJsX";
import ResumeItemCard from "../ResumeItemCard";

type WorkExperienceCardProps = WorkExperience;

export default function WorkExperienceCard(props: WorkExperienceCardProps): ReactElement {
  return (
    <ResumeItemCard metaData={<WorkExperienceMetaData {...props} />}>
      <WorkExperienceTitle role={props.role} workType={props.workType} />
      <ContentfulJsx
        richTextDocument={props.roleDescription}
        alignItems={"flex-start"}
        textAlign={"left"}
      />
    </ResumeItemCard>
  );
}

type WorkExperienceMetaData = Omit<
  WorkExperienceCardProps,
  "roleDescription" | "id" | "role" | "workType"
>;

function WorkExperienceMetaData({
  companyName,
  location,
  startDate,
  companyImage,
  companyUrl,
  endDate,
}: WorkExperienceMetaData): ReactElement {
  const parsedImageUrl = companyImage?.fields.file?.url?.toString().split("//")[1];

  return (
    <VStack width={"full"} alignItems={"center"}>
      {parsedImageUrl !== undefined && (
        <Image width={80} height={80} alt={"Company logo"} src={`https://${parsedImageUrl}`} />
      )}
      <WorkExperienceCompanyName companyName={companyName} companyUrl={companyUrl} />
      <HStack spacing={"4px"}>
        <Text>{getFormattedContentfulDate(startDate)}</Text>
        <Text>-</Text>
        {endDate !== undefined && <Text>{getFormattedContentfulDate(endDate)}</Text>}
        <Text></Text>
      </HStack>
      <HStack color={"gray.400"}>
        <Icon as={FaMapMarkerAlt} />
        <Text color={"gray.400"}>{location}</Text>
      </HStack>
    </VStack>
  );
}

function WorkExperienceCompanyName({
  companyName,
  companyUrl,
}: {
  companyName: WorkExperience["companyName"];
  companyUrl: WorkExperience["companyUrl"];
}): ReactElement {
  if (companyUrl !== undefined) {
    return (
      <NextLink href={companyUrl} style={{ display: "flex" }} passHref legacyBehavior>
        <Link color={"blue.500"} fontSize={"2xl"} textAlign={"center"}>
          {companyName}
        </Link>
      </NextLink>
    );
  }

  return (
    <Text as={"h1"} fontSize={"2xl"} textAlign={"center"}>
      {companyName}
    </Text>
  );
}

type WorkExperienceTitleProps = Pick<WorkExperienceCardProps, "role" | "workType">;

function WorkExperienceTitle({ role, workType }: WorkExperienceTitleProps): ReactElement {
  return (
    <VStack width={"full"} spacing={0}>
      <Text as={"h2"} fontWeight={600} fontSize={"xl"}>
        {role}
      </Text>
      <Text
        as={"span"}
        color={"blue.900"}
        fontSize={"xs"}
        fontWeight={600}
        fontFamily={"monospace"}
      >
        {workType}
      </Text>
    </VStack>
  );
}
