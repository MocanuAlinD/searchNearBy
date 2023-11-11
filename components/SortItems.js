import React, { useState } from "react";
import styles from "../styles/SortItems.module.scss";
import { ImSortNumbericDesc, ImSortNumericAsc } from "react-icons/im";
import SingleRow from "./SingleRow";

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

  const handleSelect = (x) => {
    switch (x) {
      case "tarifAsc":
        handleTarifAscLocal();
        break;
      case "tarifDesc":
        handleTarifDescLocal();
        break;
      case "dataAsc":
        handleDataAscLocal();
        break;
      case "dataDesc":
        handleDataDescLocal();
        break;
      default:
        return;
    }
  };

  const handleDefaults = () => {
    const sel = document.getElementById("select");
    const fil = document.getElementById("filtreaza");
    sel.value = "";
    fil.value = "";
    handleRest(initialValues);
  };

  const handleSelectFiltreaza = (x) => {
    const tempState = {};
    const fil = document.getElementById("filtreaza");
    const filEl = fil.options;
    for (let i = 0; i < filEl.length; i++) {
      tempState[filEl[i].value] = filEl[i].selected;
    }
    const allNewState = { ...state, ...tempState, toate: false };
    handleRest(allNewState);
  };

  const handleRest = (tempState) => {
    setState(tempState);
    handleToate(tempState);
  };

  return (
    <div className={styles.container + " sticky-top w-md-100"}>
      {/* DESKTOP */}
      <div className={styles.desktop + " d-none d-md-flex"}>
        <SingleRow
          cls="w-100 text-center fs-bold"
          justTitle
          text={
            listLen >= 0 && listLen === 0
              ? "-"
              : listLen === 1
              ? "1 găsit"
              : listLen > 1 && listLen + " servicii găsite"
          }
        />
        <SingleRow
          id="toate"
          text="Fără filtre"
          state={state.toate}
          func={handleRest}
          list={initialValues}
          type="checkbox"
        />
        <SingleRow justTitle text="Sortează" />

        <SingleRow
          id="tarifAsc"
          text="Tarif &nbsp;"
          icon={<ImSortNumericAsc />}
          type="radio"
          name="sortBy"
          state={state.tarifAsc}
          func={handleTarifAscLocal}
        />
        <SingleRow
          id="tarifDesc"
          text="Tarif &nbsp;"
          icon={<ImSortNumbericDesc />}
          type="radio"
          name="sortBy"
          state={state.tarifDesc}
          func={handleTarifDescLocal}
        />

        <SingleRow
          id="dataAsc"
          text="Dată recentă"
          type="radio"
          name="sortBy"
          state={state.dataAsc}
          func={handleDataAscLocal}
        />

        <SingleRow
          id="dataDesc"
          text="Dată veche"
          type="radio"
          name="sortBy"
          state={state.dataDesc}
          func={handleDataDescLocal}
        />

        <SingleRow justTitle text="Filtre" />

        <SingleRow
          id="program"
          text="După 16:00"
          type="checkbox"
          state={state.program}
          func={handleProgram}
        />

        <SingleRow
          id="night"
          text="Urgențe 24/7"
          type="checkbox"
          state={state.night}
          func={handleNightLocal}
        />

        <SingleRow
          id="website"
          text="Website"
          type="checkbox"
          state={state.website}
          func={handleWebsite}
        />
        <SingleRow
          id="weekend"
          text="Weekend"
          type="checkbox"
          state={state.weekend}
          func={handleWeekend}
        />
      </div>

      {/* MOBILE */}
      <div className={styles.mobile + " d-flex d-md-none"}>
        <div className={styles.wrapper}>
          <div className={styles.row}>
            <label htmlFor="noFilters">Fără filtre</label>
            <input
              type="checkbox"
              id="noFilters"
              checked={state.toate}
              onChange={handleDefaults}
            />
          </div>
          <div className={styles.row}>
            <label htmlFor="select">Sortează</label>
            <select id="select" onChange={(e) => handleSelect(e.target.value)}>
              <optgroup label="Tarif">
                <option value="tarifAsc">Tarif 1 &gt; 9</option>
                <option value="tarifDesc">Tarif 9 &gt; 1</option>
              </optgroup>
              <optgroup label="Data">
                <option value="dataAsc">Dată recentă</option>
                <option value="dataDesc">Dată veche</option>
              </optgroup>
            </select>
          </div>

          <div className={styles.row}>
            <label htmlFor="filtreaza">Filtrează</label>
            <select
              multiple
              id="filtreaza"
              onChange={(e) => handleSelectFiltreaza(e.target.value)}
            >
              <option value="program">După 16:00</option>
              <option value="night">Urgențe 24/7</option>
              <option value="website">Website</option>
              <option value="weekend">Weekend</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortItems;
