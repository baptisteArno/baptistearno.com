import React from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode, IconButton } from "@chakra-ui/react";

export const DarkModeButton = (): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <IconButton
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      onClick={toggleColorMode}
    />
  );
};
