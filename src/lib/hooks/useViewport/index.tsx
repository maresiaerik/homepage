"use client";

import { MAX_DESKTOP_WIDTH_PX } from "@/styles/theme";
import { useMediaQuery } from "@chakra-ui/react";

type Viewport = {
  isMobile: boolean;
};

export default function useViewport(): Viewport {
  const [isMobile]: boolean[] = useMediaQuery(
    `screen and (min-width: 1px) and (max-width: ${MAX_DESKTOP_WIDTH_PX})`,
    {
      ssr: false,
    },
  );

  return {
    isMobile,
  };
}
