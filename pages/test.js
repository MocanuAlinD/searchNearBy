import React, { useState, useEffect } from "react";
import styles from "../styles/pages/test.module.scss";

const Test = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <span className={styles.span + " " + styles.one}>1</span>
          <span className={styles.span + " " + styles.two}>2</span>
          <span className={styles.span + " " + styles.three}>3</span>
          <span className={styles.span + " " + styles.four}>4</span>
          <span className={styles.span + " " + styles.five}>5</span>
          <span className={styles.span + " " + styles.six}>6</span>
        </div>
      </div>
    </div>
  );
};

export default Test;
