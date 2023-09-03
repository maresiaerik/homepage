"use client";

import { Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { ReactElement } from "react";

import LoadingSpinner from "@/components/LoadingSpinner";
import MarkdownJsx from "@/components/MarkdownJsx";
import UnexpectedError from "@/components/UnexpectedError";
import { Blog, getBlogPostById } from "@/lib/entities/blog";
import useFetchData from "@/lib/hooks/useFetchData";

export default function BlogPost(): ReactElement {
  const params = useParams();
  const blogPostId = params.post as string;
  const { data, isError, isLoading } = useFetchData<Blog>(() => getBlogPostById(blogPostId));

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <UnexpectedError />;
  }

  const blogPost = data!;

  return (
    <Flex width={"full"} height={"full"} justifyContent={"center"}>
      <VStack
        width={{ base: "100%", md: "60%" }}
        height={"full"}
        alignItems={"left"}
        spacing={"30px"}
      >
        <HStack>
          <Text as={"h1"} fontSize={"5xl"} fontWeight={600}>
            {blogPost.title}
          </Text>
        </HStack>
        <Flex width={"full"} height={"full"}>
          <MarkdownJsx markdown={blogPost.content} />
        </Flex>
      </VStack>
    </Flex>
  );
}
