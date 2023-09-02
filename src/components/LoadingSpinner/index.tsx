import { Center, Spinner } from "@chakra-ui/react";
import { ReactElement } from "react";

export default function LoadingSpinner(): ReactElement {
  return (
    <Center width={"100vw"} height={"100vh"}>
      <Spinner size="xl" color="blue.500" />;
    </Center>
  );
}
