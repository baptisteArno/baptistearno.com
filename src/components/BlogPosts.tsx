import {
  useColorModeValue,
  Stack,
  Heading,
  SimpleGrid,
  Box,
  Tag,
  Text,
} from "@chakra-ui/react";
import {
  TitlePropertyValue,
  RichTextPropertyValue,
  MultiSelectPropertyValue,
  CheckboxPropertyValue,
} from "@notionhq/client/build/src/api-types";
import React from "react";
import Image from "next/image";
import { NextChakraLink } from "./NextChakraLink";
import { MotionStack } from "./motion";

export type Post = {
  slug: RichTextPropertyValue;
  title: TitlePropertyValue;
  thumbnailUrl: RichTextPropertyValue;
  description: RichTextPropertyValue;
  tags: MultiSelectPropertyValue;
  published: CheckboxPropertyValue;
};

type Props = {
  posts: Post[];
};

export const BlogPosts = ({ posts }: Props): JSX.Element => (
  <Stack spacing={6}>
    <Heading as="h1" textAlign="center">
      Blog posts
    </Heading>
    <Stack>
      <PostsGrid posts={posts.filter((post) => post.published.checkbox)} />
    </Stack>
  </Stack>
);

const PostsGrid = ({ posts }: Props) => {
  const cardBgColor = useColorModeValue("", "gray.800");
  return (
    <SimpleGrid columns={[1, 2]} w="full" spacing={3} maxW="1000px" id="blog">
      {posts.map((post) => (
        <MotionStack
          as={NextChakraLink}
          key={post.slug.rich_text[0].plain_text}
          whileHover={{ y: -5 }}
          p={4}
          mx={[6, 0]}
          rounded="xl"
          shadow="md"
          cursor="pointer"
          spacing={5}
          bgColor={cardBgColor}
          href={"/blog/" + post.slug.rich_text[0].plain_text}
        >
          <Box h="200px" w="full" pos="relative">
            <Image
              src={
                post.thumbnailUrl.rich_text[0].plain_text ??
                "https://placeimg.com/200/200/tech"
              }
              layout="fill"
              objectFit="cover"
              className="image-rounded"
            />
          </Box>

          <Heading size="lg">{post.title.title[0].plain_text}</Heading>
          <Stack direction="row">
            {post.tags.multi_select.map((status) => (
              <Tag colorScheme={status.color} key={status.id}>
                {status.name}
              </Tag>
            ))}
          </Stack>
          <Text>{post.description.rich_text[0].plain_text}</Text>
        </MotionStack>
      ))}
    </SimpleGrid>
  );
};
