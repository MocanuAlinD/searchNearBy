import React from "react";
import LinkButton from "../../components/LinkButton";
import { Container } from "../../components/singleTags/elemetsCustom";
import styles from "../../styles/pages/servicii.module.scss";

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
  if (!citys) {
    return (
      <div className="text-center text-white d-flex align-items-center justify-content-center flex-grow-1">
        Date indisponibile. Va rugam reveniti.
      </div>
    );
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
          <thead>
            <tr>
              <th>Judet</th>
              <th className="">Total</th>
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
              <td colSpan="2" className={"text-warning m-0 text-start"}>
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
