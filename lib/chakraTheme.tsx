import { extendTheme } from "@chakra-ui/react";

const fonts = {
  heading: "Domine",
  body: "Inter",
};

const theme = extendTheme({
  config: {
    useSystemColorMode: true,
    initialColorMode: "dark",
  },
  colors: {
    black: "#333333",
  },
  fonts,
});

export default theme;
