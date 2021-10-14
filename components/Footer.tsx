import { EmailIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Wrap,
  WrapItem,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import * as React from "react";
import { GithubIcon } from "./logos/GithubIcon";
import { TwitterIcon } from "./logos/TwitterIcon";
import { NextChakraLink } from "./nextAdapters/NextChakraLink";

export const Footer = (): JSX.Element => (
  <VStack borderTopWidth="1px" py="6" w="full" maxW="1000px">
    <Wrap spacing="4">
      <WrapItem>
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
      </WrapItem>
      <WrapItem>
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
      </WrapItem>
      <WrapItem>
        <IconButton
          as={NextChakraLink}
          href="mailto:contact@baptistearno.com"
          aria-label="Send an email"
          icon={<EmailIcon />}
        />
      </WrapItem>
    </Wrap>
  </VStack>
);
