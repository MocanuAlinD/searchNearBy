import React from "react";
import styles from "../../styles/tags/Button.module.scss";

export const Button = ({ children, icon, onClick, w, color, reset }) => {
  return (
    <button
      className={styles.button}
      style={{
        width: w ? w : "100%",
        color: color ? color : "var(--color-light)",
        backgroundColor: reset ? "transparent" : "var(--color-2-dark)",
        border: reset ? "1px solid var(--color-3-error)" : "none",
      }}
      onClick={onClick}
    >
      {icon && icon}
      <span>{children}</span>
    </button>
  );
};
