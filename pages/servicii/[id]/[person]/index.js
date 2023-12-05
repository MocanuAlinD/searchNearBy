import React from "react";
import BackButton from "../../../../components/BackButton";
import Card from "../../../../components/card";
import { Container } from "../../../../components/singleTags/elemetsCustom";

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
      <Container>
        <BackButton url={`/servicii/`} text="Servicii" />
        <h4 className="text-center text-white">Pagina nu exista</h4>
      </Container>
    );
  }

  const item = res[0];
  return (
    <Container>
      <BackButton url={`/servicii/${oras}`} text={`${oras}`} />
      <div className="row col-12 m-0 p-0 pb-3 d-flex justify-content-center align-items-center mt-2">
        <Card data={item} setLocation={setLocation} />
      </div>
    </Container>
  );
};

export default Person;
