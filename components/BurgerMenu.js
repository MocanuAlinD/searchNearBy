import React from "react";
import styles from "../styles/BurgerMenu.module.scss";
import Link from "next/link";
import { useSelector } from "react-redux";

const BurgerMenu = () => {
  const showMenu = useSelector((state) => state.showMenu);
  return (
    <div
      className={
        styles.sidebar + " d-flex flex-column align-items-center gap-3"
      }
      style={{ transform: `rotateZ(${showMenu ? "0" : "90deg"})` }}
    >
      <Link href="/servicii" passHref>
        <span>
          <a className={styles.link + " m-0"}>Toate judetele</a>
        </span>
      </Link>
      <Link href="/infofaq" passHref>
        <span>
          <a className={styles.link + " m-0"}>Info & FAQ</a>
        </span>
      </Link>
      <Link href="/reclamatii" passHref>
        <span>
          <a className={styles.link + " m-0"}>Reclamatii</a>
        </span>
      </Link>
      <Link href="/contact" passHref>
        <span>
          <a className={styles.link + " m-0"}>Contact</a>
        </span>
      </Link>
      <Link href="/login" passHref>
        <span>
          <a className={styles.link + " m-0"}>Login & Sign up</a>
        </span>
      </Link>
      <Link href="/inscriere" passHref>
        <span className="m-0 mt-5">
          <a className={styles.link}>Înregistrare gratuită</a>
        </span>
      </Link>
      <Link href="/donatii" passHref>
        <span>
          <a className={styles.link + " m-0"}>Donează pentru dezvoltare</a>
        </span>
      </Link>
    </div>
  );
};

export default BurgerMenu;
