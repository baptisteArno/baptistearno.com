import React from "react";
import "focus-visible/dist/focus-visible";
import { ChakraProvider } from "@chakra-ui/react";
import "../index.css";

import theme from "../theme";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
