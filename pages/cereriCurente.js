import React from "react";
import { Container } from "../components/singleTags/elemetsCustom";
import { getDatabase, ref, set, onValue } from "firebase/database";

export const getStaticProps = async () => {
  const db = getDatabase();
  const base = ref(db, "/cereriOferta");
  const allCereri = [];

  onValue(base, (s) => {
    if (s.val() !== null) {
      [s.val()].map((item) =>
        Object.values(item).map((i) => allCereri.push(i))
      );
    }
  });
  return {
    props: { allCereri },
    revalidate: 2,
  };
};

const CereriCurente = ({ allCereri }) => {
  if (!allCereri) {
    return <Container>Nu exista cereri momentan</Container>;
  }
  return (
    <Container className="gap-2">
      {allCereri.map((item) => {
        return (
          <div
            key={item.cerereId}
            className="border border-danger d-flex flex-column align-items-center justify-content-center w-100"
          >
            <p>{item.caut}</p>
            <p>{item.cerinte}</p>
            <p>{item.contact}</p>
            <p>{item.currentDate}</p>
            <p>{item.dataLimita}</p>
            <p>{item.numePrenume}</p>
            <p>{item.sumaAlocata}</p>
          </div>
        );
      })}
    </Container>
  );
};

export default CereriCurente;
