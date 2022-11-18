import React from "react";
import styles from "../styles/SortItems.module.scss";
import { BsSortNumericUpAlt, BsSortNumericUp } from "react-icons/bs";

const SortItems = () => {
  return (
    <div className={styles.container + " m-0 p-0"}>
      <div className={styles.outerWrapper}>
        <div className={styles.wrapper}>
          <h3>Tarif: </h3>
          <select>
            <option value="asc">Crescator</option>
            <option value="desc">Descrescator</option>
          </select>
        </div>
        <div className={styles.wrapper}>
          <h3>Disponibil peste program: </h3>
          <select>
            <option value="overtimeNo">Nu</option>
            <option value="overtimeYes">Da</option>
          </select>
        </div>
        <div className={styles.wrapper}>
          <h3>Urgente 24/7: </h3>
          <select>
            <option value="nightNo">Nu</option>
            <option value="nightYes">Da</option>
          </select>
        </div>
      </div>
      {/* <div
        className={
          styles.wrapper + " d-flex w-100 mx-2 p-2 justify-content-start"
        }
      >
        <h3 className="me-3">Sorteaza: </h3>
        <select className="w-75">
          <optgroup label="Tarif"></optgroup>
          <option value="asc">Crescator</option>
          <option value="desc">Descrescator</option>
          <optgroup label="Disponibil peste orele de program"></optgroup>
          <option value="overtimeYes">Da</option>
          <optgroup label="Urgente pe timp de noapte"></optgroup>
          <option value="nightYes">Da</option>
        </select>
      </div> */}
    </div>
  );
};

export default SortItems;
