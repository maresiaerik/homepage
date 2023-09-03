"use client";

import { Flex, Link, VStack } from "@chakra-ui/react";
import { ReactElement } from "react";

import LoadingSpinner from "@/components/LoadingSpinner";
import UnexpectedError from "@/components/UnexpectedError";
import { Blog, getBlogPosts } from "@/lib/entities/blog";
import useFetchData from "@/lib/hooks/useFetchData";

export default function BlogPage(): ReactElement {
  const { data, isError, isLoading } = useFetchData<Blog[]>(getBlogPosts);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <UnexpectedError />;
  }

  const blogPosts = data!;

  return (
    <Flex width={"full"} height={"full"} justifyContent={"center"} alignItems={"center"}>
      <VStack spacing={"40px"} alignItems={"flex-start"} py={"60px"}>
        {blogPosts.map((blogPost: Blog) => (
          <VStack key={blogPost.id} spacing={0} alignItems={"flex-start"}>
            <Link
              href={`/blog/${blogPost.id}`}
              fontSize="3xl"
              color={"blue.900"}
              _hover={{ color: "blue.500" }}
            >
              {blogPost.title}
            </Link>
          </VStack>
        ))}
      </VStack>
    </Flex>
  );
}
