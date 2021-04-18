import { Heading, HStack, SimpleGrid } from "@chakra-ui/layout";
import { Container } from "../components/Container";
import Image from "next/image";
import React from "react";
import {
  Box,
  LinkBox,
  LinkOverlay,
  Stack,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { GetStaticPropsResult } from "next";
import { addApolloState, initializeApollo } from "../lib/apolloClient";
import {
  ProjectFragment,
  ProjectsDocument,
  ProjectsQueryResult,
} from "../@types/codegen/graphql";
import { DarkModeButton } from "../components/DarkModeButton";

type Props = {
  projects: ProjectFragment[];
};
const Index = ({ projects }: Props): JSX.Element => {
  const cardBgColor = useColorModeValue("", "gray.800");
  return (
    <Container>
      <Container
        px={[4, 0]}
        maxW="1000px"
        w="full"
        height="100vh"
        pos="relative"
      >
        <Text pos="absolute" bottom="2" fontSize="3xl">
          👇
        </Text>
        <HStack w="full" justifyContent="flex-end" pos="absolute" top={4}>
          <DarkModeButton />
        </HStack>
        <Stack
          alignItems="center"
          spacing={6}
          direction={["column", "row"]}
          mb={10}
        >
          <Box
            transform="rotateY(5deg)"
            transition="transform 1s ease 0s"
            _hover={{ transform: "rotateY(0deg)" }}
          >
            <Image src="/avatar.png" width="100px" height="124px" />
          </Box>

          <Stack alignItems={["center", "flex-start"]}>
            <Heading>Hey there 👋</Heading>
            <Text maxW="500px" textAlign={["center", "left"]}>
              I&apos;m Baptiste, Software Engineer, Entrepreneur.
              <br /> I&apos;m trying to do everything myself: Design, Code,
              Marketing.
            </Text>
          </Stack>
        </Stack>
      </Container>
      <SimpleGrid columns={[1, 3]} w="full" spacing={3} maxW="1000px" py={20}>
        {projects.map((project) => (
          <LinkBox
            key={project.id}
            as={Stack}
            p={4}
            mx={[6, 0]}
            rounded="xl"
            shadow="md"
            cursor="pointer"
            spacing={5}
            bgColor={cardBgColor}
          >
            <Box h="200px" w="full" pos="relative">
              <Image
                layout="fill"
                src={
                  project.thumbnailUrl ?? "https://placeimg.com/200/200/tech"
                }
                objectFit="cover"
                className="image-rounded"
              />
            </Box>

            <Heading>
              <LinkOverlay href={project.url} isExternal>
                {project.name}
              </LinkOverlay>
            </Heading>

            <Text>{project.description}</Text>
            <Stack direction="row">
              <Text fontWeight="bold">Status:</Text>
              {project.status.map((status: string) => (
                <Tag colorScheme="blue" key={status}>
                  {status}
                </Tag>
              ))}
            </Stack>
          </LinkBox>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export const getStaticProps = async (): Promise<
  GetStaticPropsResult<Props>
> => {
  const apolloClient = initializeApollo();

  const results = (await apolloClient.query({
    query: ProjectsDocument,
  })) as ProjectsQueryResult;

  if (!results.data) throw new Error("No projects found");

  const { projects } = results.data;
  return addApolloState(apolloClient, {
    props: { projects },
    revalidate: 1,
  });
};

export default Index;
