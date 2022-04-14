import React from "react";
import styles from "../styles/linkbutton.module.scss";
import Link from "next/link";

const LinkButton = ({name}) => {
  return (
    <div className={styles.linkContainer + " m-0 p-0 text-end"}>
      <Link href={`${name}`}>
        <a className={styles.alink}>Detalii</a>
      </Link>
    </div>
  );
};

export default LinkButton;
