import { extendTheme } from "@chakra-ui/react";

const fonts = {
  heading: "Epilogue",
  body: "Open Sans",
};

const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark",
  },
  colors: {
    black: "#333333",
  },
  fonts,
});

export default theme;
