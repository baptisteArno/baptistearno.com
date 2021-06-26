import { Heading, Stack } from "@chakra-ui/react";
import {
  Block,
  RichTextPropertyValue,
} from "@notionhq/client/build/src/api-types";
import React from "react";
import { Post } from "../../components/BlogPosts";
import { PageLayout } from "../../components/PageLayout";
import { SocialMetaTags } from "../../components/SocialMetaTags";
import { getPage, getBlocks, getPagesFromDatabase } from "../../lib/notion";
import { GetStaticPropsResult } from "next";
import { Header } from "../../components/Header";
import Image from "next/image";
import { NotionText, NotionBlock } from "notion-blocks-chakra-ui";

type Props = {
  post: Post;
  blocks: Block[];
};

export default function BlogPost({ post, blocks }: Props): JSX.Element {
  if (!post || !blocks) {
    return <></>;
  }
  return (
    <PageLayout>
      <SocialMetaTags
        title={post.title.title[0]?.plain_text}
        description={post.description.rich_text[0]?.plain_text}
        currentUrl={`https://www.baptistearno.com/blog/${post.slug.rich_text[0]?.plain_text}`}
        imagePreviewUrl={post.thumbnailUrl.rich_text[0]?.plain_text}
      />
      <Header />
      <Stack w="full" alignItems="center" spacing={20} px={4}>
        <Heading as="h1" size="2xl" textAlign="center">
          <NotionText text={post.title.title} />
        </Heading>
        <Stack mt={6} spacing={10} maxW="700px" mx="auto" fontSize="21px">
          {blocks.map((block) => (
            <NotionBlock
              key={block.id}
              block={block}
              customImage={{
                Image,
                props: {
                  layout: "fill",
                  className: "image",
                },
              }}
            />
          ))}
        </Stack>
      </Stack>
    </PageLayout>
  );
}

export const getStaticPaths = async (): Promise<{
  paths: { params: { slug: string; id: string } }[];
  fallback: boolean;
}> => {
  if (!process.env.NOTION_BLOG_DATABASE_ID)
    throw Error("NOTION_BLOG_DATABASE_ID missing");
  const database = await getPagesFromDatabase(
    process.env.NOTION_BLOG_DATABASE_ID
  );
  return {
    paths: database.map((page) => ({
      params: {
        slug: (page.properties.slug as RichTextPropertyValue).rich_text[0]
          .plain_text,
        id: page.id,
      },
    })),
    fallback: true,
  };
};

export const getStaticProps = async (context: {
  params: { slug: string };
}): Promise<GetStaticPropsResult<Props>> => {
  if (!process.env.NOTION_BLOG_DATABASE_ID)
    throw Error("NOTION_BLOG_DATABASE_ID missing");
  const { slug } = context.params;
  const page = await getPage(process.env.NOTION_BLOG_DATABASE_ID, slug);
  if (!page) throw Error("Couldn't find page");
  const blocks = await getBlocks(page.id);

  const childBlocks = await Promise.all(
    blocks
      .filter((block) => block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await getBlocks(block.id),
        };
      })
  );
  const blocksWithChildren = blocks.map((block) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const typedBlock = block[block.type];
    if (block.has_children && !typedBlock.children) {
      typedBlock["children"] = childBlocks.find(
        (x) => x.id === block.id
      )?.children;
    }
    return block;
  });

  return {
    props: {
      post: {
        ...page.properties,
      } as unknown as Post,
      blocks: blocksWithChildren,
    },
    revalidate: 1,
  };
};
