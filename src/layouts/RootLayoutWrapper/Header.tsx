"use client";

import { Flex, HStack, Icon, Link, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { useContext, type ReactElement } from "react";
import { usePathname } from "next/navigation";
import { colors } from "@/styles/theme";
import useViewport from "@/lib/hooks/useViewport";
import LayoutContext from "@/lib/contexts/LayoutContext";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const HEADER_HEIGHT_PX = "100px";

export default function Header(): ReactElement {
  return (
    <HStack
      width={"full"}
      height={HEADER_HEIGHT_PX}
      justifyContent={"space-between"}
      px={"50px"}
      alignItems={"center"}
    >
      <Flex flexDirection={{ base: "column", md: "row" }} alignItems={"center"}>
        <Text fontWeight={"700"} fontSize={"2xl"} marginRight={{ md: "10px" }}>
          Erik Maresia
        </Text>
        <Text fontFamily={"monospace"}>Software developer</Text>
      </Flex>
      <Navbar />
    </HStack>
  );
}

function Navbar(): ReactElement {
  const { isMobile } = useViewport();
  if (isMobile) {
    return <MobileNavBar />;
  }

  return <DesktopNavBar />;
}

function MobileNavBar(): ReactElement {
  const { openMobileMenu } = useContext(LayoutContext);

  return <Icon as={AiOutlineMenu} onClick={openMobileMenu} boxSize={6} cursor={"pointer"} />;
}

function DesktopNavBar(): ReactElement {
  return (
    <HStack spacing={"20px"} fontFamily={"monospace"}>
      <NavBarLinks />
    </HStack>
  );
}

function NavBarLinks({ onClick }: { onClick?: () => void }): ReactElement {
  const pathname = usePathname();

  const isPathNameActive = (linkPathName: string): boolean => {
    return pathname.split("/")[1] === linkPathName;
  };

  const getLinkColorForPath = (pathName: string): string =>
    isPathNameActive(pathName) ? colors.blue[500] : colors.grey[10];

  const getLinkColorForPathOnHover = (pathName: string): string =>
    isPathNameActive(pathName) ? colors.grey[10] : colors.blue[500];

  return (
    <>
      <NextLink href={"/"} passHref onClick={onClick}>
        <Link
          fontSize={"inherit"}
          color={getLinkColorForPath("")}
          _hover={{ color: getLinkColorForPathOnHover("") }}
        >
          welcome
        </Link>
      </NextLink>
      <NextLink href={"/work"} passHref onClick={onClick}>
        <Link
          fontSize={"inherit"}
          color={getLinkColorForPath("work")}
          _hover={{ color: getLinkColorForPathOnHover("work") }}
        >
          work
        </Link>
      </NextLink>
      <NextLink href={"/resume"} passHref onClick={onClick}>
        <Link
          fontSize={"inherit"}
          color={getLinkColorForPath("resume")}
          _hover={{ color: getLinkColorForPathOnHover("resume") }}
        >
          resume
        </Link>
      </NextLink>
      <NextLink href={"/about"} passHref onClick={onClick}>
        <Link
          fontSize={"inherit"}
          color={getLinkColorForPath("about")}
          _hover={{ color: getLinkColorForPathOnHover("about") }}
        >
          about
        </Link>
      </NextLink>
    </>
  );
}

export function FullScreenNavBar(): ReactElement {
  const { closeMobileMenu } = useContext(LayoutContext);

  return (
    <VStack width={"100vw"} height={"100vh"} zIndex={500} alignItems={"center"} padding={"50px"}>
      <Flex width={"full"} justifyContent={"flex-end"}>
        <Icon as={AiOutlineClose} onClick={closeMobileMenu} boxSize={6} cursor={"pointer"} />
      </Flex>
      <Flex width={"full"} height={"full"} justifyContent={"center"} alignItems={"center"}>
        <VStack
          width={"full"}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={"30px"}
          fontSize={"xl"}
        >
          <NavBarLinks onClick={closeMobileMenu} />
        </VStack>
      </Flex>
    </VStack>
  );
}
