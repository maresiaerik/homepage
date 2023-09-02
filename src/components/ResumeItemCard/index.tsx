import { Flex, VStack } from "@chakra-ui/react";
import { PropsWithChildren, ReactElement } from "react";

type ResumeItemCardProps = {
  metaData: ReactElement;
};

export default function ResumeItemCard({
  metaData,
  children,
}: PropsWithChildren<ResumeItemCardProps>): ReactElement {
  return (
    <Flex
      flexDirection={{ base: "column", md: "row" }}
      width={"full"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <VStack width={{ base: "100%", md: "30%" }}>{metaData}</VStack>
      <VStack width={{ base: "100%", md: "60%" }} px={"10px"}>
        {children}
      </VStack>
    </Flex>
  );
}
