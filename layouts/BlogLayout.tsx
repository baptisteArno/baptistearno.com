import { Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { Page, PageLayout } from "./PageLayout";
import { prismDarkTheme } from "assets/styles/prism";
import { FrontMatter } from "types/blog";
import { SocialMetaTags } from "components/SocialMetaTags";
import { Global } from "@emotion/react";
import { parseISO, format } from "date-fns";
import Image from "next/image";
import { NewsletterBot } from "components/NewsletterBot";

type BlogLayoutProps = {
  children: ReactNode;
  frontMatter: FrontMatter;
};

export const BlogLayout = ({
  children,
  frontMatter,
}: BlogLayoutProps): JSX.Element => {
  return (
    <PageLayout currentPage={Page.BLOG}>
      <SocialMetaTags
        title={frontMatter.title}
        description={frontMatter.summary}
        imagePreviewUrl={`/images${frontMatter.imagePath}`}
        currentUrl={`https://baptistearno.com/blog/${frontMatter.slug}`}
      />
      <Stack spacing={6} w="full" px="4">
        <Global styles={prismDarkTheme} />
        <Image
          src={require(`../public/images${frontMatter.imagePath}`)}
          placeholder="blur"
          className="rounded"
          alt="Blog post illustration"
        />
        <Stack>
          <Heading as="h1">{frontMatter.title}</Heading>
          <Text color={useColorModeValue("gray.500", "gray.400")}>
            {format(parseISO(frontMatter.publishedAt), "MMMM dd, yyyy")} •{" "}
            {frontMatter.readingTime.text}
          </Text>
        </Stack>

        {children}
        <NewsletterBot />
      </Stack>
    </PageLayout>
  );
};
