import React from "react";
import BurgerMenu from "./BurgerMenu";
import Navbar from "./Navbar";
import ScrollWatcher from "../components/ScrollWatcher";
import UserMenu from "./userMenu";
import { useRouter } from "next/router";
import ScrollToTop from "../components/ScrollToTop"
import styles from "../styles/comps/Layout.module.scss";

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
          pathname === "/" ? "var(--index-bg)" : "#030303",
      }}
    >
      <Navbar />
      {children}
      <BurgerMenu />
      <UserMenu close={toggleMenu} />
      <ScrollWatcher />
      <footer>
        <div
          className={
            pathname === "/"
              ? "text-center text-black py-4"
              : "text-center py-4"
          }
        >
          <div>Muta in footer: info/faq, reclamatii, contact, donatii</div>
          <div>Sterge din meniu: toate judetele, test</div>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  );
};

export default LayoutPage;
