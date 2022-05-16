import { Flex, IconButton, Stack, useColorModeValue } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { DarkModeButton } from "components/DarkModeButton";
import { NextChakraLink } from "components/nextAdapters/NextChakraLink";
import { HomeIcon } from "assets/icons";

export enum Page {
  HOME,
  BLOG,
}

type Props = {
  children: ReactNode;
  currentPage: Page;
};

export const PageLayout = ({ children }: Props): JSX.Element => {
  const cardBgColor = useColorModeValue("white", "black");
  return (
    <Stack bgColor={cardBgColor} alignItems="center" minH="100vh">
      <Flex maxW="700px" w="full" justifyContent="space-between" py="4" px="4">
        <IconButton
          aria-label="Go to my twitter profile"
          as={NextChakraLink}
          href="/"
          icon={<HomeIcon />}
        />
        <DarkModeButton />
      </Flex>
      <Flex w="full" maxW="700px" pb={32} pt={6}>
        {children}
      </Flex>
    </Stack>
  );
};
