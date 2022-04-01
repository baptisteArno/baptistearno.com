import React from "react";
import { Stack } from "@chakra-ui/react";
import { GetStaticPropsResult } from "next";
import { Intro } from "components/Homepage/Intro";
import { Page, PageLayout } from "layouts/PageLayout";
import { FrontMatter } from "types/blog";
import { getBlogPostSlugs, getBlogPostFrontMatter } from "lib/mdx";
import { SocialMetaTags } from "components/SocialMetaTags";
import { BlogPosts } from "components/Blog/BlogPosts";

type Props = {
  frontMatters: FrontMatter[];
};

const Index = ({ frontMatters }: Props): JSX.Element => {
  return (
    <PageLayout currentPage={Page.HOME}>
      <SocialMetaTags
        title="Baptiste Arnaud"
        description="Software Developer. Founder of Typebot, an open-source conversational form builder."
        imagePreviewUrl="/images/site-preview.png"
        currentUrl={`https://baptistearno.com/`}
      />
      <Stack spacing="20">
        <Intro />
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

export const getStaticProps = async (): Promise<
  GetStaticPropsResult<Props>
> => {
  return {
    props: {
      frontMatters: getBlogPostSlugs()
        .filter((slug) =>
          ["from-1-to-767-paying-users", "onboarding-emails"].includes(slug)
        )
        .map((slug) => getBlogPostFrontMatter(slug).frontMatter),
    },
    revalidate: 1,
  };
};

export default Index;
