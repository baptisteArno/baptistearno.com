import { Flex, HStack, Button } from "@chakra-ui/react";
import React from "react";
import { DarkModeButton } from "./DarkModeButton";
import { NextChakraLink } from "./NextChakraLink";
import Image from "next/image";

export const Header = (): JSX.Element => (
  <Flex justifyContent="space-between" alignItems="center" p={4}>
    <HStack as={NextChakraLink} href="/">
      <Image src="/avatar.png" width="30px" height="37px" />
    </HStack>
    <HStack spacing={4}>
      <Button as={NextChakraLink} href="/#blog" colorScheme="pink">
        Blog
      </Button>
      <Button as={NextChakraLink} href="/#projects" colorScheme="pink">
        Projects
      </Button>
      <DarkModeButton />
    </HStack>
  </Flex>
);
