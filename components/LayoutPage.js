import React from "react";
import BurgerMenu from "./BurgerMenu";
import Navbar from "./Navbar";
import ScrollWatcher from "../components/ScrollWatcher";
import UserMenu from "./userMenu";
import { useRouter } from "next/router";
import ScrollToTop from "../components/ScrollToTop"
import styles from "../styles/comps/Layout.module.scss";
import Footer from "./Footer";

const LayoutPage = ({ children }) => {
  const { pathname } = useRouter();
  const toggleMenu = (percent) => {
    const userIcon = document.getElementById("userIcon");
    userIcon.style.transform = `translateY(${percent})`;
  };
  return (
    <div
      className={styles.container}
      style={{
        background:
          // pathname === "/" ? "var(--index-bg)" : "url(backgrounds/test.svg)",
          pathname === "/" ? "var(--index-bg)" : "var(--page-bg)",
      }}
    >
      <Navbar />
      {children}
      <BurgerMenu />
      <UserMenu close={toggleMenu} />
      <ScrollWatcher />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default LayoutPage;
