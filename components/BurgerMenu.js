import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomLink from "./CustomLink";
import { Button } from "./tags/Button";
import { setShowMenu } from "../features/searchJudet/searchJudetSlice";
import { Wrapper } from "./singleTags/elemetsCustom";
import IconSvg from "../components/tags/IconSvg";
import Image from "next/image";
import styles from "../styles/comps/BurgerMenu.module.scss";

const BurgerMenu = () => {
  const dispatch = useDispatch();

  return (
    <div
      className={styles.sidebar}
      style={{
        clipPath: `polygon(0 0, 100% 0, ${
          useSelector((state) => state.search.showMenu)
            ? "100% 100%, 0 100%"
            : "100% 0, 0 0"
        })`,
      }}
    >
      <div className={styles.container}>
        <p>Home</p>
        <Image
          src="/icons/house01.svg"
          width="30"
          height="30"
          alt="Picture of the author"
        />
      </div>
      
      <div className={styles.container}>
        <p>Toate judetele</p>
        <Image
          src="/icons/map01.svg"
          width="30"
          height="30"
          alt="Picture of the author"
        />
      </div>
      <div className={styles.container}>
        <p>Info / FAQ</p>
        <Image
          src="/icons/info01.svg"
          width="30"
          height="30"
          alt="Picture of the author"
        />
      </div>
      <div className={styles.container}>
        <p>Reclamatii</p>
        <Image
          src="/icons/complain.svg"
          width="30"
          height="30"
          alt="Picture of the author"
        />
      </div>
      <div className={styles.container}>
        <p>Contact</p>
        <Image
          src="/icons/whatsapp.svg"
          width="30"
          height="30"
          alt="Picture of the author"
        />
      </div>
      <div className={styles.container}>
        <p>Log-in / sign-up</p>
        <Image
          src="/icons/login.svg"
          width="30"
          height="30"
          alt="Picture of the author"
        />
      </div>
      <div className={styles.container}>
        <p>Inregistrare</p>
        <Image
          src="/icons/add.svg"
          width="30"
          height="30"
          alt="Picture of the author"
        />
      </div>

      <div className={styles.container}>
        <p>Depune cerere</p>
        <IconSvg icon="add_document.png" />
      </div>
      <div className={styles.container}>
        <p>Cereri active</p>
        <IconSvg icon="document_active.png" />
      </div>
      <div className={styles.container}>
        <p>Donează</p>
        <Image
          src="/icons/donate.svg"
          width="30"
          height="30"
          alt="Picture of the author"
        />
      </div>
      <div className={styles.container}>
        <p>Test</p>
        <Image
          src="/icons/test.svg"
          width="30"
          height="30"
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};

export default BurgerMenu;
