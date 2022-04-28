import Link from "next/link";
import styles from "../styles/Home.module.scss";
import { useState } from "react";
import ClientSearch from "../components/ClientSearch";
import Timer from "../components/Timer";
import LoadingScreen from "../components/LoadingScreen";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import CardCautare from "../components/CardCautare";
import SortItems from "../components/SortItems";

export default function Home({ loading, setLoading }) {
  const initialValues = {
    judet: "",
    listaOrase: [],
    oras: "",
    listaCarduri: [],
    cautare: "",
    loading: false,
  };

  const [state, setState] = useState(initialValues);
  const [loadSearch, setLoadSearch] = useState(false);
  const [show, setShow] = useState(true);
  const [cardState, setCardState] = useState(false);
  const [cardContent, setCardContent] = useState({});

  // Button search only in judet
  const searchJudet = async () => {
    setLoadSearch((prev) => true);
    const getServices = await fetch(
      `/api/jobsJudet?search=${state.cautare}&judet=${state.judet}`
    );
    const endresult = await getServices.json();
    setState({ ...state, listaCarduri: endresult });
    setLoadSearch((prev) => false);
  };

  // Button search in judet and oras
  const searchJudetOras = async () => {
    const getServices = await fetch(
      `/api/jobsJudetOras?search=${state.cautare}&judet=${state.judet}&oras=${state.oras}`
    );
    const endresult = await getServices.json();
    setState({ ...state, listaCarduri: endresult });
  };

  const showCard = (e, f) => {
    // console.log("Show card");
    setCardState(e);
    setCardContent(f);
  };

  const hideCard = () => {
    // console.log("Hide card");
    setCardState(false);
    setCardContent({});
  };

  return (
    <div className="container-fluid m-0 p-0">
      <div
        className={
          styles.mainContainer +
          " row d-flex flex-column justify-content-start m-0 p-0 mb-3"
        }
        // style={{ minHeight: "50vh" }}
      >
        <div
          className={
            styles.checkboxContainer +
            " m-0 p-0 mt-3 d-flex justify-content-between"
          }
        >
          <Link href="/servicii">
            <a className={styles.joburiLink + " ms-3"}>Toate judetele</a>
          </Link>
          <Link href="/test">
            <a className={styles.joburiLink + " ms-3"}>Test</a>
          </Link>
          <div className="d-flex">
            {show && <AiOutlineEye className={"text-white me-2"} />}
            {!show && <AiOutlineEyeInvisible className={"text-white me-2"} />}
            <input
              type="checkbox"
              id="change"
              onChange={() => setShow((prev) => !prev)}
              className={styles.checkbox + " m-0 p-0 me-3"}
            />
          </div>
        </div>

        {/* Timer */}
        {show && (
          <div className="justify-content-center mt-3 m-0 d-flex flex-column align-items-center">
            <Link href="/inscriere">
              <div
                className={
                  styles.inscriere +
                  " m-0 p-0 px-3 py-1 d-flex justify-content-center align-items-center"
                }
              >
                {"Inscrie-te acum!".split("").map((item, index) => (
                  <h4 key={index} style={{ "--i": index + 1 }}>
                    {item}
                  </h4>
                ))}
              </div>
            </Link>
            {loading && <Timer loading={loading} setLoading={setLoading} />}
          </div>
        )}

        {/* Title */}
        {show && (
          <div
            className={
              styles.title +
              " m-0 p-0 mt-3 d-flex flex-column justify-content-center align-items-center"
            }
          >
            <h4 className={styles.h4first}>Cauta ajutor,</h4>
            <h4 className={styles.h4second}>simplu si usor</h4>
          </div>
        )}

        <div
          className={
            styles.clientSearchContainer +
            " row col-12 col-md-7 col-xl-4 align-self-center justify-content-center flex-grow-0 px-2 pt-3"
          }
        >
          <ClientSearch
            state={state}
            setState={setState}
            searchJudetOras={searchJudetOras}
            searchJudet={searchJudet}
            initialValues={initialValues}
          />
        </div>
      </div>

      <div className="row m-0 p-0 col-12 px-2 d-flex flex-column align-items-center">
        {state.listaCarduri.length > 0 && <SortItems />}
        {!loadSearch && state.listaCarduri ? (
          state.listaCarduri.map((item, index) => (
            <CardCautare
              data={item}
              key={index}
              idx={index}
              showCard={showCard}
            />
          ))
        ) : (
          <LoadingScreen />
        )}
      </div>
    </div>
  );
}
