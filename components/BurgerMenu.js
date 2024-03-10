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
        <h4 className={styles.text}>Home</h4>
        <Image
          src="/icons/home.svg"
          width="30"
          height="30"
          alt="Picture of the author"
        />
      </div>

      <div className={styles.container}>
        <h4 className={styles.text}>Toate judetele</h4>
        <Image
          src="/icons/map01.svg"
          width="30"
          height="30"
          alt="Picture of the author"
        />
      </div>
      <div className={styles.container}>
        <h4 className={styles.text}>Info / FAQ</h4>
        <Image
          src="/icons/info01.svg"
          width="30"
          height="30"
          alt="Picture of the author"
        />
      </div>
      <div className={styles.container}>
        <h4 className={styles.text}>Reclamatii</h4>
        <Image
          src="/icons/complain.svg"
          width="30"
          height="30"
          alt="Picture of the author"
        />
      </div>
      <div className={styles.container}>
        <h4 className={styles.text}>Contact</h4>
        <Image
          src="/icons/whatsapp.svg"
          width="30"
          height="30"
          alt="Picture of the author"
        />
      </div>
      <div className={styles.container}>
        <h4 className={styles.text}>Log-in / Sign-up</h4>
        <Image
          src="/icons/login.svg"
          width="30"
          height="30"
          alt="Picture of the author"
        />
      </div>
      <div className={styles.container}>
        <h4 className={styles.text}>Inregistrare</h4>
        <Image
          src="/icons/add.svg"
          width="30"
          height="30"
          alt="Picture of the author"
        />
      </div>

      <div className={styles.container}>
        <h4 className={styles.text}>Depune cerere</h4>
        <Image
          src="/icons/donate.svg"
          width="30"
          height="30"
          alt="Picture of the author"
        />
      </div>
      <div className={styles.container}>
        <h4 className={styles.text}>
          Cereri active</h4>
        <Image
          src="/icons/donate.svg"
          width="30"
          height="30"
          alt="Picture of the author"
        />
      </div>
      <div className={styles.container}>
        <h4 className={styles.text}>Donează</h4>
        <Image
          src="/icons/donate.svg"
          width="30"
          height="30"
          alt="Picture of the author"
        />
      </div>
      <div className={styles.container}>
        <h4 className={styles.text}>Test</h4>
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
