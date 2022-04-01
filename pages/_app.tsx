import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "assets/styles/main.css";
import "focus-visible/dist/focus-visible";

import theme from "lib/theme";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
