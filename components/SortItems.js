import React from "react";
import styles from "../styles/SortItems.module.scss";
import { HiSortDescending, HiSortAscending } from "react-icons/hi";

const SortItems = ({handleToate, handleTarif, handleOvertime, handleNight, allChecked}) => {

  return (
    <div className={styles.container + " m-0 p-0 mb-3"}>
      <div className={styles.outerWrapper}>
        <div className={styles.wrapper}>
          <label for="all">Toate</label>
          <input
            id="all"
            type="checkbox"
            value="all"
            checked={allChecked.all}
            onChange={(e) => handleToate(e)}
          />
        </div>
        <div className={styles.wrapper + " " + styles.tarif}>
          <h3>Tarif</h3>
          <div className={styles.iconsContainer}>
            <HiSortDescending className={styles.icon} />
            <input
              name="tarif"
              type="radio"
              value="desc"
              checked={allChecked.tarifDesc}
              onChange={(e) => handleTarif(e.target.value)}
            />
            <HiSortAscending className={styles.icon} />
            <input
              name="tarif"
              type="radio"
              value="asc"
              checked={allChecked.tarifAsc}
              onChange={(e) => handleTarif(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.wrapper}>
          <label for="overtime">Program+</label>
          <input type="checkbox" id="overtime" checked={allChecked.overtime} onChange={handleOvertime} />
        </div>
        <div className={styles.wrapper}>
          <label for="night">24/7</label>
          <input type="checkbox" id="night" checked={allChecked.night} onChange={handleNight} />
        </div>
      </div>
    </div>
  );
};

export default SortItems;
