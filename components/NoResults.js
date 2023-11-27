import React from "react";
import styles from "../styles/noResult.module.scss";
import { useSelector } from "react-redux";

const NoResults = () => {
  return (
    <div className={styles.container}>
      <h3>
        Nu există înregistrări în{" "}
        <strong>{`"${useSelector((state) => state.noResultsText)}"`}</strong>
      </h3>
    </div>
  );
};

export default NoResults;
