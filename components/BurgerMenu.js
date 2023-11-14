import React from "react";
import styles from "../styles/BurgerMenu.module.scss";
import Link from "next/link";

const BurgerMenu = ({ showMenu }) => {
  return (
    <div
      className={
        styles.sidebar + " d-flex flex-column align-items-center gap-3"
      }
      style={{ transform: `rotateZ(${showMenu ? "0" : "90deg"})` }}
    >
      <Link href="/servicii">
        <span>
          <a className={styles.link + " m-0"}>Toate judetele</a>
        </span>
      </Link>
      <Link href="/infofaq">
        <span>
          <a className={styles.link + " m-0"}>Info & FAQ</a>
        </span>
      </Link>
      <Link href="/reclamatii">
        <span>
          <a className={styles.link + " m-0"}>Reclamatii</a>
        </span>
      </Link>
      <Link href="/inscriere">
        <span className="m-0 mt-5">
          <a className={styles.link}>Înregistrare gratuită</a>
        </span>
      </Link>
      <Link href="/donatii">
        <span>
          <a className={styles.link + " m-0"}>Donează pentru dezvoltare</a>
        </span>
      </Link>
    </div>
  );
};

export default BurgerMenu;
