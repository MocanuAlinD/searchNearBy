import React, { useState } from "react";
import styles from "../styles/SortItems.module.scss";
import { BsSortNumericUpAlt, BsSortNumericUp } from "react-icons/bs";
import { HiSortDescending, HiSortAscending } from "react-icons/hi";
import { MdRadioButtonUnchecked } from "react-icons/md";

const SortItems = () => {
  const [allChecked, setAllChecked] = useState(false);
  const checkAlin = (e) => {
    console.log(e.target.value);
    setAllChecked((prev) => !prev);
  };
  return (
    <div className={styles.container + " m-0 p-0 mb-3"}>
      <div className={styles.outerWrapper}>
        <div className={styles.wrapper}>
          <h3>Arata tot</h3>
          {/* <div className={styles.all}> */}
            <input
              type="checkbox"
              value="all"
              checked={allChecked}
              onChange={(e) => checkAlin(e)}
            />
          {/* </div> */}
        </div>
        <div className={styles.wrapper + " " + styles.tarif}>
          <h3>Tarif</h3>
          <div className={styles.iconsContainer}>
            {/* <div className={styles.iconContainer}> */}
            <HiSortDescending className={styles.icon} />
            <input type="radio" name="tarif" checked={true} />
            {/* </div> */}
            {/* <div className={styles.iconContainer}> */}
            <HiSortAscending className={styles.icon} />
            <input type="radio" name="tarif" />
            {/* </div> */}
          </div>
        </div>
        <div className={styles.wrapper}>
          <h3>Peste program</h3>
          {/* <div className={styles.iconsContainer}> */}
          <input type="checkbox" name="all" />
          {/* </div> */}
        </div>
        <div className={styles.wrapper}>
          <h3>Urgente 24/7</h3>
          {/* <div className={styles.iconsContainer}> */}
          <input type="checkbox" name="all" />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default SortItems;
