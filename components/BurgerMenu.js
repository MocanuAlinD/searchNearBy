import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomLink from "./CustomLink";
import { Button } from "./tags/Button";
import { setShowMenu } from "../features/searchJudet/searchJudetSlice";
import { Wrapper } from "./singleTags/elemetsCustom";
import IconSvg from "../components/tags/IconSvg";
import Image from "next/image";
import CustomImage from "../components/tags/CustomImage";
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
      <CustomImage src="/icons/home.svg" text="Home" />
      <CustomImage src="/icons/map01.svg" text="Toate judetele" />
      <CustomImage src="/icons/info01.svg" text="Info / FAQ" />
      <CustomImage src="/icons/complaint02.svg" text="Reclamatii" />
      <CustomImage src="/icons/whatsapp.svg" text="Contact" />
      <CustomImage src="/icons/login.svg" text="Log-in / Sign-up" />
      <CustomImage src="/icons/register.svg" text="Inregistrare" />
      <CustomImage src="/icons/writeBlue.svg" text="Depune oferta" />
      <CustomImage src="/icons/whatsapp.svg" text="Cereri active" />
      <CustomImage src="/icons/money.svg" text="Doneaza" />
      <CustomImage src="/icons/whatsapp.svg" text="Test" />
    </div>
  );
};

export default BurgerMenu;
