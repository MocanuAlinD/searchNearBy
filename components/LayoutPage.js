import React from "react";
import BurgerMenu from "./BurgerMenu";
import Navbar from "./Navbar";
import ScrollWatcher from "../components/ScrollWatcher";
import styles from "../styles/comps/Layout.module.scss";

const LayoutPage = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <ScrollWatcher />
      {children}
      <BurgerMenu />
    </div>
  );
};

export default LayoutPage;
