import React from "react";
import { Container } from "../components/singleTags/elemetsCustom";

export const getStaticProps = async () => {
  const getdata = await fetch("https://madapi.vercel.app/api/cereriCurente");
  const { data } = await getdata.json();

  return {
    props: { data },
    revalidate: 2,
  };
};

const CereriCurente = ({ data }) => {
  if (!data) {
    return <Container>Nu exista cereri momentan</Container>;
  }
  const len = data.length;
  return (
    <Container className="gap-2">
      {data.map((item, index) => {
        return (
          <div
            key={item.cerereId}
            className="border border-danger d-flex flex-column align-items-center justify-content-center w-100"
          >
            <p>{len - index}</p>
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
