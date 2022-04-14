import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import axios from "axios";


/* 
fa cumva sa nu mai poata adauga in firebase daca a introdus deja, dupa
ce a ajuns pe pagina de success.
*/

const Success = ({state, postData}) => {

  const [notData, setNotData] = useState('')

  const {
    query: { session_id },
  } = useRouter();

  const fetcher = (url) => axios.get(url).then((res) => res.data);

  const { data, error } = useSWR(
    () => `/api/checkout_sessions/${session_id}`,
    fetcher
  );
  
  useEffect(() => {
    if (data) {
      setNotData("Data received");
      postData()
      console.log("Metadata: ",data.metadata)
    } else {
      setNotData("........👀 🌍");
    }
  }, [data]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        background: `linear-gradient(to bottom right, #34a0a4, #76c893 )`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/">
        <a style={{ padding: "2rem" }}>Inapoi la pagina principala</a>
      </Link>
      <h4 style={{ color: data ? "blue" : "red", padding: "2rem" }}>{notData}</h4>
      <h4 style={{ color: data ? "blue" : "red", padding: ".2rem" }}>
        Detalii: {state.detalii}
      </h4>
      <h4 style={{ color: data ? "blue" : "red", padding: ".2rem" }}>
        Email: {state.email}
      </h4>
      <h4 style={{ color: data ? "blue" : "red", padding: ".2rem" }}>
        Nume: {state.fullname}
      </h4>
      <h4 style={{ color: data ? "blue" : "red", padding: ".2rem" }}>
        Judet: {state.judet}
      </h4>
      <h4 style={{ color: data ? "blue" : "red", padding: ".2rem" }}>
        Ora inceput: {state.orainceput}
      </h4>
      <h4 style={{ color: data ? "blue" : "red", padding: ".2rem" }}>
        Oras: {state.oras}
      </h4>
      <h4 style={{ color: data ? "blue" : "red", padding: ".2rem" }}>
        Ora sfarsit: {state.orasfarsit}
      </h4>
      <h4 style={{ color: data ? "blue" : "red", padding: ".2rem" }}>
        Telefon: {state.phone}
      </h4>
      <h4 style={{ color: data ? "blue" : "red", padding: ".2rem" }}>
        Pret maxim: {state.pretMax}
      </h4>
      <h4 style={{ color: data ? "blue" : "red", padding: ".2rem" }}>
        Pret minim: {state.pretMin}
      </h4>
      <h4 style={{ color: data ? "blue" : "red", padding: ".2rem" }}>
        Tags: {state.tags}
      </h4>
      <h4 style={{ color: data ? "blue" : "red", padding: ".2rem" }}>
        Tip serviciu: {state.tipjob}
      </h4>
      <h4 style={{ color: data ? "blue" : "red", padding: ".2rem" }}>
        Disponibil urgente: {state.urgente ? "True" : "False"}
      </h4>
      <h4 style={{ color: data ? "blue" : "red", padding: ".2rem" }}>
        Zi inceput:{state.ziinceput}
      </h4>
      <h4 style={{ color: data ? "blue" : "red", padding: ".2rem" }}>
        Zi sfarsit: {state.zisfarsit}
      </h4>
    </div>
  );
};

export default Success;
