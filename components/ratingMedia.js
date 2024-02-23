import React from "react";
import Stars from "../components/Stars.js";
import styles from "../styles/comps/ratingMedia.module.scss";



const RagingMedia = ({ nos }) => {
  // nos => number integer
  return (
    <div className={styles.container}>
      <div className={styles.average}>
        <h4>{nos} </h4>
        <span>&nbsp;din 5</span>
      </div>
      <Stars nos={nos} size="15" full center />
    </div>
  );
};

export default RagingMedia;
