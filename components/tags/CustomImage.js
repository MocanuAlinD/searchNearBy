import React from "react";
import Image from "next/image";
import styles from "../../styles/comps/CustomImage.module.scss";

const CustomImage = ({ src, sz, alt, text }) => {
  const size = sz ? sz : "2.5";
  return (
    <div
      className={styles.container}
      style={{ "--iconSize": size ? size + "rem" : "2rem" }}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={src}
          // width={size ? size * 15 : "27"}
          // height={size ? size * 15 : "27"}
          layout="fill"
          alt={
            alt
              ? alt
              : "If you can see this, then you can`t see the picture :))"
          }
        />
      </div>
      <h4>{text ? text : "No text here"}</h4>
    </div>
  );
};

export default CustomImage;
