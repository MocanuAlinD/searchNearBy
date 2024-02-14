import { ImSortNumbericDesc, ImSortNumericAsc } from "react-icons/im";
import InputWithLabel from "./InputWithLabel";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../fstore/store";
import {
  setInitialStateSort,
  setFilterSorteraza,
  setFilterFilters,
} from "../features/sortItems/sortItemsSlice";
import styles from "../styles/comps/SortItems.module.scss";
import OnOff from './tags/OnOff';

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
    dispatch(setInitialStateSort());
    handleToate(origList);
  };

  return (
    <div className={styles.container + " sticky-top"}>
      <div className={styles.desktop}>
        <div className={styles.smallContainer}>
          <InputWithLabel
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
          <InputWithLabel
            id="toate"
            text="Fără filtre"
            state={toate}
            func={resetState}
            list={currentState}
            type="checkbox"
          />
          </div>
          <div className={styles.smallContainer}>
          <InputWithLabel justTitle text="Ordoneaza" />
          
          <InputWithLabel
          id="tarifAsc"
          text="Tarif &nbsp;"
          icon={<ImSortNumericAsc />}
          type="radio"
          name="sortBy"
          state={tarifAsc}
          func={() => handleSorteaza("tarifAsc")}
          />
          <InputWithLabel
            id="tarifDesc"
            text="Tarif &nbsp;"
            icon={<ImSortNumbericDesc />}
            type="radio"
            name="sortBy"
            state={tarifDesc}
            func={() => handleSorteaza("tarifDesc")}
          />

          <InputWithLabel
            id="dataAsc"
            text="Dată recentă"
            type="radio"
            name="sortBy"
            state={dataAsc}
            func={() => handleSorteaza("dataAsc")}
          />

          <InputWithLabel
            id="dataDesc"
            text="Dată veche"
            type="radio"
            name="sortBy"
            state={dataDesc}
            func={() => handleSorteaza("dataDesc")}
          />
        </div>

        <div className={styles.smallContainer}>
          <InputWithLabel justTitle text="Filtrează" />

          <InputWithLabel
            id="program"
            text="După 16:00"
            type="checkbox"
            state={program}
            func={() => handleFilter("program")}
          />

          <InputWithLabel
            id="night"
            text="Urgențe 24/7"
            type="checkbox"
            state={night}
            func={() => handleFilter("night")}
          />

          <InputWithLabel
            id="website"
            text="Website"
            type="checkbox"
            state={website}
            func={() => handleFilter("website")}
          />
        </div>
      </div>
    </div>
  );
};

export default SortItems;
