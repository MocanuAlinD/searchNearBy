import React from "react";
import BackButton from "../../../../components/BackButton";
import Card from "../../../../components/card";
import {
  Container,
  SmallContainer,
} from "../../../../components/singleTags/elemetsCustom";
import { getDatabase, onValue, ref } from "firebase/database";
import styles from "../../../../styles/userCard.module.scss";

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

  const db = getDatabase();
  const dbName = ref(db, `reviews/${person}`);
  const d = Object.values(dbName);
  let userReviews = [];
  onValue(dbName, (s) => {
    if (s.val() !== null) {
      [s.val()].map((items) =>
        Object.values(items).map((x) => userReviews.push(x))
      );
    }
  });

  return {
    props: { res, oras, userReviews },
    revalidate: 5,
  };
};

const Person = ({ res, oras, setLocation, userReviews }) => {
  if (!res) {
    return (
      <Container>
        <BackButton url={`/servicii/`} text="Servicii" />
        <h4 className="text-center text-white">Pagina nu exista</h4>
      </Container>
    );
  }

  const item = res[0];
  console.log(item);
  return (
    <Container>
      <BackButton url={`/servicii/${oras}`} text={`${oras}`} />
      <Container className="w-100">
        <div className={styles.mainContainer}>
          <div className={styles.titleContainer}>
            <h4>{item.tipjob}</h4>
          </div>

          <div className={styles.topMenu}>
            <h4>Contact</h4>
            <h4>Preturi/Program</h4>
            <h4>Altele</h4>
          </div>
          <div className={styles.rotateContainer}>
            <div className={styles.rotateWrapper}>
              <div className={styles.screenLeft}>1</div>
              <div className={styles.screenMiddle}>2</div>
              <div className={styles.screenRight}>3</div>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default Person;

// <BackButton url={`/servicii/${oras}`} text={`${oras}`} />
//       <div className="row col-12 m-0 p-0 pb-3 d-flex justify-content-center align-items-center mt-2">
//         <Card data={item} setLocation={setLocation} userReviews={userReviews} />
//       </div>
