import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const fonts = {
  heading: "Poppins",
  body: "Open Sans",
};

const theme = extendTheme({
  config: {
    useSystemColorMode: true,
    initialColorMode: "dark",
  },
  colors: {
    black: "#111111",
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode("white", "black")(props),
      },
    }),
  },
  fonts,
});

export default theme;
