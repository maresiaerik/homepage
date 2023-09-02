"use client";

import {
  Link as ChakraLink,
  Text as ChakraText,
  Divider,
  Flex,
  ListItem,
  StackProps,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import NextLink from "next/link";
import { PropsWithChildren, ReactElement, ReactNode } from "react";

const Link = ({ uri, children }: PropsWithChildren<{ uri: string }>): ReactElement => (
  <NextLink href={uri} passHref legacyBehavior>
    <ChakraLink color={"blue.900"}>{children}</ChakraLink>
  </NextLink>
);

const options = {
  renderMark: {
    [MARKS.CODE]: (text: ReactNode): ReactElement => (
      <ChakraText color={"red.500"} fontFamily={"monospace"} as={"span"}>
        {text}
      </ChakraText>
    ),
  },
  renderNode: {
    [BLOCKS.DOCUMENT]: (_: any, children: ReactNode): ReactElement => (
      <VStack
        width={"full"}
        height={"full"}
        alignItems={"inherit"}
        justifyContent={"inherit"}
        textAlign={"inherit"}
      >
        {children}
      </VStack>
    ),
    [BLOCKS.HR]: (): ReactElement => <Divider borderWidth={"1px solid"} />,
    [BLOCKS.EMBEDDED_ENTRY]: (_: any, children: ReactNode): ReactElement => (
      <Flex width={"40px"}>{children}</Flex>
    ),
    [BLOCKS.EMBEDDED_RESOURCE]: (_: any, children: ReactNode): ReactElement => (
      <Flex width={"40px"}>{children}</Flex>
    ),
    [BLOCKS.HEADING_1]: (_: any, children: ReactNode): ReactElement => (
      <ChakraText as={"h1"} fontWeight={600} fontSize={"4xl"}>
        {children}
      </ChakraText>
    ),
    [BLOCKS.HEADING_2]: (_: any, children: ReactNode): ReactElement => (
      <ChakraText as={"h2"} fontWeight={600} fontSize={"3xl"}>
        {children}
      </ChakraText>
    ),
    [BLOCKS.PARAGRAPH]: (_: any, children: ReactNode): ReactElement => (
      <ChakraText whiteSpace={"pre-wrap"} textAlign={"inherit"}>
        {children}
      </ChakraText>
    ),
    [INLINES.ENTRY_HYPERLINK]: (_: any, children: ReactNode): ReactElement => (
      <Link uri={_.data.uri}>{children}</Link>
    ),
    [INLINES.ASSET_HYPERLINK]: (_: any, children: ReactNode): ReactElement => (
      <Link uri={_.data.uri}>{children}</Link>
    ),
    [INLINES.HYPERLINK]: (_: any, children: ReactNode): ReactElement => {
      return <Link uri={_.data.uri}>{children}</Link>;
    },
    [BLOCKS.UL_LIST]: (_: any, children: ReactNode): ReactElement => (
      <UnorderedList>{children}</UnorderedList>
    ),
    [BLOCKS.LIST_ITEM]: (_: any, children: ReactNode): ReactElement => (
      <ListItem>{children}</ListItem>
    ),
  },
};

type ContentfulJsxProps = StackProps & {
  richTextDocument: any;
};

export default function ContentfulJsx({
  richTextDocument,
  ...props
}: ContentfulJsxProps): ReactNode {
  return (
    <VStack width={"full"} height={"full"} {...props}>
      {documentToReactComponents(richTextDocument, options)}
    </VStack>
  );
}
