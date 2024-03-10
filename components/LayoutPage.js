import React from "react";
import BurgerMenu from "./BurgerMenu";
import Navbar from "./Navbar";
import ScrollWatcher from "../components/ScrollWatcher";
import styles from "../styles/comps/Layout.module.scss";
import UserMenu from "./userMenu";

const LayoutPage = ({ children }) => {
  const toggleMenu = (percent) => {
    const userIcon = document.getElementById("userIcon");
    userIcon.style.transform = `translateY(${percent})`;
  };
  return (
    <div className={styles.container}>
      <Navbar />
      <ScrollWatcher />
      {children}
      <BurgerMenu />
      <UserMenu close={toggleMenu} />
    </div>
  );
};

export default LayoutPage;
