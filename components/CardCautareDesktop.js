import React from "react";
import styles from "../styles/comps/cardCautareDesktop.module.scss";

const CardCautareDesktop = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
        <div className={styles.bottom}></div>
        <div className={styles.top}></div>
          <div className={styles.card1}>card1</div>
          <div className={styles.card2}>card2</div>
          <span className={styles.bottomFront}></span>
          <span className={styles.bottomRight}></span>
        </div>
      </div>
    </div>
  );
};

export default CardCautareDesktop;
