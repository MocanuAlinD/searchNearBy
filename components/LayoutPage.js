import React from "react";
import BurgerMenu from "./BurgerMenu";
import Navbar from "./Navbar";
import ScrollWatcher from "../components/ScrollWatcher";

const LayoutPage = ({ children }) => {
  return (
    <div
      className="d-flex flex-column min-vh-100"
      style={{ backgroundColor: "var(--color-1-light)" }}
    >
      <ScrollWatcher />
      <Navbar />
      {children}
      <BurgerMenu />
    </div>
  );
};

export default LayoutPage;
