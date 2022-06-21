import React from "react";
import BackButton from "../../../../components/BackButton";
import Card from "../../../../components/card";

export const getStaticPaths = async () => {
  const unu = await fetch(`https://madapi.vercel.app/api/jobsTotal`);
  const res = await unu.json();

  const moc = {};
  Object.values(res).map((item) => {
    Object.values(item).map((item1) => {
      moc[item1.id] = item1.judet;
    });
  });
  const paths = Object.keys(moc).map((item) => {
    return {
      params: { person: item.toString(), id: moc[item] },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const oras = context.params.id;
  const person = context.params.person;
  const unu = await fetch(
    `https://madapi.vercel.app/api/getPerson?oras=${oras}&person=${person}`
  );
  const res = await unu.json();

  return {
    props: { res, oras },
    revalidate: 2,
  };
};

const Person = ({ res, oras, setLocation }) => {
  if (!res) {
    return (
      <div className="container-fluid">
        <div className="row col-12 m-0 p-0 mt-2">
          <BackButton url={`/servicii/`} text="Servicii" />
        </div>
        <h4 className="text-center text-white">Pagina nu exista</h4>
      </div>
    );
  }

  const item = res[0];
  return (
    <div
      className="row m-0 p-0 col-12 mx-auto d-flex flex-column align-items-center justify-content-start"
      style={{ minHeight: "90vh" }}
    >
      <div className="row col-12 mt-2">
        <BackButton url={`/servicii/${oras}`} text={`${oras}`} />
      </div>
      <div className="row col-12 m-0 p-0 d-flex justify-content-center align-items-center mt-2">
        <Card data={item} setLocation={setLocation} />
      </div>
    </div>
  );
};

export default Person;
