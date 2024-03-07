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
      w="min(97%, 15rem)"
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
      <CustomLink link="/infofaq" text="Info / FAQ" />
      <CustomLink link="/reclamatii" text="Reclamatii" />
      <CustomLink link="/contact" text="Contact" />
      <CustomLink link="/login" text="Log-in / sign-up" />
      <CustomLink link="/inscriere" text="Inregistrare" />
      <CustomLink link="/landingPage" text="Landing Page" />
      <CustomLink link="/depune_cerere" text="Depune oferta" />
      <CustomLink link="/cereriCurente" text="Cereri active" />
      <CustomLink link="/donatii" text="Suport" />
      <Button
        reset
        w="var(--button-width)"
        onClick={() => dispatch(setShowMenu(false))}
      >
        Inchide
      </Button>
    </Wrapper>
  );
};

export default BurgerMenu;
