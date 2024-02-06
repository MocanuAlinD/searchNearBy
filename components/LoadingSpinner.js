import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLoadSearch } from "../features/searchJudet/searchJudetSlice";
import styles from "../styles/comps/loadingSpinner.module.scss";

const LoadingSpinner = () => {
  const dispatch = useDispatch();
  const loadSearch = useSelector((state) => state.search.loadSearch);
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
      <button
        onClick={() => dispatch(setLoadSearch(!loadSearch))}
        className={styles.closeButton}
      >
        X
      </button>
    </div>
  );
};

export default LoadingSpinner;
