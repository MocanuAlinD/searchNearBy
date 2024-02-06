import React from "react";
import { FaStar } from "react-icons/fa";
import styles from "../styles/comps/Stars.module.scss";


// in CardCautare.js
const Stars = ({ nos, size }) => {
  // nos => number integer:number of stars
  // size => number integer: size of the star
  return (
    <div className={styles.onlyStars}>
      {[...Array(5)].map((_, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input type="radio" name="rating" value={nos} />
            <FaStar
              className={styles.star}
              color={
                ratingValue <= nos
                  ? "var(--color-yellow)"
                  : "var(--color-2-light)"
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
