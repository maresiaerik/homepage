import { HStack, Icon, Link, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { ReactElement } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

import { EducationItemResponse } from "@/lib/entities/education";
import { getFormattedContentfulDate } from "@/lib/services/contentful";

type EducationMetaProps = Omit<EducationItemResponse, "description" | "isCertificate">;

export default function EducationMeta(props: EducationMetaProps): ReactElement {
  return (
    <VStack width="full">
      <EducationInstitutionName universityName={props.universityName} url={props.url} />
      <HStack spacing={"4px"}>
        <Text>{getFormattedContentfulDate(props.startDate)}</Text>
        <Text>-</Text>
        {props.endDate !== undefined && <Text>{getFormattedContentfulDate(props.endDate)}</Text>}
        <Text></Text>
      </HStack>
      <HStack color={"gray.400"}>
        <Icon as={FaMapMarkerAlt} />
        <Text color={"gray.400"}>{props.location}</Text>
      </HStack>
    </VStack>
  );
}

type EducationInstitutionNameProps = Pick<EducationMetaProps, "universityName" | "url">;

function EducationInstitutionName({
  universityName,
  url,
}: EducationInstitutionNameProps): ReactElement {
  if (url !== undefined) {
    return (
      <NextLink href={url} style={{ display: "flex" }} passHref legacyBehavior>
        <Link color={"blue.500"} fontSize={"2xl"} textAlign={"center"}>
          {universityName}
        </Link>
      </NextLink>
    );
  }

  return (
    <Text as={"h1"} fontSize={"2xl"} textAlign={"center"}>
      {universityName}
    </Text>
  );
}
