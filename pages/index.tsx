import React from "react";
import { VStack } from "@chakra-ui/react";
import { GetStaticPropsResult } from "next";
import { Intro } from "components/Homepage/Intro";
import SubscribeNewsletterForm from "components/SubscribeNewsletterForm";
import { Page, PageLayout } from "@/layouts/PageLayout";
import { FrontMatter } from "@/types/blog";
import { getBlogPostSlugs, getBlogPostFrontMatter } from "@/lib/mdx";
import { FeaturedPosts } from "@/components/Homepage/FeaturedPosts";
import { openSourceProjects, projects } from "@/data/projects";
import { Project } from "@/types/project";
import { Projects } from "@/components/Homepage/Projects";
import { SocialMetaTags } from "@/components/SocialMetaTags";

type Props = {
  projects: Project[];
  frontMatters: FrontMatter[];
};

const Index = ({ projects, frontMatters }: Props): JSX.Element => {
  return (
    <PageLayout currentPage={Page.HOME}>
      <SocialMetaTags
        title="baptisteArno"
        description="Software developer, founder of Typebot."
        imagePreviewUrl="/images/site-preview.png"
        currentUrl={`https://baptistearno.com/`}
      />
      <VStack spacing="10">
        <Intro />
        <FeaturedPosts frontMatters={frontMatters} />
        <Projects projects={projects} />
        <SubscribeNewsletterForm />
      </VStack>
    </PageLayout>
  );
};

export const getStaticProps = async (): Promise<
  GetStaticPropsResult<Props>
> => {
  return {
    props: {
      projects: projects.concat(openSourceProjects),
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
