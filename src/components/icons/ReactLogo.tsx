import { Icon, IconProps } from "@chakra-ui/icon";
import { ReactElement } from "react";

export default function ReactLogo({ ...props }: IconProps): ReactElement {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2300.000000 2000.000000"
      preserveAspectRatio="xMidYMid meet"
      boxSize={10}
      {...props}
    >
      <g
        transform="translate(0.000000,2000.000000) scale(0.100000,-0.100000)"
        fill="#F000"
        stroke="none"
      ></g>
    </Icon>
  );
}
