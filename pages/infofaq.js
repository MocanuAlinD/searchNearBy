import React from "react";
import styles from "../styles/infofaq.module.scss";
import BackButton from "../components/BackButton";

const Info = () => {
  return (
    <div
      className={
        styles.container +
        " d-flex flex-column m-0 p-0 flex-grow-1 min-vh-100"
      }
    >
      <div className="row col-12 m-0 p-0 ps-1 ms-2 mt-2 w-auto">
        <BackButton url="/" text="Pagina principala" />
      </div>
      <div
        className={
          styles.contentContainer +
          " m-0 p-0 d-flex flex-grow-1 justify-content-center align-items-start pt-5"
        }
      >
        <h2 className={styles.title}>Info & FAQ</h2>
        <hr />
      </div>
    </div>
  );
};

export default Info;
