import {
  Flex,
  HStack,
  Spacer,
  TabIndicator,
  TabList,
  Tabs,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import React, { isValidElement, ReactElement, ReactNode } from "react";

export const Template = (props: {
  children: ReactNode;
  defaultIndex: number;
}): JSX.Element => {
  const children = React.Children.toArray(props.children).filter<ReactElement>(
    isValidElement
  );
  return (
    <Flex p={4}>
      {children.find((child) => child.type === Left)?.props.children}
      <Spacer />
      <HStack marginStart={4}>
        <Tabs
          colorScheme="blue"
          variant="unstyled"
          isFitted
          defaultIndex={props.defaultIndex}
        >
          <TabList>
            {children.find((child) => child.type === Links)?.props.children}
          </TabList>
          <TabIndicator
            mt="13px"
            height={1}
            borderTopRadius="md"
            bg={mode("blue.500", "blue.200")}
          />
        </Tabs>
      </HStack>
    </Flex>
  );
};

const Left: React.FC = () => null;
const Links: React.FC = () => null;

export const NavBarLayout = Object.assign(Template, { Left, Links });
