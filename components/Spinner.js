import React from "react";
import styles from "../styles/Spinner.module.css";

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
      {/* <p className={styles.text}>Cautare...</p> */}
    </div>
  );
};

export default LoadingSpinner;
