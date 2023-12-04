import React from "react";
import { Container } from "./singleTags/elemetsCustom";
import BurgerMenu from "./BurgerMenu";
import Navbar from "./Navbar";

const LayoutPage = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      {children}
      <BurgerMenu />
    </div>
  );
};

export default LayoutPage;

// style={{ minHeight: "100vh" }}
