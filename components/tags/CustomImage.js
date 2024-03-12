import React from "react";
import Image from "next/image";
import styles from "../../styles/comps/CustomImage.module.scss";

const CustomImage = ({ src, size, alt, text }) => {
  return (
    <div className={styles.container}>
      <h4>{text ? text : "No text here"}</h4>
      <div className={styles.imageWrapper}>
        <Image
          src={src}
          // width={size ? size : "50"}
          // height={size ? size : "50"}
          layout="fill"
          alt={
            alt
              ? alt
              : "If you can see this, then you can`t see the picture :))"
          }
        />
      </div>
    </div>
  );
};

export default CustomImage;
