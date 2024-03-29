import React from "react";
import styles from "../../styles/tags/svgButton.module.scss";

const SvgButton = ({ onClick, children, name, bg, reset }) => {
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
        style={{
          background: reset
            ? "none"
            : bg
            ? bg
            : "linear-gradient(to bottom right, #434343, #000)",
          border: reset ? "none" : "none",
          borderBottom: reset
            ? "1px solid var(--error)"
            : "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <defs>
          <linearGradient
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
            gradientUnits="userSpaceOnUse"
            id="normalGradient"
          >
            <stop stopColor="#84fab0" offset="30%"></stop>
            <stop stopColor="#8fd3f4" offset="70%"></stop>
          </linearGradient>
          <linearGradient
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
            gradientUnits="userSpaceOnUse"
            id="resetGradient"
          >
            <stop stopColor="#fa709a" offset="30%"></stop>
            <stop stopColor="#fee140" offset="70%"></stop>
          </linearGradient>
        </defs>
        <circle
          cx="50%"
          cy="100%"
          r="0"
          fill={reset ? "url(#resetGradient)" : "url(#normalGradient)"}
        />
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
          {children}
        </text>
      </svg>
      {children}
    </button>
  );
};

export default SvgButton;
