import { MutableRefObject, PropsWithChildren } from "react";
import NextLink from "next/link";
import { LinkProps as NextLinkProps } from "next/dist/client/link";
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import React from "react";

export type NextChakraLinkProps = PropsWithChildren<
  { isText?: boolean } & NextLinkProps & Omit<ChakraLinkProps, "as">
>;

export const NextChakraLink = React.forwardRef(
  (
    {
      href,
      as,
      replace,
      scroll,
      shallow,
      prefetch,
      children,
      isText,
      ...chakraProps
    }: NextChakraLinkProps,
    ref
  ) => {
    return (
      <NextLink
        passHref={true}
        href={href}
        as={as}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        prefetch={prefetch}
      >
        <ChakraLink
          ref={ref as MutableRefObject<HTMLAnchorElement>}
          {...chakraProps}
          _hover={{ textDecoration: isText ? "underline" : "none" }}
          textDecor={isText ? "underline" : "none"}
        >
          {children}
        </ChakraLink>
      </NextLink>
    );
  }
);
