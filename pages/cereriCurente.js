import React from "react";
import { Container } from "../components/singleTags/elemetsCustom";

export const getStaticProps = async () => {
  try {
    const getdata = await fetch("https://madapi.vercel.app/api/cereriCurente");
    const { data } = await getdata.json();
    return {
      props: { data },
      revalidate: 2,
    };
  } catch (error) {
    return {
      props: { data: [] },
      revalidate: 2,
    };
  }
};

const CereriCurente = ({ data }) => {
  if (data.length <= 0 || !data) {
    return <Container>Nu exista cereri momentan</Container>;
  }
  return (
    <Container className="gap-2">
      <div className="d-flex justify-content-center my-3">
        Cereri depuse: {data.length}
      </div>
      {data.map((item, index) => {
        return (
          <div
            key={item.cerereId}
            className="border border-danger d-flex flex-column align-items-center justify-content-center w-100"
          >
            <h6>{data.length - index}</h6>
            <h6>{item.caut}</h6>
            <h6>{item.cerereId}</h6>
            <h6>{item.char}</h6>
            <h6>{item.contact}</h6>
            <h6>{item.currentDate}</h6>
            <h6>{item.currentTime}</h6>
            <h6>{item.dataLimita}</h6>
            <h6>{item.numePrenume}</h6>
            <h6>{item.sumaAlocata}</h6>
          </div>
        );
      })}
    </Container>
  );
};

export default CereriCurente;
