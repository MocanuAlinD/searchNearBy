import React from "react";
import styles from "../../styles/comps/OnOff.module.scss";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { BiCheckbox } from "react-icons/bi";

const OnOff = ({ id, state, func, list, text, type, name, size }) => {
  return (
    <div className={styles.main} style={{ "--size": size ? size : "1rem" }}>
      <span htmlFor={id}>{text}</span>
      <div className={styles.container}>
        <input
          type={type}
          id={id ? id : "default"}
          name={name ? name : "defaultName"}
          checked={state}
          onChange={() => func(list && list)}
        />
        <label htmlFor={id ? id : "default"}>
          <div className={styles.face + " " + styles.front}>
            <BiCheckbox
              className={styles.icon + " " + styles.iconUnchecked}
            />
          </div>
          <div className={styles.face + " " + styles.back}>
            <ImCheckboxChecked
              className={styles.icon + " " + styles.iconChecked}
            />
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
