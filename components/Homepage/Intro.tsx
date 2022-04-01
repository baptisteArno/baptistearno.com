import {
  Stack,
  Heading,
  Text,
  useColorModeValue,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import avatarSrc from "../../public/images/avatar.png";
import Image from "next/image";
import { NextChakraLink } from "components/nextAdapters/NextChakraLink";
import { EmailIcon, GithubIcon, TwitterIcon } from "assets/icons";

export const Intro = (): JSX.Element => (
  <Stack
    direction={["column", "row"]}
    spacing={["2", "10"]}
    alignItems="center"
    px="4"
  >
    <Image
      src={avatarSrc}
      placeholder="blur"
      alt="Avatar"
      width="120px"
      height="120px"
      style={{ borderRadius: "5px" }}
    />
    <Stack spacing="4" align={["center", "flex-start"]}>
      <Stack spacing="2">
        <Heading size="xl" textAlign={["center", "left"]}>
          Baptiste Arnaud
        </Heading>
        <Text
          size="lg"
          color={useColorModeValue("gray.600", "gray.200")}
          textAlign={["center", "left"]}
        >
          Software Developer. Founder of{" "}
          <NextChakraLink href={"https://www.typebot.io"} isText>
            Typebot
          </NextChakraLink>
          , an open-source conversational form builder.
        </Text>
      </Stack>

      <HStack>
        <IconButton
          aria-label="Go to my GitHub profile"
          as={NextChakraLink}
          href="https://github.com/baptisteArno"
          isExternal
          icon={
            <GithubIcon
              fill={useColorModeValue("gray.900", "white")}
              boxSize="20px"
            />
          }
        />
        <IconButton
          aria-label="Go to my twitter profile"
          as={NextChakraLink}
          href="https://twitter.com/baptisteArno"
          isExternal
          icon={
            <TwitterIcon
              fill={useColorModeValue("gray.900", "white")}
              boxSize="20px"
            />
          }
        />
        <IconButton
          as={NextChakraLink}
          href="mailto:baptiste@typebot.io"
          aria-label="Send an email"
          icon={<EmailIcon />}
        />
      </HStack>
    </Stack>
  </Stack>
);
