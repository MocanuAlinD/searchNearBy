import React from "react";
import styles from "../../styles/comps/OnOff.module.scss";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

const OnOff = ({ size }) => {
  return (
    <div className={styles.main} style={{ "--size": size ? size : "1rem" }}>
      <span>alin</span>
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

export default OnOff;
