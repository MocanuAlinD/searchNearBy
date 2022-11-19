import React, { useState } from "react";
import styles from "../styles/SortItems.module.scss";
import { HiSortDescending, HiSortAscending } from "react-icons/hi";

const SortItems = () => {
  const defaultChecks = {
    all: true,
    tarifAsc: false,
    tarifDesc: false,
    overtime: false,
    night: false,
  };
  const [allChecked, setAllChecked] = useState(defaultChecks);


  const handleToate = (e) => {
    setAllChecked(defaultChecks);
  };

  const handleTarif = (e) => {
    setAllChecked((prev)=>({...prev, all: false}))
    console.log(e)
    switch (e){
      case "asc": 
            setAllChecked((prev)=>({...prev, all: false, tarifDesc: false, tarifAsc: true}))
            break
      case "desc":
            setAllChecked((prev)=>({...prev, all: false, tarifDesc: true, tarifAsc: false}))
            break
      default:
        console.log('Invalid request')
    }
  };

  

  const handleOvertime =()=>{
    console.log('overtime')
    setAllChecked((prev)=>({...prev, all: false, overtime: !allChecked.overtime}))
  }

  const handleNight =() =>{
    console.log('night')
    setAllChecked({...allChecked, night: !allChecked.night})
  }

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
