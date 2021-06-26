import {
  useColorModeValue,
  Stack,
  Heading,
  SimpleGrid,
  Box,
  Tag,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import {
  TitlePropertyValue,
  RichTextPropertyValue,
  MultiSelectPropertyValue,
  SelectPropertyValue,
} from "@notionhq/client/build/src/api-types";
import React from "react";
import Image from "next/image";
import { NextChakraLink } from "./NextChakraLink";

export type Project = {
  id: string;
  name: TitlePropertyValue;
  thumbnailUrl: RichTextPropertyValue;
  url: RichTextPropertyValue;
  description: RichTextPropertyValue;
  tags: MultiSelectPropertyValue;
  type: SelectPropertyValue;
};

type Props = {
  projects: Project[];
};

export const Projects = ({ projects }: Props): JSX.Element => (
  <Stack spacing={6} id="projects">
    <Heading as="h1" textAlign="center">
      Projects
    </Heading>
    <Stack>
      <Heading size="lg" px={6}>
        Full-time
      </Heading>
      <ProjectGrid
        projects={projects.filter(
          (project) => project.type.select.name === "main"
        )}
      />
    </Stack>
    <Stack>
      <Heading size="lg" px={6}>
        Side
      </Heading>
      <ProjectGrid
        projects={projects.filter(
          (project) => project.type.select.name === "side"
        )}
      />
    </Stack>
  </Stack>
);

const ProjectGrid = ({ projects }: Props) => {
  const cardBgColor = useColorModeValue("", "gray.800");
  return (
    <SimpleGrid columns={[1, 3]} w="full" spacing={3} maxW="1000px">
      {projects.map((project) => (
        <Stack
          key={project.id}
          as={NextChakraLink}
          href={
            project.url.rich_text.length > 0
              ? project.url.rich_text[0].plain_text
              : ""
          }
          p={4}
          mx={[6, 0]}
          rounded="xl"
          shadow="md"
          spacing={5}
          bgColor={cardBgColor}
          isExternal={project.url.rich_text.length > 0}
        >
          <Box h="200px" w="full" pos="relative">
            <Image
              src={
                project.thumbnailUrl.rich_text[0].plain_text ??
                "https://placeimg.com/200/200/tech"
              }
              layout="fill"
              objectFit="cover"
              className="image-rounded"
            />
          </Box>

          <Heading>{project.name.title[0].plain_text}</Heading>
          <Wrap direction="row">
            {project.tags.multi_select.map((status) => (
              <WrapItem
                as={Tag}
                colorScheme={status.color}
                key={status.id}
                alignItems="center"
              >
                {status.name}
              </WrapItem>
            ))}
          </Wrap>
          <Text>{project.description.rich_text[0].plain_text}</Text>
        </Stack>
      ))}
    </SimpleGrid>
  );
};
