import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomLink from "./CustomLink";
import { Button } from "./tags/Button";
import { setShowMenu } from "../features/searchJudet/searchJudetSlice";
import { Wrapper } from "./singleTags/elemetsCustom";
import styles from "../styles/comps/BurgerMenu.module.scss";

const BurgerMenu = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper
      p="1rem 0"
      gap="1rem"
      ai="center"
      w="min(100%, 20rem)"
      className={styles.sidebar}
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
    </Wrapper>
  );
};

export default BurgerMenu;
