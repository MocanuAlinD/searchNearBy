import React from "react";
import BurgerMenu from "./BurgerMenu";
import Navbar from "./Navbar";

const LayoutPage = ({ children }) => {
  return (
    <div
      className="d-flex flex-column min-vh-100"
      style={{ backgroundColor: "var(--color-blue-light)" }}
    >
      <Navbar />
      {children}
      <BurgerMenu />
    </div>
  );
};

export default LayoutPage;
