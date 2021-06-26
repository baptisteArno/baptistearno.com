import { Heading } from "@chakra-ui/layout";
import React from "react";
import {
  HStack,
  IconButton,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { GetStaticPropsResult } from "next";
import { getPagesFromDatabase } from "../lib/notion";
import { Project, Projects } from "../components/Projects";
import { BlogPosts, Post } from "../components/BlogPosts";
import { PageLayout } from "../components/PageLayout";
import { Header } from "../components/Header";
import { NextChakraLink } from "../components/NextChakraLink";
import { TwitterLogo } from "../components/logos/TwitterLogo";
import { GithubLogo } from "../components/logos/GithubLogo";

type Props = {
  projects: Project[];
  posts: Post[];
};

const Index = ({ projects, posts }: Props): JSX.Element => {
  const logoFillColor = useColorModeValue("white", "black");
  return (
    <PageLayout>
      <Header />
      <VStack spacing={6}>
        <Heading>Hey there 👋</Heading>
        <Heading textAlign="center" size="md" opacity={0.7}>
          I&apos;m Baptiste from France, Software Engineer, founder of Typebot.
        </Heading>
        <HStack>
          <IconButton
            aria-label="twitter"
            colorScheme="twitter"
            icon={<TwitterLogo fill={logoFillColor} />}
            as={NextChakraLink}
            href="https://twitter/baptisteArno"
            isExternal
            rounded="md"
          />
          <IconButton
            aria-label="github"
            colorScheme="purple"
            icon={<GithubLogo fill={logoFillColor} />}
            as={NextChakraLink}
            href="https://github.com/baptisteArno"
            isExternal
            rounded="md"
          />
        </HStack>
      </VStack>
      <Projects projects={projects} />
      <BlogPosts posts={posts} />
    </PageLayout>
  );
};

export const getStaticProps = async (): Promise<
  GetStaticPropsResult<Props>
> => {
  if (!process.env.NOTION_PROJECTS_DATABASE_ID)
    throw Error("NOTION_PROJECTS_DATABASE_ID missing");
  if (!process.env.NOTION_BLOG_DATABASE_ID)
    throw Error("NOTION_BLOG_DATABASE_ID missing");
  const projectPages = await getPagesFromDatabase(
    process.env.NOTION_PROJECTS_DATABASE_ID
  );
  const blogPages = await getPagesFromDatabase(
    process.env.NOTION_BLOG_DATABASE_ID
  );
  return {
    props: {
      projects: projectPages.map((page) => ({
        id: page.id,
        ...page.properties,
      })) as unknown as Project[],
      posts: blogPages.map((page) => ({
        ...page.properties,
      })) as unknown as Post[],
    },
    revalidate: 1,
  };
};

export default Index;
