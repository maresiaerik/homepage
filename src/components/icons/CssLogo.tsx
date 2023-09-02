import { Icon, IconProps } from "@chakra-ui/icon";
import { ReactElement } from "react";

export default function CssLogo({ ...props }: IconProps): ReactElement {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800.000000 800.000000"
      preserveAspectRatio="xMidYMid meet"
      boxSize={10}
      {...props}
    >
      <g
        transform="translate(0.000000,800.000000) scale(0.100000,-0.100000)"
        fill="#1F84F6"
        stroke="none"
      >
        <path
          d="M480 7968 c1 -66 636 -7158 642 -7164 4 -3 652 -185 1441 -404 l1434
   -398 1438 399 c791 219 1440 401 1443 403 5 6 641 7105 642 7164 l0 32 -3520
   0 -3520 0 0 -32z m5730 -1452 c0 -8 -36 -418 -80 -912 -45 -495 -134 -1499
   -200 -2233 -65 -734 -123 -1337 -127 -1342 -10 -9 -1779 -499 -1804 -499 -14
   0 -1422 387 -1764 485 l-50 14 -58 663 c-32 365 -61 678 -64 696 l-5 32 445 0
   445 0 5 -32 c3 -18 18 -177 33 -354 l28 -320 491 -133 490 -132 490 132 c270
   72 491 132 492 133 4 3 103 1129 100 1132 -2 2 -690 7 -1530 10 -1001 5 -1527
   11 -1527 17 0 14 -68 782 -74 830 l-4 37 1609 0 c1352 0 1609 2 1609 14 0 19
   68 793 74 844 l6 42 -1686 0 c-1339 0 -1685 3 -1689 13 -2 6 -20 194 -40 417
   -19 223 -37 417 -40 433 l-4 27 2214 0 c1888 0 2215 -2 2215 -14z"
        />
      </g>
    </Icon>
  );
}
