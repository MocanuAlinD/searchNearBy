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
          <svg className={styles.svg}>
            <defs>
              <linearGradient
                id="customIconGradient"
                gradientTransform="rotate(30)"
              >
                <stop offset="0%" stopColor="#84fab0" />
                <stop offset="100%" stopColor="#8fd3f4" />
              </linearGradient>
            </defs>
            <rect
              className={styles.rect}
              width="100%"
              height="100%"
              fill="url(#customIconGradient)"
            />
          </svg>
        </h4>
      </div>
    </Link>
  );
};

export default CustomIcon;
