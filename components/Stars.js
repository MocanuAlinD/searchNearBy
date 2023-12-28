import React from "react";
import styles from "../styles/Stars.module.scss";
import { FaStar } from "react-icons/fa";
import { getDatabase, onValue, ref } from "firebase/database";

const Stars = ({ nos, size }) => {
  return (
    <div className={styles.onlyStars}>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input type="radio" name="rating" value={nos} />
            <FaStar
              className={styles.star}
              color={
                ratingValue <= nos
                  ? "var(--color-yellow)"
                  : "var(--color-darkish)"
              }
              size={size ? size : "10"}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Stars;
