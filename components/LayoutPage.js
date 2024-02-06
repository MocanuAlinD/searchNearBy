import React from "react";
import BurgerMenu from "./BurgerMenu";
import Navbar from "./Navbar";
import ScrollWatcher from "../components/ScrollWatcher";

const LayoutPage = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <ScrollWatcher />
      {children}
      <BurgerMenu />
    </div>
  );
};

export default LayoutPage;
