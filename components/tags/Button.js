import React from "react";
import styles from "../../styles/tags/Button.module.scss";

export const Button = ({ children, icon, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {icon && icon}
      <span>{children}</span>
    </button>
  );
};
