import React, { useState } from "react";
import styles from "../styles/SortItems.module.scss";
import { ImSortNumbericDesc, ImSortNumericAsc } from "react-icons/im";
import { HiSortDescending } from "react-icons/hi";

const SortItems = ({ handleToate, listLen }) => {
  const initialValues = {
    toate: true,
    tarifAsc: false,
    tarifDesc: false,
    dataAsc: false,
    dataDesc: false,
    program: false,
    night: false,
    website: false,
    weekend: false,
  };

  const [state, setState] = useState(initialValues);

  const handleTarifAscLocal = () => {
    const tempState = {
      ...state,
      tarifAsc: true,
      tarifDesc: false,
      dataAsc: false,
      dataDesc: false,
      toate: false,
    };
    handleRest(tempState);
  };

  const handleTarifDescLocal = () => {
    const tempState = {
      ...state,
      tarifAsc: false,
      tarifDesc: true,
      dataAsc: false,
      dataDesc: false,
      toate: false,
    };
    handleRest(tempState);
  };

  const handleDataAscLocal = () => {
    const tempState = {
      ...state,
      tarifAsc: false,
      tarifDesc: false,
      dataAsc: true,
      dataDesc: false,
      toate: false,
    };
    handleRest(tempState);
  };
  const handleDataDescLocal = () => {
    const tempState = {
      ...state,
      tarifAsc: false,
      tarifDesc: false,
      dataAsc: false,
      dataDesc: true,
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

  const handleWebsite = () => {
    const tempState = { ...state, website: !state.website, toate: false };
    handleRest(tempState);
  };

  const handleWeekend = () => {
    const tempState = { ...state, weekend: !state.weekend, toate: false };
    handleRest(tempState);
  };

  const handleRest = (tempState) => {
    setState(tempState);
    handleToate(tempState);
  };

  return (
    <div className={styles.container + " sticky-md-top"}>
      <div className={styles.wrapper}>
        <div className={styles.row}>
          <h4 className="w-100 text-center">
            {listLen && listLen > 5
              ? listLen + " rezultate gasite"
              : listLen + " gasit"}
          </h4>
        </div>
        {/* <div className={styles.row}>
          <h4 className="w-100 text-center">Filtreaza</h4>
        </div> */}
        <div className={styles.row}>
          <label htmlFor="toate">Fara filtre</label>
          <input
            type="checkbox"
            id="toate"
            checked={state.toate}
            onChange={() => handleRest(initialValues)}
          />
        </div>
        <div className={styles.row}>
          <h4>Sorteaza</h4>
        </div>
        <div className={styles.row}>
          <label htmlFor="tarifAsc">
            Tarif &nbsp;
            <ImSortNumericAsc />{" "}
          </label>
          <input
            type="radio"
            id="tarifAsc"
            name="sortBy"
            checked={state.tarifAsc}
            onChange={handleTarifAscLocal}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="tarifDesc">
            Tarif &nbsp;
            <ImSortNumbericDesc />{" "}
          </label>
          <input
            type="radio"
            id="tarifDesc"
            name="sortBy"
            checked={state.tarifDesc}
            onChange={handleTarifDescLocal}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="dataAsc">Data recenta</label>
          <input
            type="radio"
            name="sortBy"
            id="dataAsc"
            checked={state.dataAsc}
            onChange={handleDataAscLocal}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="dataDesc">Data veche</label>
          <input
            type="radio"
            name="sortBy"
            id="dataDesc"
            checked={state.dataDesc}
            onChange={handleDataDescLocal}
          />
        </div>

        <div className={styles.row}>
          <h4>Filtre</h4>
        </div>
        <div className={styles.row}>
          <label htmlFor="program">Dupa 16:00</label>
          <input
            type="checkbox"
            id="program"
            checked={state.program}
            onChange={handleProgram}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="night">Urgente 24/7</label>
          <input
            type="checkbox"
            id="night"
            checked={state.night}
            onChange={handleNightLocal}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="website">Website</label>
          <input
            type="checkbox"
            id="website"
            checked={state.website}
            onChange={handleWebsite}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="weekend">Weekend</label>
          <input
            type="checkbox"
            id="weekend"
            checked={state.weekend}
            onChange={handleWeekend}
          />
        </div>
      </div>
    </div>
  );
};

export default SortItems;
