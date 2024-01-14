import React from "react";
import styles from "../../styles/tags/Button.module.scss";

export const Button = ({ children, icon, onClick, w }) => {
  return (
    <button
      className={styles.button}
      style={{
        width: w ? w : "100%",
      }}
      onClick={onClick}
    >
      {icon && icon}
      <span>{children}</span>
    </button>
  );
};
