import React from "react";
import styles from "../styles/SortItems.module.scss";

const SortItems = () => {
  return (
    <div className={styles.container + " m-0 p-0"}>
      <div className={styles.itemsContainer + " mx-2 my-3"}>
        <div className={styles.wrapper}>First</div>
        <div className={styles.wrapper}>Second</div>
        <div className={styles.wrapper}>Third</div>
        <div className={styles.wrapper}>Fourth</div>
      </div>
    </div>
  );
};

export default SortItems;
