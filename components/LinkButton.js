import React from "react";
import Link from "next/link";
import styles from "../styles/linkbutton.module.scss";

const LinkButton = ({ href, text }) => {
  return (
    <Link href={`${href}`}>
      <a className={styles.alink}>{text}</a>
    </Link>
  );
};

export default LinkButton;
