import React from "react";
import { FaStar } from "react-icons/fa";
import styles from "../styles/ratingMedia.module.scss";

const RagingMedia = ({ md }) => {
  return (
    <div className={styles.container}>
      <div className={styles.average}>
        <h4>{md} </h4>
        <span>&nbsp;din 5</span>
      </div>
      <div className={styles.stars}>
        {[...Array(5)].map((_, i) => {
          const newI = i + 1;
          return (
            <FaStar
              key={i}
              color={newI <= md ? "var(--color-yellow)" : "var(--color-light)"}
              size="15"
              className={styles.star}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RagingMedia;
