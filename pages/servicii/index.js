import React from "react";
import styles from "../../styles/servicii.module.scss";
import BackButton from "../../components/BackButton";
import LinkButton from "../../components/LinkButton";

export const getStaticProps = async () => {
  try {
    const unu = await fetch(`https://madapi.vercel.app/api/jobsTotal`);
    const res = await unu.json();
    return {
      props: {
        citys: res,
      },
      revalidate: 2,
    };
  } catch(err) {
    return {
      props: { citys: null },
      revalidate: 2,
    };
  }
};

const Servicii = ({ citys }) => {
  if (!citys) {
    return (
      <div
        className={
          styles.joburi +
          " row m-0 p-0 col-12 mx-auto d-flex flex-column align-items-center justify-content-start"
        }
      >
        <div className="row col-12 mt-2">
          <BackButton url="/" text="Pagina principala" />
        </div>
        <div
          className="text-center text-white d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          Date indisponibile. Va rugam reveniti.
        </div>
      </div>
    );
  }

  let tmp = 0;
  const all = [];

  const unu = Object.keys(citys);
  Object.values(citys).map((item, index) => {
    tmp += Object.values(item).length;
    const temp = { name: unu[index], value: Object.values(item).length };
    all.push(temp);
  });

  return (
    <div
      className={
        styles.joburi +
        " row m-0 p-0 col-12 mx-auto d-flex flex-column align-items-center justify-content-start"
      }
    >
      <div className="row col-12 mt-2">
        <BackButton url="/" text="Pagina principala" />
      </div>
      <div className="row m-0 p-0 col-12 px-2 mb-5 d-flex justify-content-center">
        {citys ? (
          <table className="table m-0 p-0 mt-4">
            <thead>
              <tr>
                <th>Judet</th>
                <th className="">Total</th>
                <th className="text-end">Detalii</th>
              </tr>
            </thead>
            <tbody>
              {all.map((item, index) => (
                <tr key={index}>
                  <td className="px-2 text-uppercase">{item.name}</td>
                  <td>{item.value}</td>
                  <td>
                    <LinkButton name={`/servicii/${item.name}`} />
                  </td>
                </tr>
              ))}
              <tr>
                <td className={"text-warning m-0"}>Total:</td>
                <td colSpan="2" className={"text-warning m-0 text-start"}>
                  {tmp}
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <div className="d-flex justify-content-center align-items center py-5 mt-5">
            Baza de date este goala.
          </div>
        )}
      </div>
    </div>
  );
};

export default Servicii;
