import React, { useState, useEffect } from "react";
import styles from "../styles/pages/test.module.scss";

const Test = () => {
  const moc = () => {};

  return (
    <div className={styles.main}>
      <div className="d-flex flex-row gap-2">
        <button>click me</button>
        <button>check</button>
      </div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.bottom}>bottom</div>
          <div className={styles.top}>top</div>
          <div className={styles.card1}>card1</div>
          <div className={styles.card2}>card2</div>
        </div>
      </div>
    </div>
  );
};

export default Test;
