import React from "react";
import styles from "../../styles/tags/Button.module.scss";

export const Button = ({ children, icon, onClick, w, reset }) => {
  return (
    <button
      className={styles.button}
      style={{
        "--reset-bg": reset ? "transparent" : "var(--color-1-light)",
        "--hover-bg": reset ? "var(--color-yellow)" : "var(--color-2-dark)",
        "--color-hover": reset ? "var(--color-1-dark)" : "var(--color-light)",
        width: w ? w : "100%",
        // color: reset ? "var(--color-yellow)" : "var(--color-light)",
        // backgroundColor: reset ? "transparent" : "var(--color-1-dark)",
        border: reset ? "1px solid var(--color-yellow)" : "none",
      }}
      onClick={onClick}
    >
      {icon && icon}
      <span>{children}</span>
    </button>
  );
};
