import React from "react";
import Link from "next/link";
import styles from "../../styles/comps/CustomIcon.module.scss";

const CustomIcon = ({ src, size, text, href }) => {
  const sz = size ? size + "rem" : "2.5rem";
  return (
    <Link href={href ? `/${href}` : "/"}>
      <div
        className={styles.container}
        style={{ "--iconSize": sz ? sz : "2rem" }}
      >
        <div
          className={styles.icon}
          style={{
            "--iconSize": sz,
            "--iconSrc": `url("/icons/${src ? src : "add"}.svg")`,
          }}
        ></div>
        <h4 className={styles.text}>
          {text ? text : "No text here"}
          <svg viewBox="0 0 100% 100%">
            <defs>
              <linearGradient id="myGradient" gradientTransform="rotate(30)">
                <stop offset="0%" stopColor="#84fab0" />
                <stop offset="100%" stopColor="#8fd3f4" />
              </linearGradient>
            </defs>
            <rect
              className={styles.rect}
              // x="0%"
              // y="0%"
              width="100%"
              height="100%"
              fill="url(#myGradient)"
            />
          </svg>
        </h4>
      </div>
    </Link>
  );
};

export default CustomIcon;
