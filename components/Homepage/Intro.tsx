import { Stack, Heading, Text, useColorModeValue, Box } from "@chakra-ui/react";
import React from "react";
import avatarSrc from "../../public/images/avatar.png";
import Image from "next/image";

export const Intro = (): JSX.Element => (
  <Stack
    direction={["column", "row"]}
    spacing={["2", "10"]}
    alignItems={["center", "flex-start"]}
  >
    <Box maxW="80px" as="figure">
      <Image src={avatarSrc} placeholder="blur" />
    </Box>
    <Stack spacing="2">
      <Heading size="2xl">Baptiste Arnaud</Heading>
      <Text
        size="lg"
        color={useColorModeValue("gray.600", "gray.400")}
        fontWeight="bold"
      >
        Software developer, founder of Typebot.
      </Text>
      <Text>
        👷 6 years in software development <br />
        🏃 Solo developer since 2 years <br />
        😎 I make cool projects
      </Text>
    </Stack>
  </Stack>
);
