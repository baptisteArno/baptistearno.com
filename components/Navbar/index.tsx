import { Page } from "@/layouts/PageLayout";
import { Box } from "@chakra-ui/react";
import * as React from "react";
import { DarkModeButton } from "../DarkModeButton";
import { NavBarLayout } from "./NavBarLayout";
import { NavTabLink } from "./NavTabLink";

type Props = { currentPage: Page };
const Navbar = ({ currentPage }: Props): JSX.Element => (
  <Box w="full" maxW="1000px">
    <NavBarLayout defaultIndex={currentPage}>
      <NavBarLayout.Left>
        <DarkModeButton />
      </NavBarLayout.Left>
      <NavBarLayout.Links>
        <NavTabLink href="/">Home</NavTabLink>
        <NavTabLink href="/blog">Blog</NavTabLink>
      </NavBarLayout.Links>
    </NavBarLayout>
  </Box>
);

export default Navbar;
