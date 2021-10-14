import { BlogPosts } from "@/components/Blog/BlogPosts";
import { Page, PageLayout } from "@/layouts/PageLayout";
import { getBlogPostFrontMatter, getBlogPostSlugs } from "@/lib/mdx";
import { FrontMatter } from "@/types/blog";
import { GetStaticPropsResult } from "next";
import React from "react";
import { Heading, Stack, Text } from "@chakra-ui/react";
import SubscribeNewsletterForm from "@/components/SubscribeNewsletterForm";

type Props = {
  frontMatters: FrontMatter[];
};
const Index = ({ frontMatters }: Props): JSX.Element => {
  return (
    <PageLayout currentPage={Page.BLOG}>
      <Stack spacing={6}>
        <Heading>Blog</Heading>
        <Text>
          I write about software development, self improvement and
          entrepreneurship (How original is that? 😅)
        </Text>
        <SubscribeNewsletterForm />
        <BlogPosts
          frontMatters={frontMatters.sort(
            (a, b) =>
              Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
          )}
        />
      </Stack>
    </PageLayout>
  );
};

export default Index;

export const getStaticProps = async (): Promise<
  GetStaticPropsResult<Props>
> => {
  return {
    props: {
      frontMatters: getBlogPostSlugs().map(
        (slug) => getBlogPostFrontMatter(slug).frontMatter
      ),
    },
  };
};
