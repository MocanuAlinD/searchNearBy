import React from "react";
import styles from "../styles/BurgerMenu.module.scss";
import { useSelector } from "react-redux";
import CustomLink from "./CustomLink";
import { ButtonWithIcon } from "./tags/ButtonWithIcon";

const BurgerMenu = () => {
  return (
    <div
      className={
        styles.sidebar + " d-flex flex-column align-items-center gap-3"
      }
      style={{
        transform: `rotateZ(${
          useSelector((state) => state.search.showMenu) ? "0" : "90deg"
        })`,
      }}
    >
      <ButtonWithIcon>Inchide</ButtonWithIcon>
      <CustomLink link="/" text="Home" />
      <CustomLink link="/test" text="test" />
      <CustomLink link="/servicii" text="Toate judetele" />
      <CustomLink link="/infofaq" text="Info si FAQ" />
      <CustomLink link="/reclamatii" text="Reclamatii" />
      <CustomLink link="/contact" text="Contact" />
      <CustomLink link="/login" text="Log-in si sign-up" />
      <CustomLink link="/inscriere" text="Inregistrare gratuita" />
      <CustomLink link="/donatii" text="Doneaza pentru dezvoltare" />
      <CustomLink link="/landingPage" text="Landing Page" />
      <CustomLink link="/cerere_oferte" text="Depune oferta" />
      <CustomLink link="/cereriCurente" text="Vezi cereri active" />
    </div>
  );
};

export default BurgerMenu;
