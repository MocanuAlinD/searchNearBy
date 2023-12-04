import { useDispatch, useSelector } from "react-redux";
import ClientSearch from "../components/ClientSearch";
import CardCautare from "../components/CardCautare";
import NoResults from "../components/NoResults";
import styles from "../styles/Home.module.scss";
import SortItems from "../components/SortItems";
import Spinner from "../components/Spinner";
import Title from "../components/Title";
import {
  setSortedList,
  setLoadSearch,
  setOriginalList,
  setNoResultText,
  setNoResTrigger,
} from "../features/searchJudet/searchJudetSlice";

export default function Home() {
  const dispatch = useDispatch();
  const oras = useSelector((state) => state.search.oras);
  const judet = useSelector((state) => state.search.judet);
  const cautare = useSelector((state) => state.search.cautare);
  const sortedList = useSelector((state) => state.search.sortedList);
  const loadSearch = useSelector((state) => state.search.loadSearch);
  const originalList = useSelector((state) => state.search.originalList);
  const noResTrigger = useSelector((state) => state.search.noResTrigger);

  // Button search only in judet
  const searchJudet = async () => {
    dispatch(setNoResTrigger(false));
    try {
      dispatch(setLoadSearch(true));
      const getServices = await fetch(
        `/api/jobsJudet?search=${cautare}&judet=${judet}`
      );
      const endresult = await getServices.json();

      dispatch(setSortedList(endresult));
      dispatch(setOriginalList(endresult));
      dispatch(setLoadSearch(false));
      if (endresult.length > 0) {
        dispatch(setNoResultText(""));
      } else if (endresult.length == 0) {
        dispatch(setNoResultText(judet));
        dispatch(setNoResTrigger(true));
      }
    } catch (error) {
      dispatch(setLoadSearch(false));
    }
  };

  // Button search in judet and oras
  const searchJudetOras = async () => {
    dispatch(setNoResTrigger(false));
    try {
      dispatch(setLoadSearch(true));

      const getServices = await fetch(
        `/api/jobsJudetOras?search=${cautare}&judet=${judet}&oras=${oras}`
      );
      const endresult = await getServices.json();

      dispatch(setSortedList(endresult));
      dispatch(setOriginalList(endresult));
      dispatch(setLoadSearch(false));
      if (endresult.length > 0) {
        dispatch(setNoResultText(""));
      } else if (endresult.length == 0) {
        dispatch(setNoResultText(`${judet}, ${oras}`));
        dispatch(setNoResTrigger(true));
      }
    } catch (error) {
      dispatch(setLoadSearch(false));
    }
  };

  const handleToate = (a) => {
    let one = a.toate
      ? originalList
      : originalList.filter((item) => item && item);

    one = a.tarifAsc
      ? one.sort((a, b) => (+a.pretMin > +b.pretMin && 1) || -1)
      : one;

    one = a.tarifDesc
      ? one.sort((a, b) => (+a.pretMin < +b.pretMin && 1) || -1)
      : one;

    one = a.dataAsc
      ? one.sort(
          (a, b) =>
            (new Date(a.dataregister) < new Date(b.dataregister) && 1) || -1
        )
      : one;
    one = a.dataDesc
      ? one.sort(
          (a, b) =>
            (new Date(a.dataregister) > new Date(b.dataregister) && 1) || -1
        )
      : one;

    one = a.program ? one.filter((item) => item.urgente && item) : one;

    one = a.night ? one.filter((item) => item.urgenteNoapte && item) : one;

    one = a.website ? one.filter((item) => item.website && item) : one;

    one = a.weekend
      ? one.filter(
          (item) =>
            item.ziinceput.toLowerCase().includes("sambata") ||
            item.ziinceput.toLowerCase().includes("duminica") ||
            item.zisfarsit.toLowerCase().includes("sambata") ||
            item.zisfarsit.toLowerCase().includes("duminica")
        )
      : one;

    dispatch(setSortedList(one));
  };

  return (
    <div className={styles.container + " "}>
      <div
        className={
          styles.mainContainer +
          " row d-flex flex-column justify-content-start m-0 p-0"
        }
      >
        {useSelector((state) => state.search.show) && <Title />}

        {/* Search window with inputs */}
        <ClientSearch
          searchJudetOras={searchJudetOras}
          searchJudet={searchJudet}
        />
      </div>

      {/* Sort menu and search cards */}
      <div className="d-flex flex-column flex-md-row m-0 p-0 mt-2">
        {!loadSearch && originalList.length > 0 && sortedList.length >= 0 && (
          <SortItems handleToate={handleToate} listLen={sortedList.length} />
        )}

        {/* Show Cards container if results find */}
        <div className="w-100 d-flex flex-wrap m-0 p-0 justify-content-center">
          {!loadSearch &&
            originalList &&
            sortedList.map((item, index) => (
              <CardCautare data={item} key={index} idx={index} />
            ))}
        </div>
      </div>

      {/* Show only if no results found */}
      {noResTrigger && (
        <div className={styles.resultsContainer}>
          <NoResults />
        </div>
      )}

      {loadSearch && <Spinner />}
    </div>
  );
}
