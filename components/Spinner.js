import React from "react";
import styles from "../styles/Spinner.module.scss";
import { useSelector, useDispatch } from "react-redux";

const LoadingSpinner = () => {
  const dispatch = useDispatch();
  const loadSearch = useSelector((state) => state.search.loadSearch);
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
      <button
        onClick={() => dispatch(setLoadSearch(loadSearch))}
        className={styles.closeButton}
      >
        X
      </button>
    </div>
  );
};

export default LoadingSpinner;
