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
        // display: useSelector((state) => state.search.showMenu)
        //   ? "flex"
        //   : "none",
        "--clip": useSelector((state) => state.search.showMenu)
          ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
          : "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      }}
    >
      <CustomIcon src="home" text="Home" />
      <CustomIcon src="statisticsRedBlue" text="Toate judetele" href="servicii" />
      <CustomIcon src="info" text="Info / FAQ" href="infofaq" />
      <CustomIcon src="complaint" text="Reclamatii" href="reclamatii" />
      <CustomIcon src="contact" text="Contact" href="contact" />
      <CustomIcon src="login" text="Log-in / Sign-up" href="login" />
      <CustomIcon src="registerBlue" text="Inregistrare" href="inscriere" />
      <CustomIcon src="ask" text="Depune oferta" href="depuneOferta" />
      <CustomIcon src="timer" text="Cereri active" href="cereriCurente" />
      <CustomIcon src="donate" text="Doneaza" href="donatii" />
      <CustomIcon src="test" text="Test" href="test" />
    </div>
  );
};

export default BurgerMenu;
