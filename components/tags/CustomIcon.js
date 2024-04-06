import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/comps/CustomIcon.module.scss";

const CustomIcon = ({ src, size, text, href, delay, st, onClick }) => {
  const sz = size ? size + "rem" : "2.5rem";
  const { pathname } = useRouter();
  const activePath = pathname.slice(1);
  return (
    <Link href={href ? `/${href}` : "/"}>
      <div
        className={styles.container}
        onClick={onClick}
        style={{
          "--iconSize": sz ? sz : "2rem",
          "--stateWidth": `${st ? "100%" : sz}`,
          "--delay": `${st ? delay : delay}`,
          "--activeBorder":
            activePath === href ? "2px solid #80ed99" : "1px solid transparent",
        }}
      >
        <div
          className={styles.icon}
          style={{
            "--iconSrc": `url("/icons/${src ? src : "default"}.svg")`,
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
                <stop offset="0%" stopColor="#84fab0aa" />
                <stop offset="50%" stopColor="#8fd3f4" />
                <stop offset="100%" stopColor="#84fab0aa" />
              </linearGradient>
            </defs>
            <rect className={styles.rect} fill="url(#customIconGradient)" />
          </svg>
        </h4>
      </div>
    </Link>
  );
};

export default CustomIcon;
