import React from "react";
import { Flex, FlexProps } from "@chakra-ui/react";

export const Container = (props: FlexProps): JSX.Element => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      {...props}
    />
  );
};
