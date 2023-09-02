import { Flex, FlexProps, keyframes } from "@chakra-ui/react";
import { ReactElement } from "react";

import { colors } from "@/styles/theme";

type CursorProps = FlexProps;

export default function Cursor({ ...props }: CursorProps): ReactElement {
  const blink = keyframes`from, to {
    border-color: transparent;
  }
  50% {
    border-color: ${colors.blue[500]};
  }`;
  const blinkAnimation = `1s ${blink} step-end infinite`;

  return (
    <Flex
      marginLeft={"2px"}
      height={{ base: "140px", md: "375px" }}
      border={"1.5px solid"}
      borderColor={"blue.500"}
      animation={blinkAnimation}
      {...props}
    />
  );
}
