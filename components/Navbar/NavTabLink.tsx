import { LinkProps, Tab, useColorModeValue as mode } from "@chakra-ui/react";
import * as React from "react";
import { NextChakraLink } from "../nextAdapters/NextChakraLink";

export const NavTabLink: React.FC<Omit<LinkProps, "as">> = (props) => (
  <Tab
    as={NextChakraLink}
    _selected={{ color: mode("blue.600", "blue.200") }}
    _focus={{ shadow: "none" }}
    justifyContent="flex-start"
    px={{ base: 4, md: 6 }}
    href={props.href ?? "#"}
    fontWeight="medium"
    lineHeight="1.25rem"
    _activeLink={{
      color: mode("blue.600", "blue.200"),
    }}
  >
    {props.children}
  </Tab>
);
