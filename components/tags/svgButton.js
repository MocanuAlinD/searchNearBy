import React from "react";
import styles from "../../styles/tags/svgButton.module.scss";

const SvgButton = ({ children }) => {
  return (
    <button className={styles.container}>
      <svg
        viewBox="0 0 100% 100%"
        // xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        // stroke="white"
        // strokeWidth="1"
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
            <stop stopColor="#84fab0" offset="30%"></stop>
            <stop stopColor="#8fd3f4" offset="70%"></stop>
          </linearGradient>
        </defs>
        <circle id="circle" cx="50%" cy="100%" r="0" fill="url(#grad)" />
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
          {children}
        </text>
        ;
      </svg>
      {children}
    </button>
  );
};

export default SvgButton;

// <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle"></text>;
