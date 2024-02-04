import React from "react";
import Link from "next/link";
import styles from "../styles/linkbutton.module.scss";

const LinkButton = ({ name }) => {
  return (
    <div className={styles.linkContainer}>
      <Link href={`${name}`}>
        <a className={styles.alink}>Detalii</a>
      </Link>
    </div>
  );
};

export default LinkButton;
