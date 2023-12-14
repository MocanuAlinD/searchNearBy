import React from "react";
import styles from "../styles/BurgerMenu.module.scss";
import { useSelector } from "react-redux";
import CustomLink from "./CustomLink";

const BurgerMenu = () => {
  const showMenu = useSelector((state) => state.search.showMenu);

  return (
    <div
      className={
        styles.sidebar + " d-flex flex-column align-items-center gap-3"
      }
      style={{ transform: `rotateZ(${showMenu ? "0" : "90deg"})` }}
    >
      <CustomLink link="/" text="Home" />
      <CustomLink link="/test" text="test" />
      <CustomLink link="/servicii" text="Toate judetele" />
      <CustomLink link="/infofaq" text="Info si FAQ" />
      <CustomLink link="/reclamatii" text="Reclamatii" />
      <CustomLink link="/contact" text="Contact" />
      <CustomLink link="/login" text="Log-in si sign-up" />
      <CustomLink link="/inscriere" text="Inregistrare gratuita" />
      <CustomLink link="/donatii" text="Doneaza pentru dezvoltare" />
      <CustomLink link="/modifica-date" text="Modifica date" />
    </div>
  );
};

export default BurgerMenu;
