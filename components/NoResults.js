import React from "react";
import styles from "../styles/noResult.module.scss";

const NoResults = ({noRes}) => {
  return (
    <div className={styles.container}>
      <h3>Nu există înregistrări în <strong>{`"${noRes}"`}</strong></h3>
    </div>
  );
};

export default NoResults;
