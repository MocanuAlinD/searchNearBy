import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomLink from "./CustomLink";
import { Button } from "./tags/Button";
import { setShowMenu } from "../features/searchJudet/searchJudetSlice";
import { Wrapper } from "./singleTags/elemetsCustom";
import IconSvg from "../components/tags/IconSvg";
import Image from "next/image";
import CustomIcon from "../components/tags/CustomIcon";
import styles from "../styles/comps/BurgerMenu.module.scss";

const BurgerMenu = () => {
  const dispatch = useDispatch();

  return (
    <div
      className={styles.sidebar}
      style={{
        display: useSelector((state) => state.search.showMenu)
          ? "flex"
          : "none",
      }}
    >
      <CustomIcon src="home" text="Home" />
      <CustomIcon src="map02" text="Toate judetele" />
      <CustomIcon src="info01" text="Info / FAQ" />
      <CustomIcon src="complaint03" text="Reclamatii" />
      <CustomIcon src="contact01" text="Contact" />
      <CustomIcon src="login" text="Log-in / Sign-up" />
      <CustomIcon src="registerBlue" text="Inregistrare" />
      <CustomIcon src="ask" text="Depune oferta" />
      <CustomIcon src="timer" text="Cereri active" />
      <CustomIcon src="donate01" text="Doneaza" />
      <CustomIcon src="test01" text="Test" />
    </div>
  );
};

export default BurgerMenu;
