import { extendTheme } from "@chakra-ui/react";

export const colors = {
  grey: {
    10: "#B0BBBF",
  },
  blue: {
    50: "#89DAFB",
    100: "#089DD9",
    500: "#56CBF9",
    900: "#089DD9",
  },
  red: {
    50: "#FA9EB3",
    100: "#F52958",
    500: "#F52958",
    900: "#E90C40",
  },
  green: {
    50: "#A6F2BB",
    100: "#70EB93",
    500: "#4CE678",
    900: "#19B345",
  },
  yellow: {
    50: "#FFEDC2",
    100: "#FFDA85",
    500: "#FFC847",
    900: "#E09D00",
  },
};

export const breakpoints = {
  base: "0px",
  sm: "400px",
  md: "500px",
  xl: "650px",
  "2xl": "750px",
};

export const MAX_DESKTOP_WIDTH_PX = breakpoints.md;

const theme = extendTheme({
  fonts: {
    heading: `'Quicksand-variable', sans-serif`,
    body: `'Quicksand-variable', sans-serif`,
  },
  colors,
});

export default theme;
