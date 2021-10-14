import { Flex, HStack, Button, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { DarkModeButton } from "./DarkModeButton";
import { NextChakraLink } from "./nextAdapters/NextChakraLink";

export const Header = (): JSX.Element => {
  const cardBgColor = useColorModeValue("white", "gray.900");
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      p={4}
      pos="fixed"
      top="0"
      bgColor={cardBgColor}
      w="full"
      maxW="900px"
      zIndex="1"
      roundedBottom="md"
    >
      <DarkModeButton />
      <HStack spacing={4}>
        <Button as={NextChakraLink} href="/#blog" variant="ghost">
          Blog
        </Button>
        <Button as={NextChakraLink} href="/" variant="ghost">
          Home
        </Button>
      </HStack>
    </Flex>
  );
};
