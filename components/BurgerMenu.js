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
      gap="0.5rem"
      ai="center"
      w="100%"
      br="0"
      className={styles.sidebar}
      style={{
        clipPath: `polygon(0 0, 100% 0, ${
          useSelector((state) => state.search.showMenu)
            ? "100% 100%, 0 100%"
            : "100% 0, 0 0"
        })`,
      }}
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
      <CustomLink link="/landingPage" text="Landing Page" />
      <CustomLink link="/cerere_oferte" text="Depune oferta" />
      <CustomLink link="/cereriCurente" text="Vezi cereri active" />
      <Button
        reset
        w="min(95%, 15rem)"
        onClick={() => dispatch(setShowMenu(false))}
      >
        Inchide
      </Button>
    </Wrapper>
  );
};

export default BurgerMenu;
