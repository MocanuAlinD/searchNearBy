import React from "react";
import Image from "next/image";
import styles from "../../styles/comps/CustomImage.module.scss";

const CustomIcon = ({ src, size, text }) => {
  const sz = size ? size + "rem" : "2.5rem";
  return (
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
      <h4 className={styles.first}>{text ? text : "No text here"}</h4>
    </div>
  );
};

export default CustomIcon;
