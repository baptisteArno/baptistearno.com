import {
  useColorModeValue,
  Stack,
  Heading,
  SimpleGrid,
  Tag,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { MotionStack } from "../motion";
import { NextChakraLink } from "../nextAdapters/NextChakraLink";
import { Project } from "@/types/project";

type Props = {
  projects: Project[];
};

const colors = [
  "blue",
  "yellow",
  "brown",
  "pink",
  "purple",
  "teal",
  "green",
  "red",
];

export const Projects = ({ projects }: Props): JSX.Element => (
  <Stack id="projects">
    <Heading as="h1">My projects</Heading>
    <ProjectGrid projects={projects} />
  </Stack>
);

const ProjectGrid = ({ projects }: Props) => {
  const cardBgColor = useColorModeValue("", "gray.800");
  return (
    <SimpleGrid columns={[1, 3]} w="full" spacing={3} maxW="1000px">
      {projects.map((project) => (
        <MotionStack
          key={project.name}
          whileHover={{ y: -5 }}
          as={NextChakraLink}
          href={project.url}
          p={4}
          rounded="xl"
          shadow="md"
          spacing={5}
          bgColor={cardBgColor}
          isExternal={true}
        >
          <Image
            src={require(`../../public/images${project.thumbnailPath}`)}
            placeholder="blur"
            className="rounded"
          />

          <Heading>{project.name}</Heading>
          <Wrap direction="row">
            {project.tags.map((status, idx) => (
              <WrapItem
                as={Tag}
                colorScheme={colors[Math.floor(Math.random() * colors.length)]}
                key={idx}
                alignItems="center"
              >
                {status}
              </WrapItem>
            ))}
          </Wrap>
          <Text>{project.description}</Text>
        </MotionStack>
      ))}
    </SimpleGrid>
  );
};
