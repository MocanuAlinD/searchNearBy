import React, { useState } from "react";
import styles from "../styles/SortItems.module.scss";
import {
  ImSortNumbericDesc,
  ImSortNumericAsc,
} from "react-icons/im";

const SortItems = ({ handleToate }) => {
  const initialValues = {
    toate: true,
    tarifAsc: false,
    tarifDesc: false,
    program: false,
    night: false,
  };

  const [state, setState] = useState(initialValues);

  const handleTarifAscLocal = () => {
    const tempState = {
      ...state,
      tarifAsc: true,
      tarifDesc: false,
      toate: false,
    };
    handleRest(tempState);
  };

  const handleTarifDescLocal = () => {
    const tempState = {
      ...state,
      tarifAsc: false,
      tarifDesc: true,
      toate: false,
    };
    handleRest(tempState);
  };

  const handleProgram = () => {
    const tempState = { ...state, program: !state.program, toate: false };
    handleRest(tempState);
  };

  const handleNightLocal = () => {
    const tempState = { ...state, night: !state.night, toate: false };
    handleRest(tempState);
  };

  const handleRest = (tempState) => {
    setState(tempState);
    handleToate(tempState);
  };

  return (
    <div className={styles.container + " m-0 p-0 mt-4 mb-2"}>
      <div className={styles.innerContainer}>
        <div className={styles.wrapper}>
          <button
            onClick={()=>handleRest(initialValues)}
            className={state.toate ? styles.active : ""}
          >
            Toate
          </button>
        </div>
        <div className={styles.wrapper}>
          <button
            onClick={handleTarifAscLocal}
            className={state.tarifAsc ? styles.active : ""}
          >
            Tarif <ImSortNumericAsc />
          </button>
        </div>
        <div className={styles.wrapper}>
          <button
            onClick={handleTarifDescLocal}
            className={state.tarifDesc ? styles.active : ""}
          >
            Tarif <ImSortNumbericDesc />
          </button>
        </div>
        <div className={styles.wrapper}>
          <button
            onClick={handleProgram}
            className={state.program ? styles.active : ""}
          >
            Program+
          </button>
        </div>
        <div className={styles.wrapper}>
          <button
            onClick={handleNightLocal}
            className={state.night ? styles.active : ""}
          >
            24/7
          </button>
        </div>
      </div>
    </div>
  );
};

export default SortItems;
