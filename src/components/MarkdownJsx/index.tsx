"use client";

/* eslint-disable react/no-children-prop */
import { Code as ChakraCode, ListItem, OrderedList, Text, UnorderedList } from "@chakra-ui/react";
import Markdown from "markdown-to-jsx";
import { ReactElement } from "react";
import { Prism as SyntaxHighlighter, SyntaxHighlighterProps } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

type MarkdownJsxProps = { markdown: string };

type CodeProps = {
  className: HTMLElement["className"];
  children: SyntaxHighlighterProps["children"];
};

const Code = ({ className, children }: CodeProps): ReactElement => {
  const language = className?.replace("lang-", "");

  const shouldBeInline = language === undefined;

  if (shouldBeInline) {
    return (
      <ChakraCode borderRadius={"5px"} px={"5px"} textAlign={"center"}>
        {children}
      </ChakraCode>
    );
  }

  return (
    <SyntaxHighlighter
      customStyle={{ marginTop: "20px", marginBottom: "20px", borderRadius: "15px" }}
      language={language?.toLowerCase()}
      style={oneLight}
      showInlineLineNumbers
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default function MarkdownJsx({ markdown }: MarkdownJsxProps): ReactElement {
  return (
    <Markdown
      children={markdown}
      options={{
        overrides: {
          p: {
            component: Text,
            props: {
              whiteSpace: "pre-wrap",
            },
          },
          ul: {
            component: UnorderedList,
            props: {
              mt: "10px",
              mb: "10px",
            },
          },
          li: {
            component: ListItem,
          },
          ol: {
            component: OrderedList,
            props: {
              mt: "10px",
              mb: "10px",
            },
          },
          h1: {
            component: Text,
            props: {
              as: "h1",
              fontWeight: "600",
              fontSize: "3xl",
              mt: "20px",
              mb: "10px",
            },
          },
          h2: {
            component: Text,
            props: {
              as: "h2",
              fontWeight: "600",
              fontSize: "2xl",
              mt: "20px",
              mb: "10px",
            },
          },
          h3: {
            component: Text,
            props: {
              as: "h3",
              fontWeight: "600",
              fontSize: "xl",
              mt: "20px",
              mb: "10px",
            },
          },
          code: {
            component: Code,
          },
        },
      }}
    />
  );
}
