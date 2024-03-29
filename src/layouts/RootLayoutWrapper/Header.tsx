"use client";

import LayoutContext from "@/lib/contexts/LayoutContext";
import useViewport from "@/lib/hooks/useViewport";
import { colors } from "@/styles/theme";
import { Flex, HStack, Icon, Link, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren, useContext, type ReactElement } from "react";
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
      <NavBarLinkWrapper onClick={onClick}>
        <NextLink href={"/"} passHref legacyBehavior>
          <Link
            fontSize={"inherit"}
            color={getLinkColorForPath("")}
            _hover={{ color: getLinkColorForPathOnHover("") }}
          >
            welcome
          </Link>
        </NextLink>
      </NavBarLinkWrapper>
      <NavBarLinkWrapper onClick={onClick}>
        <NextLink href={"/work"} passHref legacyBehavior>
          <Link
            fontSize={"inherit"}
            color={getLinkColorForPath("work")}
            _hover={{ color: getLinkColorForPathOnHover("work") }}
          >
            work
          </Link>
        </NextLink>
      </NavBarLinkWrapper>
      <NavBarLinkWrapper onClick={onClick}>
        <NextLink href={"/resume"} passHref legacyBehavior>
          <Link
            fontSize={"inherit"}
            color={getLinkColorForPath("resume")}
            _hover={{ color: getLinkColorForPathOnHover("resume") }}
          >
            resume
          </Link>
        </NextLink>
      </NavBarLinkWrapper>
      <NavBarLinkWrapper onClick={onClick}>
        <NextLink href={"/blog"} passHref legacyBehavior>
          <Link
            fontSize={"inherit"}
            color={getLinkColorForPath("blog")}
            _hover={{ color: getLinkColorForPathOnHover("blog") }}
          >
            blog
          </Link>
        </NextLink>
      </NavBarLinkWrapper>
      <NavBarLinkWrapper onClick={onClick}>
        <NextLink href={"/about"} passHref onClick={onClick} legacyBehavior>
          <Link
            fontSize={"inherit"}
            color={getLinkColorForPath("about")}
            _hover={{ color: getLinkColorForPathOnHover("about") }}
          >
            about
          </Link>
        </NextLink>
      </NavBarLinkWrapper>
    </>
  );
}

function NavBarLinkWrapper({
  onClick,
  children,
}: PropsWithChildren<{ onClick?: () => void }>): ReactElement {
  return <Flex onClick={onClick}>{children}</Flex>;
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
