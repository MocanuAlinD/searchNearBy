import React, { useState } from "react";
import styles from "../styles/SortItems.module.scss";
import { ImSortNumbericDesc, ImSortNumericAsc } from "react-icons/im";
import SingleRow from "./SingleRow";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../fstore/store";
import {
  setTotal,
  setTarifAsc,
  setTarifDesc,
  setDataAsc,
  setDataDesc,
  setProgram,
  setNight,
  setWebsite,
  setWeekend,
  setInitialState,
  setFilterSorteraza,
  setFilterFilters,
  setToate,
  getState,
} from "../features/sortItems/sortItemsSlice";

const SortItems = ({ handleToate, listLen }) => {
  const dispatch = useDispatch();

  const toate = useSelector((state) => state.sort.toate);
  const tarifAsc = useSelector((state) => state.sort.tarifAsc);
  const tarifDesc = useSelector((state) => state.sort.tarifDesc);
  const dataAsc = useSelector((state) => state.sort.dataAsc);
  const dataDesc = useSelector((state) => state.sort.dataDesc);
  const program = useSelector((state) => state.sort.program);
  const night = useSelector((state) => state.sort.night);
  const website = useSelector((state) => state.sort.website);
  const weekend = useSelector((state) => state.sort.weekend);

  const currentState = store.getState().sort;

  const handleSorteaza = (text) => {
    dispatch(setFilterSorteraza(text));
    // console.log("inVals", currentState);
    // console.log("store state", store.getState().sort);
    handleToate(store.getState().sort);
    return;
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
    handleToate(currentState);
  };

  const handleSelectFiltreaza = (x) => {
    const tempState = {};
    const fil = document.getElementById("filtreaza");
    const filEl = fil.options;
    for (let i = 0; i < filEl.length; i++) {
      tempState[filEl[i].value] = filEl[i].selected;
    }
    const allNewState = { ...currentState, ...tempState, toate: false };
    console.log(allNewState);
    handleToate(allNewState);
  };

  // const handleRest = (tempState) => {
  // handleToate(tempState);
  // };

  const handleFilter = (filter) => {
    dispatch(setFilterFilters(filter));
    handleToate(store.getState().sort);
  };

  const origList = useSelector((state) => state.search.originalList);

  const resetState = () => {
    dispatch(setInitialState());
    handleToate(origList);
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
              ? "1 rezultat"
              : listLen > 1 && listLen + " rezultate"
          }
        />
        <SingleRow
          id="toate"
          text="Fără filtre"
          state={toate}
          func={resetState}
          list={currentState}
          type="checkbox"
        />
        <SingleRow justTitle text="Sortează" />

        <SingleRow
          id="tarifAsc"
          text="Tarif &nbsp;"
          icon={<ImSortNumericAsc />}
          type="radio"
          name="sortBy"
          state={tarifAsc}
          // state={useSelector((state) => state.sort.tarifAsc)}
          func={() => handleSorteaza("tarifAsc")}
        />
        <SingleRow
          id="tarifDesc"
          text="Tarif &nbsp;"
          icon={<ImSortNumbericDesc />}
          type="radio"
          name="sortBy"
          state={tarifDesc}
          // state={useSelector((state) => state.sort.tarifDesc)}
          func={() => handleSorteaza("tarifDesc")}
        />

        <SingleRow
          id="dataAsc"
          text="Dată recentă"
          type="radio"
          name="sortBy"
          state={dataAsc}
          // state={useSelector((state) => state.sort.dataAsc)}
          func={() => handleSorteaza("dataAsc")}
        />

        <SingleRow
          id="dataDesc"
          text="Dată veche"
          type="radio"
          name="sortBy"
          state={dataDesc}
          // state={useSelector((state) => state.sort.dataDesc)}
          func={() => handleSorteaza("dataDesc")}
        />

        <SingleRow justTitle text="Filtre" />

        <SingleRow
          id="program"
          text="După 16:00"
          type="checkbox"
          state={program}
          func={() => handleFilter("program")}
        />

        <SingleRow
          id="night"
          text="Urgențe 24/7"
          type="checkbox"
          state={night}
          func={() => handleFilter("night")}
        />

        <SingleRow
          id="website"
          text="Website"
          type="checkbox"
          state={website}
          func={() => handleFilter("website")}
        />
        {/* <SingleRow
          id="weekend"
          text="Weekend"
          type="checkbox"
          state={weekend}
          func={() => handleFilter("weekend")}
        /> */}
      </div>

      {/* MOBILE */}
      <div className={styles.mobile + " d-flex d-md-none"}>
        <div className={styles.wrapper}>
          <div className={styles.row}>
            <label htmlFor="noFilters">Fără filtre</label>
            <input
              type="checkbox"
              id="noFilters"
              checked={toate}
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
              {/* <option value="weekend">Weekend</option> */}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortItems;
