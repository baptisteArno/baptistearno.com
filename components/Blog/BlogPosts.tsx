import { useColorModeValue, Heading, Text, Stack } from "@chakra-ui/react";
import React from "react";
import { NextChakraLink } from "../nextAdapters/NextChakraLink";
import { FrontMatter } from "types/blog";
import { parseISO, format } from "date-fns";

type Props = {
  frontMatters: FrontMatter[];
};

export const BlogPosts = ({ frontMatters }: Props): JSX.Element => {
  const cardBgColor = useColorModeValue("gray.50", "gray.800");
  const dateColor = useColorModeValue("gray.500", "gray.500");
  const descriptionColor = useColorModeValue("gray.600", "gray.400");
  return (
    <Stack w="full" spacing={10} id="blog">
      {frontMatters.map((frontMatter) => (
        <Stack
          as={NextChakraLink}
          key={frontMatter.slug}
          p={4}
          rounded="xl"
          cursor="pointer"
          _hover={{ bgColor: cardBgColor }}
          href={"/blog/" + frontMatter.slug}
        >
          <Heading fontSize="2xl">{frontMatter.title}</Heading>
          <Text color={dateColor}>
            {format(parseISO(frontMatter.publishedAt), "MMMM dd, yyyy")}
            {` • `}
            {frontMatter.readingTime.text}
          </Text>
          <Text color={descriptionColor}>{frontMatter.summary}</Text>
        </Stack>
      ))}
    </Stack>
  );
};
