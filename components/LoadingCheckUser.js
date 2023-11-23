import React from "react";
import styles from "../styles/loadingCheckUsers.module.scss";

const LoadingCheckUser = ({ changeLoadState }) => {
  return (
    <div className={styles.loadingCheck}>
      <h4>Se verifica daca mai exista acest nume de utilizator</h4>
      <span onClick={changeLoadState}>Inchide</span>
    </div>
  );
};

export default LoadingCheckUser;
