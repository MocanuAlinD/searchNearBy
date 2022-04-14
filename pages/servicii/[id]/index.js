import React from "react";
import styles from "../../../styles/dinamic.module.scss";
import BackButton from "../../../components/BackButton";
import { FiDatabase } from "react-icons/fi";
import { FcDeleteDatabase } from "react-icons/fc";
import LinkButton from "../../../components/LinkButton";

export const getStaticPaths = async () => {
  const unu = await fetch(`https://madapi.vercel.app/api/jobsTotal`);
  const res = await unu.json();

  const paths = Object.keys(res).map((item) => {
    return {
      params: { id: item.toString() },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;

  const unu = await fetch(`https://madapi.vercel.app/api/getJudet?judet=${id}`);
  const res = await unu.json();
  return {
    props: { res, id },
    revalidate: 2,
  };
};

const Details = ({ res, id }) => {
  if (!res || !Object.values(res)) {
    return (
      <>
        <BackButton url="/servicii" text="Judete" />
        <div
          className="d-flex justify-content-center align-items-center flex-column"
          style={{ minHeight: "50vh" }}
        >
          <FcDeleteDatabase className="mb-5" style={{ fontSize: "4rem" }} />
          <h4 className="text-white font-monospace">Pagina {id} nu exista</h4>
        </div>
      </>
    );
  }

  const all = Object.values(res);

  return (
    <>
      <div
        className={
          styles.container +
          " row m-0 p-0 col-12 mx-auto d-flex flex-column align-items-center justify-content-start"
        }
      >
        <div className="row col-12 mt-2">
          <BackButton url="/servicii" text="Judete" />
        </div>
        <div className="row m-0 p-0 col-12 px-2 mb-5 d-flex justify-content-center">
          <table className={"table m-0 mt-4 rounded-3"}>
            <thead>
              <tr>
                <th className={"text-center"} colSpan="5">
                  {id ? (
                    id
                  ) : (
                    <>
                      <FiDatabase className="fs-1 mt-3" /> &nbsp;&nbsp;
                      <pre>Baza de date indisponibila.</pre>
                    </>
                  )}
                </th>
              </tr>
              <tr>
                <th>Oras</th>
                <th>Tip serviciu</th>
                <th className="text-end">Detalii utilizator</th>
              </tr>
            </thead>
            <tbody>
              {res ? (
                all.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.oras}</td>
                      <td>{item.tipjob}</td>
                      <td>
                        <LinkButton name={`/servicii/${id}/${item.id}`} />
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr className={styles.loading}>
                  <td colSpan="3" className={styles.tdLoading + " text-center"}>
                    <FiDatabase className="fs-1 mt-3" /> &nbsp;&nbsp;
                    <pre>Incarcare date....</pre>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Details;
