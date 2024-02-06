import React from "react";
import BackButton from "../../../components/BackButton";
import { FiDatabase } from "react-icons/fi";
import { FcDeleteDatabase } from "react-icons/fc";
import LinkButton from "../../../components/LinkButton";
import { Container } from "../../../components/singleTags/elemetsCustom";
import styles from "../../../styles/pages/dinamic.module.scss";

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
      <div>
        <BackButton url="/servicii" text="Judete" />
        <div
          className="d-flex justify-content-center align-items-center flex-column"
          style={{ minHeight: "50vh" }}
        >
          <FcDeleteDatabase className="mb-5" style={{ fontSize: "4rem" }} />
          <h4 className="text-white font-monospace">Pagina {id} nu exista</h4>
        </div>
      </div>
    );
  }

  const all = Object.values(res);

  return (
    <Container className={styles.container}>
      <BackButton url="/servicii" text="Judete" />
      <table className={styles.table}>
        <thead>
          <tr>
            <th colSpan="2">
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
          </tr>
        </thead>
        <tbody>
          {res ? (
            all.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <LinkButton
                      href={`/servicii/${id}/${item.id}`}
                      text={item.oras}
                    />
                  </td>
                  <td>{item.tipjob}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="2">
                <FiDatabase className="fs-1 mt-3" /> &nbsp;&nbsp;
                <pre>Incarcare date....</pre>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </Container>
  );
};

export default Details;
