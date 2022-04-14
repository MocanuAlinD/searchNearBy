import "../styles/globals.scss";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const initialValues = {
    id: "123456",
    judet: "",
    tipjob: "programator",
    pretMin: "200",
    pretMax: "2000",
    detalii: "website site magazin online site prezentare",
    tags: "site magazin prezentare",
    oras: "",
    dataregister: "",
    oraregister: "",
    fullname: "Mocanu Alin-Daniel",
    urgente: false,
    ziinceput: "Luni",
    zisfarsit: "Vineri",
    orainceput: "08:00",
    orasfarsit: "16:00",
    phone: "0721753515",
    email: "alin_ngt@yahoo.com",
  };

  const initialLocation = {
    id: '',
    judet: '',
    oras: ''
  }

  const [state, setState] = useState(initialValues);
  const [listaOrase, setListaOrase] = useState([]);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(initialLocation)

  useEffect(()=>{
    if(localStorage.getItem('location')){
      setLocation(JSON.parse(localStorage.getItem('location')))
    } else {
      localStorage.setItem('location', JSON.stringify(initialLocation))
    }
  }, [])

  // Inregistrare fara plata
  const postData = async (e) => {
    e.preventDefault();
    const addData = {
      contact: {
        email: state.email,
        phone: state.phone,
      },
      dataregister: new Date().toLocaleDateString(),
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
      tags: state.tags,
      tipjob: state.tipjob,
      urgente: state.urgente,
      ziinceput: state.ziinceput,
      zisfarsit: state.zisfarsit,
    };
    // console.log(addData);

    const sendData = await fetch("/api/postData", {
      method: "POST",
      "Content-Type": "application/json",
      body: JSON.stringify({ data: addData }),
    });
    const res = await sendData.json();
    alert(res.msg);

    // setState(initialValues);
  };

  return (
    <Component
      {...pageProps}
      initialValues={initialValues}
      state={state}
      setState={setState}
      listaOrase={listaOrase}
      setListaOrase={setListaOrase}
      postData={postData}
      loading={loading}
      setLoading={setLoading}
      location={location}
      setLocation={setLocation}
    />
  );
}

export default MyApp;
