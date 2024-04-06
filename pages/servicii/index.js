import React, { useState } from "react";
import LinkButton from "../../components/LinkButton";
import { Container } from "../../components/singleTags/elemetsCustom";
import Bars from "../../components/Graphs/Bars";
import styles from "../../styles/pages/dinamic.module.scss";

export const getStaticProps = async () => {
  try {
    const getFromApi = await fetch(`https://madapi.vercel.app/api/jobsTotal`);
    const res = await getFromApi.json();
    return {
      props: {
        citys: res,
      },
      revalidate: 2,
    };
  } catch (err) {
    return {
      props: { citys: null },
      revalidate: 2,
    };
  }
};

const Servicii = ({ citys }) => {
  const [state, setState] = useState(false);

  if (!citys) {
    return (
      <div className="text-center text-white d-flex align-items-center justify-content-center flex-grow-1">
        Date indisponibile. Va rugam reveniti.
      </div>
    );
  }

  const k = Object.keys(citys);
  const kLen = k.length;

  const lst = {};

  for (let i = 0; i < kLen; i++) {
    const b = citys[k[i]];
    const nm = k[i];
    const no = Object.values(b);
    lst[nm] = no.length;
  }

  let tmp = 0;
  const citysAndNumberOfUsers = [];

  const cityKeys = Object.keys(citys);
  Object.values(citys).map((item, index) => {
    tmp += Object.values(item).length;
    const temp = { name: cityKeys[index], value: Object.values(item).length };
    citysAndNumberOfUsers.push(temp);
  });

  return (
    <Container>
      {citys ? (
        <table className={styles.table}>
          {state && (
            <div className={styles.graphPop} onClick={() => setState(false)}>
              <Bars
                obj={lst}
                borderR="0"
                height="100%"
                fontSize="4.5"
                barHeight="5"
                divider="80"
                textLengthLimit="10"
                range="25"
              />
            </div>
          )}
          <thead>
            <tr className={styles.graphButton} onClick={() => setState(true)}>
            </tr>
            <tr>
              <th>Judet</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {citysAndNumberOfUsers.map((item, index) => (
              <tr key={index}>
                <td>
                  <LinkButton
                    href={`/servicii/${item.name}`}
                    text={item.name}
                  />
                </td>
                <td>{item.value}</td>
              </tr>
            ))}
            <tr>
              <td className={"text-warning m-0"}>Total:</td>
              <td colSpan="2" className={"text-warning m-0 text-center"}>
                {tmp}
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <div className="d-flex justify-content-center align-items center py-5 mt-5">
          Nu exista inregistrari in baza de date.
        </div>
      )}
    </Container>
  );
};

export default Servicii;
