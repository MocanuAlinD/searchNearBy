import React from "react";
import BurgerMenu from "./BurgerMenu";
import Navbar from "./Navbar";

const LayoutPage = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div
        className="d-flex flex-grow-1 justify-content-center align-items-start m-0 p-0 border border-danger"
        style={{ backgroundColor: "var(--color-blue-light)" }}
      >
        {children}
      </div>
      <BurgerMenu />
    </div>
  );
};

export default LayoutPage;
