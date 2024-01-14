import React from "react";
import styles from "../styles/BurgerMenu.module.scss";
import { useSelector, useDispatch } from "react-redux";
import CustomLink from "./CustomLink";
import { Button } from "./tags/Button";
import { setShowMenu } from "../features/searchJudet/searchJudetSlice";

const BurgerMenu = () => {
  const dispatch = useDispatch();

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
      <Button w="15rem" onClick={() => dispatch(setShowMenu(false))}>
        Inchide
      </Button>
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
