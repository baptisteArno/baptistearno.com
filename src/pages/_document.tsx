import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

export default class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;600;700&family=Open+Sans&display=swap"
            rel="stylesheet"
          />
          <script
            async
            defer
            data-domain="baptistearno.com"
            src="https://plausible.baptistearno.com/js/plausible.js"
          ></script>
        </Head>
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
