import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import readingTime from "reading-time";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import { BlogPostContent, FrontMatter } from "types/blog";

export const getBlogPostSlugs = (): string[] =>
  readdirSync(join(process.cwd(), "data", "blog")).map((name) =>
    name.replace(/\.mdx/, "")
  );

export const getBlogPostContent = async (
  slug: string
): Promise<BlogPostContent> => {
  const { frontMatter, mdxContent } = getBlogPostFrontMatter(slug);
  const mdxSource = await serialize(mdxContent, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["anchor"],
            },
          },
        ],
      ],
    },
  });

  return {
    mdxSource,
    frontMatter,
  };
};

export const getBlogPostFrontMatter = (
  slug: string
): { frontMatter: FrontMatter; mdxContent: string } => {
  const source = readFileSync(
    join(process.cwd(), "data", "blog", `${slug}.mdx`),
    "utf8"
  );
  const { data, content } = matter(source);
  return {
    frontMatter: {
      wordCount: source.split(/\s+/gu).length,
      readingTime: readingTime(source),
      slug: slug,
      publishedAt: data.publishedAt,
      summary: data.summary,
      imagePath: data.imagePath,
      title: data.title,
    },
    mdxContent: content,
  };
};
