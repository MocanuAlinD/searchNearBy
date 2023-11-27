import "../styles/globals.scss";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "../pages/fstore/store";

/*
TODO:

Sorting bar ->
by date registered (newest vs oldest)
maxim/minim price
urgente
has website or not


Better loading popup


*/

function MyApp({ Component, pageProps }) {
  const initialValues = {
    id: "",
    judet: "",
    tipjob: "electrician",
    pretMin: "100",
    pretMax: "2000",
    detalii: "Introdu detalii aici",
    oras: "",
    dataregister: "",
    oraregister: "",
    fullname: "John Doe",
    urgente: false,
    urgenteNoapte: false,
    ziinceput: "Luni",
    zisfarsit: "Vineri",
    orainceput: "08:00",
    orasfarsit: "16:00",
    phone: ["0721345678"],
    email: ["email@yahoo.com"],
    website: "",
  };

  const initialLocation = {
    id: "",
    judet: "",
    oras: "",
  };

  const [state, setState] = useState(initialValues);
  const [listaOrase, setListaOrase] = useState([]);
  const [location, setLocation] = useState(initialLocation);

  useEffect(() => {
    if (localStorage.getItem("location")) {
      setLocation(JSON.parse(localStorage.getItem("location")));
    } else {
      localStorage.setItem("location", JSON.stringify(initialLocation));
    }
  }, []);

  const getDateToRegister = () => {
    const dt = new Date();
    const yr = dt.getFullYear();
    const mth = dt.getMonth() + 1;
    const day = dt.getDate();
    const finalDate = `${yr}-${mth < 10 ? "0" + mth : mth}-${
      day < 10 ? "0" + day : day
    }`;
    return finalDate;
  };

  // Inregistrare fara plata
  const postData = async (e) => {
    e.preventDefault();
    const addData = {
      contact: {
        email: state.email,
        phone: state.phone,
      },
      // dataregister: new Date().toLocaleDateString(),
      dataregister: getDateToRegister(),
      detalii: state.detalii,
      fullname: state.fullname,
      id: `${
        new Date().getTime().toString() + Math.ceil(Math.random() * 100000)
      }`,
      judet: state.judet,
      orainceput: state.orainceput,
      oraregister: new Date().toLocaleTimeString(),
      oras: state.oras,
      orasfarsit: state.orasfarsit,
      pretMin: state.pretMin,
      pretMax: state.pretMax,
      tipjob: state.tipjob,
      urgente: state.urgente,
      urgenteNoapte: state.urgenteNoapte,
      ziinceput: state.ziinceput,
      zisfarsit: state.zisfarsit,
      website: state.website ? "https://www." + state.website : "",
    };

    const sendData = await fetch("/api/postData", {
      method: "POST",
      "Content-Type": "application/json",
      body: JSON.stringify({ data: addData }),
    });
    const res = await sendData.json();
    if (res.msg) {
      toast.success(res.msg);
    } else if (res.error) {
      toast.error(res.error);
    }
  };

  return (
    <>
      <Provider store={store}>
        <Component
          {...pageProps}
          initialValues={initialValues}
          state={state}
          setState={setState}
          listaOrase={listaOrase}
          setListaOrase={setListaOrase}
          postData={postData}
          location={location}
          setLocation={setLocation}
        />
        <Toaster />
      </Provider>
    </>
  );
}

export default MyApp;
