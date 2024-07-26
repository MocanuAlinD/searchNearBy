import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/comps/Footer.module.scss";
import Link from "next/link";

const Footer = () => {
  const { pathname } = useRouter();

  return (
    <footer className={styles.container}>
      <div className={styles.linksContainer}>
        <div className={styles.footerColumn}>
          <Link href="/gdpr">
            <a>GDPR</a>
          </Link>
          <Link href="/">
            <a>Întrebări frecvente</a>
          </Link>
          <Link href="/">
            <a>Termeni și condiții</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>

        <div className={styles.footerColumn}>
          <Link href="/">
            <a>Despre noi</a>
          </Link>
          <Link href="/">
            <a>Cum folosesc platforma?</a>
          </Link>
          <Link href="/servicii">
            <a>Servicii / județ</a>
          </Link>
          <Link href="/sesizari">
            <a>Sesizări</a>
          </Link>
          <Link href="/informatii">
            <a>Informații</a>
          </Link>
        </div>
      </div>
      <div className={styles.author}>@Created by Mocanu Alin-Daniel</div>
    </footer>
  );
};

export default Footer;

// 3 coloane pe desktop, o coloana pe mobile
