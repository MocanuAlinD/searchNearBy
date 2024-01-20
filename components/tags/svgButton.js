import React from "react";
import styles from "../../styles/tags/svgButton.module.scss";

const SvgButton = ({ onClick, children, name, bg, bb, reset }) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      name={name}
      style={{
        backgroundColor: reset && "transparent",
      }}
    >
      <svg
        viewBox="0 0 100% 100%"
        // xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{
          background: reset
            ? "none"
            : bg
            ? bg
            : "linear-gradient(to bottom right, #434343, #000000)",
          // backgroundColor: reset && "transparent",
          border: reset && "1px solid var(--color-3-error)",
          borderBottom: reset ? "none" : "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <defs>
          <linearGradient
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
            gradientUnits="userSpaceOnUse"
            id="grad"
          >
            <stop id={styles.stop1} stopColor="#84fab0" offset="30%"></stop>
            <stop id={styles.stop2} stopColor="#8fd3f4" offset="70%"></stop>
          </linearGradient>
        </defs>
        <circle id="ccircle" cx="50%" cy="100%" r="0" fill="url(#grad)" />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          style={{
            "--reset": reset ? "var(--color-3-error" : "var(--color-1-dark)",
          }}
        >
          {children}
        </text>
      </svg>
      {children}
    </button>
  );
};

export default SvgButton;
