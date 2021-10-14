import { FrontMatter } from "@/types/blog";
import { Stack, Heading } from "@chakra-ui/react";
import React from "react";
import { BlogPosts } from "../Blog/BlogPosts";

type FeaturedPostsProps = {
  frontMatters: FrontMatter[];
};

export const FeaturedPosts = ({
  frontMatters,
}: FeaturedPostsProps): JSX.Element => {
  return (
    <Stack>
      <Heading>Latest posts</Heading>
      <BlogPosts frontMatters={frontMatters} />
    </Stack>
  );
};
