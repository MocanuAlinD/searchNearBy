import React, { useState } from "react";
import BackButton from "../../../../components/BackButton";
import Card from "../../../../components/card";
import Ratings from "../../../../components/ratings.js";
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

  const rotateMenu = (x) => {
    const a = document.getElementById("rotateWrapper");
    a.style.transform = `translateX(${
      x === "1" ? 100 : x === "2" ? 0 : x === "3" && -100
    }%)`;
  };

  // currentStar(number), longRev(string), postTime(string), sortRev(string)
  // contact.email - []
  // contact.phone - []
  // dataregister - string
  // detalii - string
  // fullname - string
  // id, judet,orainceput, oraregister,oras,orasfarsit,pretMax, pretmin, tipjob,ziinceput, zisfarsit
  // urgente, urgenteNoapte - boolean

  return (
    <Container>
      <BackButton url={`/servicii/${oras}`} text={`${oras}`} />
      <Container className="w-100">
        <div className={styles.mainContainer}>
          <div className={styles.titleContainer}>
            <h4>{item.tipjob}</h4>
          </div>

          <div className={styles.topMenu}>
            <h4 onClick={() => rotateMenu("1")}>Preturi/Program</h4>
            <h4 onClick={() => rotateMenu("2")}>Contact</h4>
            <h4 onClick={() => rotateMenu("3")}>Altele</h4>
          </div>
          <div className={styles.rotateContainer}>
            <div className={styles.rotateWrapper} id="rotateWrapper">
              <div className={styles.screenLeft}>Left</div>
              <div className={styles.screenMiddle}>
                <h6>Nume: {item.fullname}</h6>
                {item.contact.email.map((item, idx) => {
                  return (
                    <h6 key={idx}>
                      Email {idx + 1}: {item}
                    </h6>
                  );
                })}
                {item.contact.phone.map((item, index) => {
                  return (
                    <h6 key={index}>
                      Telefon {index + 1}: {item}
                    </h6>
                  );
                })}
                <h6>
                  Locatie: {item.judet}, {item.oras}
                </h6>
              </div>
              <div className={styles.screenRight}>
                Right jklfd fjslk jslkf jlskafj lskjf lksjf lksjf lksjf lksj
                lksj lksjd lksjdf lskdjf lksjflk sjflkj lkdsfajlkdsjflk sjflkjas
                lfasj mocanu
              </div>
            </div>
          </div>
          <Ratings userReviews={userReviews} />
        </div>
      </Container>
    </Container>
  );
};

export default Person;
