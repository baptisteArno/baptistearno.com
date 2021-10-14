import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { ReadTimeResults } from "reading-time";

export type FrontMatter = {
  wordCount: number;
  readingTime: ReadTimeResults;
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  imagePath: string;
};

export type BlogPostContent = {
  mdxSource: MDXRemoteSerializeResult;
  frontMatter: FrontMatter;
};
