import styles from "../styles/SortItems.module.scss";
import { ImSortNumbericDesc, ImSortNumericAsc } from "react-icons/im";
import SingleRow from "./SingleRow";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../fstore/store";
import {
  setInitialState,
  setFilterSorteraza,
  setFilterFilters,
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

  const currentState = store.getState().sort;
  const origList = useSelector((state) => state.search.originalList);

  const handleSorteaza = (text) => {
    dispatch(setFilterSorteraza(text));
    handleToate(store.getState().sort);
  };

  const handleFilter = (filter) => {
    dispatch(setFilterFilters(filter));
    handleToate(store.getState().sort);
  };

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
        {!toate && (
          <div className={styles.filters}>
            {tarifAsc && <h6>Tarif 1 &gt; 9</h6>}
            {tarifDesc && <h6>Tarif 1 &lt; 9</h6>}
            {dataAsc && <h6>Data recenta</h6>}
            {dataDesc && <h6>Data veche</h6>}
            {program && <h6>Dupa ora 16</h6>}
            {website && <h6>Website</h6>}
            {night && <h6>24/7</h6>}
          </div>
        )}
      </div>

      {/* MOBILE */}
      <div className={styles.mobile + " d-flex d-md-none"}>
        <div className={styles.wrapper + " d-flex flex-column"}>
          <div className="w-100 d-flex flex-column align-items-center">
            <SingleRow
              justTitle
              text={
                listLen >= 0 && listLen === 0
                  ? "-"
                  : listLen === 1
                  ? "1 rezultat"
                  : listLen > 1 && listLen + " rezultate"
              }
            />
            {!toate && (
              <div className={styles.filters}>
                {tarifAsc && <h6>Tarif 1 &gt; 9</h6>}
                {tarifDesc && <h6>Tarif 1 &lt; 9</h6>}
                {dataAsc && <h6>Data recenta</h6>}
                {dataDesc && <h6>Data veche</h6>}
                {program && <h6>Dupa ora 16</h6>}
                {website && <h6>Website</h6>}
                {night && <h6>24/7</h6>}
              </div>
            )}
          </div>
          <div className="w-100 d-flex justify-content-around">
            <div className={styles.row}>
              <label htmlFor="noFilters">Fără filtre</label>
              <input
                type="checkbox"
                id="noFilters"
                checked={toate}
                onChange={resetState}
              />
            </div>
            <div className={styles.row}>
              <label htmlFor="select">Sortează</label>
              <select
                id="select"
                onChange={(e) => handleSorteaza(e.target.value)}
              >
                <optgroup label="Tarif">
                  <option value="" selected={toate} disabled hidden>
                    -Sorteaza-
                  </option>
                  <option value="tarifAsc" selected={tarifAsc}>
                    Tarif 1 &gt; 9
                  </option>
                  <option value="tarifDesc" selected={tarifDesc}>
                    Tarif 9 &gt; 1
                  </option>
                </optgroup>
                <optgroup label="Data">
                  <option value="dataAsc" selected={dataAsc}>
                    Dată recentă
                  </option>
                  <option value="dataDesc" selected={dataDesc}>
                    Dată veche
                  </option>
                </optgroup>
              </select>
            </div>

            <div className={styles.row}>
              <label htmlFor="filtreaza">Filtrează</label>
              <select
                multiple
                id="filtreaza"
                onChange={(e) => handleFilter(e.target.value)}
              >
                <option value="" selected={toate} disabled hidden>
                  -Filtreaza-
                </option>
                <option value="program" selected={program}>
                  După 16:00
                </option>
                <option value="night" selected={night}>
                  Urgențe 24/7
                </option>
                <option value="website" selected={website}>
                  Website
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortItems;
