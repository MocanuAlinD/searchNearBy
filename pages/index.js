import styles from "../styles/Home.module.scss";
import Link from "next/link";
import { useState } from "react";
import ClientSearch from "../components/ClientSearch";
import LoadingScreen from "../components/LoadingScreen";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import CardCautare from "../components/CardCautare";
import SortItems from "../components/SortItems";
import NewTimer from "../components/NewTimer";
import LeftMenu from "../components/LeftMenu";
import Title from "../components/Title";

export default function Home({ loading, setLoading }) {
  const initialValues = {
    judet: "",
    oras: "",
    cautare: "",
    sortedList: [],
    loading: false,
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
      // console.log(endresult);
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
    let one = a.toate ? originalList : originalList.filter(item=> item && item)
    one = a.night ? one.filter(item => item.urgenteNoapte && item) : one
    one = a.program ? one.filter(item => item.urgente && item) : one
    one = a.tarifAsc ? one.sort((a,b) => +a.pretMin > +b.pretMin && 1 || -1) : one
    one = a.tarifDesc ? one.sort((a,b) => +a.pretMin < +b.pretMin && 1 || -1) : one
    setState({ ...state, sortedList: one });
  };

  return (
    <div className="container-fluid m-0 p-0">
      <div
        className={
          styles.mainContainer +
          " row d-flex flex-column justify-content-start m-0 p-0 mb-2"
        }
      >
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

        {/* Timer */}
        {show && (
          <div className="justify-content-center mt-0 m-0 d-flex flex-column align-items-center">
            {loading && <NewTimer loading={loading} setLoading={setLoading} />}
            <Link href="/inscriere">
              <div
                className={
                  styles.inscriere +
                  " m-0 p-0 my-3 px-3 py-2 d-flex justify-content-center align-items-center"
                }
              >
                {"Inscrie-te gratuit acum!".split("").map((item, index) => (
                  <h4 key={index} style={{ "--i": index + 1 }}>
                    {item}
                  </h4>
                ))}
              </div>
            </Link>
          </div>
        )}

        {/* Title */}
        {show && <Title />}

        <ClientSearch
          state={state}
          setState={setState}
          searchJudetOras={searchJudetOras}
          searchJudet={searchJudet}
          initialValues={initialValues}
        />
        {originalList.length > 0 && <SortItems handleToate={handleToate} listLen={state.sortedList.length} />}
      </div>

      <div className="m-0 p-0 row col-12 col-xs-1 d-flex flex-wrap justify-content-center align-items-center">
        {!loadSearch && originalList ? (
          state.sortedList.map((item, index) => (
            <CardCautare data={item} key={index} idx={index} />
            // <div key={index} style={{fontSize: ".55rem", color: "white"}}>
            //   {index + 1}: {item.pretMin} - {item.pretMax} - {JSON.stringify(item.urgente)}
            // </div>
          ))
        ) : (
          <LoadingScreen setLoadSearch={setLoadSearch} />
        )}
      </div>

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
