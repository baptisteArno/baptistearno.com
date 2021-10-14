import { useColorModeValue, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { MotionStack } from "../motion";
import { NextChakraLink } from "../nextAdapters/NextChakraLink";
import { FrontMatter } from "@/types/blog";

type Props = {
  frontMatters: FrontMatter[];
};

export const BlogPosts = ({ frontMatters }: Props): JSX.Element => {
  const cardBgColor = useColorModeValue("", "gray.800");
  return (
    <SimpleGrid columns={[1, 2]} w="full" spacing={3} maxW="1000px" id="blog">
      {frontMatters.map((frontMatter) => (
        <MotionStack
          as={NextChakraLink}
          key={frontMatter.slug}
          whileHover={{ y: -5 }}
          p={4}
          rounded="xl"
          shadow="md"
          cursor="pointer"
          spacing={5}
          bgColor={cardBgColor}
          href={"/blog/" + frontMatter.slug}
        >
          <Image
            src={require(`../../public/images${frontMatter.imagePath}`)}
            placeholder="blur"
            className="rounded"
          />

          <Heading size="lg">{frontMatter.title}</Heading>
          <Text>{frontMatter.summary}</Text>
        </MotionStack>
      ))}
    </SimpleGrid>
  );
};
