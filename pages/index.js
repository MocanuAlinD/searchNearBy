import styles from "../styles/Home.module.scss";
import Link from "next/link";
import { useState } from "react";
import ClientSearch from "../components/ClientSearch";
import Spinner from "../components/Spinner"
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import CardCautare from "../components/CardCautare";
import SortItems from "../components/SortItems";
import LeftMenu from "../components/LeftMenu";
import Title from "../components/Title";

export default function Home() {
  const initialValues = {
    judet: "",
    oras: "",
    cautare: "",
    sortedList: [],
  };

  const [state, setState] = useState(initialValues);
  const [originalList, setOriginalList] = useState([]);
  const [loadSearch, setLoadSearch] = useState(false);
  const [show, setShow] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  // Button search only in judet
  const searchJudet = async () => {
    try {
      setLoadSearch((prev) => true);
      const getServices = await fetch(
        `/api/jobsJudet?search=${state.cautare}&judet=${state.judet}`
      );
      const endresult = await getServices.json();
      setState((prev) => ({
        ...prev,
        sortedList: endresult,
      }));
      setOriginalList(endresult);
      setLoadSearch((prev) => false);
    } catch (error) {
      setLoadSearch((prev) => false);
    }
  };

  // Button search in judet and oras
  const searchJudetOras = async () => {
    try {
      const getServices = await fetch(
        `/api/jobsJudetOras?search=${state.cautare}&judet=${state.judet}&oras=${state.oras}`
      );
      const endresult = await getServices.json();
      setState((prev) => ({ ...prev, sortedList: endresult }));
      setOriginalList((prev) => endresult);
    } catch (error) {
      setLoadSearch((prev) => false);
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

    setState({ ...state, sortedList: one });
  };

  const resetSearch = () => {
    setOriginalList([]);
    setState(initialValues);
  };

  return (
    <div className="container-fluid m-0 p-0 position-relative">
      <div
        className={
          styles.mainContainer +
          " row d-flex flex-column justify-content-start m-0 p-0 mb-2"
        }
      >

        {/* Top part (search inputs, title, burger menu and switch) */}
        <div
          className={
            styles.checkboxContainer +
            " m-0 p-0 mt-3 d-flex justify-content-between flex-row-reverse flex-md-row"
          }
        >
          <LeftMenu showMenu={showMenu} setShowMenu={setShowMenu} />

          {!show && (
            <h3 className={styles.navTitle + " m-0 p-0"}>
              Cauta ajutor, simplu si usor
            </h3>
          )}
          <div className="d-flex justify-content-between gap-2 mx-2">
            <input
              type="checkbox"
              id="change"
              onChange={() => setShow((prev) => !prev)}
              className={styles.checkbox + " m-0 p-0"}
            />
            {!show && <AiOutlineEye className={"text-white"} />}
            {show && <AiOutlineEyeInvisible className={"text-white"} />}
          </div>
        </div>

        {/* Title */}
        {show && <Title />}

        {/* Search window with inputs */}
        <ClientSearch
          state={state}
          setState={setState}
          searchJudetOras={searchJudetOras}
          searchJudet={searchJudet}
          resetSearch={resetSearch}
        />
      </div>

      {/* Sort menu and search cards */}
      <div className="d-flex flex-column flex-md-row m-0 p-0">
        {!loadSearch && originalList.length > 0 && state.sortedList.length > 0 && (
          <SortItems
            handleToate={handleToate}
            listLen={state.sortedList.length}
          />
        )}

        <div className="w-100 d-flex flex-wrap m-0 p-0 justify-content-center">
          {!loadSearch &&
            originalList &&
            state.sortedList.map((item, index) => (
              <CardCautare data={item} key={index} idx={index} />
            ))}
        </div>
      </div>

      {loadSearch ? <Spinner setLoadSearch={setLoadSearch} /> : ""}

      {/* Meniu Burger */}
      <div
        className={
          styles.sidebar + " d-flex flex-column align-items-center gap-3"
        }
        style={{ left: `${showMenu ? 0 : "-100%"}` }}
      >
        <Link href="/servicii">
          <a className={styles.link + " m-0"}>Toate judetele</a>
        </Link>
        <Link href="/">
          <a className={styles.link + " m-0"}>Contact</a>
        </Link>
        <Link href="/">
          <a className={styles.link + " m-0"}>Info</a>
        </Link>
        <Link href="/inscriere">
          <a className={styles.link + " m-0 mt-5"}>Inregistrare</a>
        </Link>
      </div>
    </div>
  );
}
