import { Text, VStack } from "@chakra-ui/react";
import { ReactElement } from "react";

import { EducationItemResponse } from "@/lib/entities/education";

type EducationTitleProps = Pick<EducationItemResponse, "degree">;

export default function EducationTitle({ degree }: EducationTitleProps): ReactElement {
  return (
    <VStack width={"full"} spacing={0} alignItems={"center"}>
      <Text as={"h2"} fontWeight={600} fontSize={"xl"} textAlign={"center"}>
        {degree}
      </Text>
    </VStack>
  );
}
