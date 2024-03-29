"use client";

import {
  Alert,
  AlertIcon,
  Link as ChakraLink,
  Text as ChakraText,
  Divider,
  Flex,
  ListItem,
  OrderedList,
  StackProps,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import Image from "next/image";
import { PropsWithChildren, ReactElement, ReactNode } from "react";

const Link = ({ uri, children }: PropsWithChildren<{ uri: string }>): ReactElement => (
  <ChakraLink href={uri} target={"_blank"} color={"blue.900"}>
    {children}
  </ChakraLink>
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
    [BLOCKS.HEADING_3]: (_: any, children: ReactNode): ReactElement => (
      <ChakraText as={"h3"} fontWeight={600} fontSize={"2xl"}>
        {children}
      </ChakraText>
    ),
    [BLOCKS.HEADING_4]: (_: any, children: ReactNode): ReactElement => (
      <ChakraText as={"h4"} fontWeight={600} fontSize={"xl"}>
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
    [BLOCKS.QUOTE]: (_: any, children: ReactNode): ReactElement => (
      <Alert
        my={"10px"}
        borderRadius={"lg"}
        colorScheme={"orange"}
        status={"info"}
        variant={"left-accent"}
      >
        <AlertIcon />
        {children}
      </Alert>
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
    [BLOCKS.OL_LIST]: (_: any, children: ReactNode): ReactElement => (
      <OrderedList>{children}</OrderedList>
    ),
    [BLOCKS.LIST_ITEM]: (_: any, children: ReactNode): ReactElement => (
      <ListItem>{children}</ListItem>
    ),
    [BLOCKS.EMBEDDED_ASSET]: ({ data }: any): ReactElement => {
      const assetUrl = `https:${data.target.fields.file.url}`;

      return (
        <Flex width={"full"} justifyContent={"center"} position={"relative"}>
          <Image
            src={assetUrl}
            alt={data.target.fields.description}
            width={700}
            height={475}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Flex>
      );
    },
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
