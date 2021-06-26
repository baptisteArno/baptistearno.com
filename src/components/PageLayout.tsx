import { Flex, Stack, useColorModeValue } from "@chakra-ui/react";
import React, { ReactNode } from "react";

export const PageLayout = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const cardBgColor = useColorModeValue("white", "gray.900");
  return (
    <Flex bgColor={cardBgColor}>
      <Stack w="full" spacing={20} maxW="1000px" pb={20} mx="auto">
        {children}
      </Stack>
    </Flex>
  );
};
