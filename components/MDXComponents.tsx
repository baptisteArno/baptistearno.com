import React, { useEffect, useRef, useState } from "react";
import { chakra, Flex, Heading, HeadingProps, Text } from "@chakra-ui/react";
import {
  NextChakraLink,
  NextChakraLinkProps,
} from "./nextAdapters/NextChakraLink";
import Image, { ImageProps } from "next/image";
import { CopyButton } from "./CopyButton";

const NextImage = (props: ImageProps): JSX.Element => {
  const { src, alt } = props;
  return (
    <Flex justifyContent="center">
      <Image
        src={require(`../public/images/blog/${src}`)}
        alt={alt}
        placeholder="blur"
        className="rounded top-space"
      />
    </Flex>
  );
};

const CodeBlock = (props: HTMLPreElement): JSX.Element => {
  const codeRef = useRef<HTMLPreElement | null>(null);
  const [codeToCopy, setCodeToCopy] = useState("");

  useEffect(() => {
    if (codeRef.current) setCodeToCopy(codeRef.current?.innerText);
  }, []);
  return (
    <Flex pos="relative" overflow="hidden">
      <chakra.pre m="0" ref={codeRef}>
        {props.children}
      </chakra.pre>
      <CopyButton
        size="sm"
        pos="sticky"
        right="10px"
        mt="10px"
        style={{ flexShrink: 0 }}
        colorScheme="gray"
        textToCopy={codeToCopy}
      />
    </Flex>
  );
};

const MDXComponents: Record<string, React.ReactNode> = {
  NextImage,
  a: (props: NextChakraLinkProps) => (
    <NextChakraLink isExternal isText {...props} />
  ),
  p: Text,
  h1: (props: HeadingProps): JSX.Element => <Heading as="h1" {...props} />,
  h2: (props: HeadingProps): JSX.Element => <Heading {...props} size="lg" />,
  h3: (props: HeadingProps): JSX.Element => (
    <Heading as="h3" {...props} size="md" />
  ),
  h4: (props: HeadingProps): JSX.Element => (
    <Heading as="h4" {...props} size="sm" />
  ),
  pre: CodeBlock,
};

export default MDXComponents;
