import React from "react";
import { ImCheckboxChecked } from "react-icons/im";
import { BiCheckbox } from "react-icons/bi";
import styles from "../../styles/comps/OnOff.module.scss";

const OnOff = ({
  id,
  state,
  func,
  list,
  text,
  type,
  name,
  icon,
  size,
  m,
  p,
  bg,
  fs,
  w,
}) => {
  return (
    <div
      className={styles.main}
      style={{
        "--size": size ? size : "1.25rem",
        margin: m ? m : "0.25rem 0",
        padding: p ? p : ".1rem .25rem",
        backgroundColor: bg ? bg : "var(--color-1-dark)",
        width: w ? w : "100%",
      }}
    >
      <input
        type={type ? type : "checkbox"}
        id={id ? id : "default"}
        name={name ? name : "defaultName"}
        checked={state && state}
        onChange={() => func && func(list && list)}
      />
      <label
        htmlFor={id ? id : "default"}
        style={{
          fontSize: fs ? fs : "calc(var(--size) * 0.6)",
          width: w ? w : "100%",
        }}
      >
        {text ? text : "name here"} {icon && icon}
      </label>
      <div className={styles.wrapper}>
        <div className={styles.iconContainer}>
          <div className={styles.face + " " + styles.front}>
            <BiCheckbox className={styles.icon + " " + styles.iconUnchecked} />
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
        </div>
      </div>
    </div>
  );
};

export default OnOff;
