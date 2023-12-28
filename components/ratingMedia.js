import React from "react";
import styles from "../styles/ratingMedia.module.scss";
import Stars from "../components/Stars.js";

const RagingMedia = ({ nos }) => {
  return (
    <div className={styles.container}>
      <div className={styles.average}>
        <h4>{nos} </h4>
        <span>&nbsp;din 5</span>
      </div>
      <Stars nos={nos} size="15" />
    </div>
  );
};

export default RagingMedia;
