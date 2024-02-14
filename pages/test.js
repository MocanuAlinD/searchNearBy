import React, { useState, useEffect } from "react";
import styles from "../styles/pages/test.module.scss";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

const Test = () => {
  const moc = () => {};

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <input type="checkbox" id="input" />
        <label htmlFor="input">
          <div className={styles.face + " " + styles.front}>
            <ImCheckboxChecked className={styles.icon} />
          </div>
          <div className={styles.face + " " + styles.back}>
            <ImCheckboxUnchecked className={styles.icon} />
          </div>
          <div className={styles.face + " " + styles.left}></div>
          <div className={styles.face + " " + styles.right}></div>
          <div className={styles.face + " " + styles.top}></div>
          <div className={styles.face + " " + styles.bottom}></div>
        </label>
      </div>
    </div>
  );
};

export default Test;
