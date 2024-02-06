import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/comps/noResult.module.scss";

const NoResults = () => {
  return (
    <div className={styles.container}>
      <h3>
        Nu există înregistrări în
        <strong>{`"${useSelector((state) => state.search.noResultsText)}"`}</strong>
      </h3>
    </div>
  );
};

export default NoResults;
