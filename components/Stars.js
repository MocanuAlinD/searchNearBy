import React from "react";
import { FaStar } from "react-icons/fa";
import styles from "../styles/comps/Stars.module.scss";

// in CardCautare.js
const Stars = ({ nos, size, full, bg, start, center, end, inactiveColor }) => {
  // nos => number integer:number of stars
  // size => number integer: size of the star
  return (
    <div
      className={styles.onlyStars}
      style={{
        width: full ? "100%" : "fit-content",
        backgroundColor: bg ? "var(--color-2-light)" : "transparent",
        justifyContent: start
          ? "flex-start"
          : center
          ? "center"
          : end
          ? "flex-end"
          : "center",
      }}
    >
      {[...Array(5)].map((_, i) => {
        const ratingValue = i + 1;
        return (
          <div key={i}>
            <input type="radio" name="rating" value={nos} />
            <FaStar
              className={styles.star}
              color={
                ratingValue <= nos
                  ? "var(--color-yellow)"
                  : inactiveColor
                  ? inactiveColor
                  : "var(--color-1-dark)"
              }
              size={size ? size : "10"}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Stars;
