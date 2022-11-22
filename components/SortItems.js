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

  const handleDataAscLocal = () => {
    const tempState = {
      ...state,
      dataAsc: true,
      dataDesc: false,
      toate: false,
    };
    handleRest(tempState);
  };
  const handleDataDescLocal = () => {
    const tempState = {
      ...state,
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
        <div className={styles.row}>
          <h4 className="w-100 text-center">Filtreaza</h4>
        </div>
        <div className={styles.row}>
          <label htmlFor="toate">Toate</label>
          <input
            type="checkbox"
            id="toate"
            checked={state.toate}
            onChange={() => handleRest(initialValues)}
          />
        </div>
        <div className={styles.row}>
          <h4>Tarif</h4>
        </div>
        <div className={styles.row}>
          <label htmlFor="tarifAsc">
            <ImSortNumericAsc />{" "}
          </label>
          <input
            type="radio"
            id="tarifAsc"
            name="tarif"
            checked={state.tarifAsc}
            onChange={handleTarifAscLocal}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="tarifDesc">
            <ImSortNumbericDesc />{" "}
          </label>
          <input
            type="radio"
            id="tarifDesc"
            name="tarif"
            checked={state.tarifDesc}
            onChange={handleTarifDescLocal}
          />
        </div>

        <div className={styles.row}>
          <h4>Data</h4>
        </div>
        <div className={styles.row}>
          <label htmlFor="dataAsc">Cea mai recenta</label>
          <input
            type="radio"
            name="data"
            id="dataAsc"
            checked={state.dataAsc}
            onChange={handleDataAscLocal}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="dataDesc">Cea mai veche</label>
          <input
            type="radio"
            name="data"
            id="dataDesc"
            checked={state.dataDesc}
            onChange={handleDataDescLocal}
          />
        </div>

        <div className={styles.row}>
          <h4>Disponibil peste program</h4>
        </div>
        <div className={styles.row}>
          <label htmlFor="program">Da</label>
          <input type="checkbox" id="program" checked={state.program} onChange={handleProgram} />
        </div>

        <div className={styles.row}>
          <h4>Urgente 24/7</h4>
        </div>
        <div className={styles.row}>
          <label htmlFor="night">Da</label>
          <input type="checkbox" id="night" checked={state.night} onChange={handleNightLocal} />
        </div>

        <div className={styles.row}>
          <h4>Website</h4>
        </div>
        <div className={styles.row}>
          <label htmlFor="website">Da</label>
          <input type="checkbox" id="website" checked={state.website} onChange={handleWebsite} />
        </div>

        <div className={styles.row}>
          <h4>Disponibil in weekend</h4>
        </div>
        <div className={styles.row}>
          <label htmlFor="weekend">Sambata, Duminica</label>
          <input type="checkbox" id="weekend" checked={state.weekend} onChange={handleWeekend} />
        </div>
      </div>
    </div>
  );
};

export default SortItems;
