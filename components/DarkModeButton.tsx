import React from "react";
import { useColorMode, IconButton, ButtonProps } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "assets/icons";

export const DarkModeButton = (props: ButtonProps): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <IconButton
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      onClick={toggleColorMode}
      rounded="md"
      {...props}
    />
  );
};
