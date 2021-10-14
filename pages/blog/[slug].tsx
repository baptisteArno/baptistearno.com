import React from "react";
import { GetStaticPathsResult, GetStaticPropsResult } from "next";
import { MDXRemote } from "next-mdx-remote";
import { BlogLayout } from "@/layouts/BlogLayout";
import { getBlogPostSlugs, getBlogPostContent } from "@/lib/mdx";
import { BlogPostContent } from "@/types/blog";
import components from "components/MDXComponents";

const Blog = ({ mdxSource, frontMatter }: BlogPostContent): JSX.Element => (
  <BlogLayout frontMatter={frontMatter}>
    <MDXRemote {...mdxSource} components={components} />
  </BlogLayout>
);

export default Blog;

export const getStaticPaths = async (): Promise<GetStaticPathsResult> => ({
  paths: getBlogPostSlugs().map((slug) => ({
    params: {
      slug: slug,
    },
  })),
  fallback: false,
});

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}): Promise<GetStaticPropsResult<BlogPostContent>> => ({
  props: await getBlogPostContent(params.slug),
});
