import { Footer } from "components/Footer";
import { Flex, Stack, useColorModeValue } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar";

export enum Page {
  HOME,
  BLOG,
}

type Props = {
  children: ReactNode;
  currentPage: Page;
};

export const PageLayout = ({ children, currentPage }: Props): JSX.Element => {
  const cardBgColor = useColorModeValue("white", "gray.900");
  return (
    <Stack bgColor={cardBgColor} justifyContent="center" alignItems="center">
      <Navbar currentPage={currentPage} />
      <Flex w="full" maxW="1000px" pb={32} pt={6} px="4" mx="auto">
        {children}
      </Flex>
      <Footer />
    </Stack>
  );
};
