import React from "react";
import { Container } from "./singleTags/elemetsCustom";
import BurgerMenu from "./BurgerMenu";
import Navbar from "./Navbar";

const LayoutPage = ({ children }) => {
  return (
    <Container bg="var(--color-blue)">
      <Navbar />
      {children}
      <BurgerMenu />
    </Container>
  );
};

export default LayoutPage;
