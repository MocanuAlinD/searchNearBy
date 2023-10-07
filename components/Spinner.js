import React from "react";
import styles from "../styles/Spinner.module.scss";

const LoadingSpinner = ({ setLoadSearch }) => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
      <button
        onClick={() => setLoadSearch((prev) => !prev)}
        className={styles.closeButton}
      >
        X
      </button>
    </div>
  );
};

export default LoadingSpinner;
