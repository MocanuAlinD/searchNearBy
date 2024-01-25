import React from "react";
import BackButton from "../../../../components/BackButton";
import Card from "../../../../components/card";
import Ratings from "../../../../components/ratings.js";
import {
  Container,
  SmallContainer,
} from "../../../../components/singleTags/elemetsCustom";
import { IconPercent, IconTest } from "../../../../components/tags/Icon.js";
import styles from "../../../../styles/userCard.module.scss";

export const getStaticPaths = async () => {
  const getCitys = await fetch(`https://madapi.vercel.app/api/jobsTotal`);
  const res = await getCitys.json();

  const judeteAndId = {};
  Object.values(res).map((item) => {
    Object.values(item).map((item1) => {
      judeteAndId[item1.id] = item1.judet;
    });
  });
  const paths = Object.keys(judeteAndId).map((item) => {
    return {
      params: { person: item.toString(), id: judeteAndId[item] },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const oras = context.params.id;
  const personId = context.params.person;
  const getUserData = await fetch(
    `https://madapi.vercel.app/api/getPerson?oras=${oras}&person=${personId}`
  );
  const { data, revs } = await getUserData.json();

  return {
    props: { revs, oras, data },
    revalidate: 5,
  };
};

const Person = ({ data, oras, setLocation, revs }) => {
  if (!data) {
    return (
      <Container>
        <BackButton url={`/servicii/`} text="Servicii" />
        <h4 className="text-center text-white">Pagina nu exista</h4>
      </Container>
    );
  }

  const item = data[0];

  const rotateMenu = (x) => {
    const a = document.getElementById("rotateWrapper");
    a.style.transform = `translateX(${
      x === "1" ? 100 : x === "2" ? 0 : x === "3" && -100
    }%)`;
  };

  // currentStar(number), longRev(string), postTime(string), sortRev(string)
  // TITLE -> tipjob string
  // PRETURI/PROGRAM -> pretMin, pretMax, ziinceput, zisfarsit, orainceput, orasfarsit
  // CONTACT -> fullname, judet, oras, contact.phone[], contact.email[]
  // ALTELE -> urgente boolean, urgenteNoapte boolean, detalii string, dataregister string, oraregister string

  return (
    <Container>
      <BackButton url={`/servicii/${oras}`} text={`${oras}`} />
      <div className={styles.mainContainer}>
        <div className={styles.titleContainer}>
          <h4>
            {item.tipjob} {item.id}
          </h4>
        </div>

        <div className={styles.topMenu}>
          <h4 onClick={() => rotateMenu("1")}>Preturi/Program</h4>
          <h4 onClick={() => rotateMenu("2")}>Contact</h4>
          <h4 onClick={() => rotateMenu("3")}>Altele</h4>
        </div>
        <div className={styles.rotateContainer}>
          <div className={styles.rotateWrapper} id="rotateWrapper">
            <div className={styles.screenLeft}>
              <p>
                <IconPercent size="4rem" />
                Interval preturi: {item.pretMin} {item.pretMax}
              </p>
              <p>
                Lucreaza de: {item.ziinceput} pana {item.zisfarsit}
              </p>
              <p>
                Interval orar: {item.orainceput} - {item.orasfarsit}
              </p>
            </div>

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
              <p>Disponibil peste program: {item.urgente ? "Da" : "Nu"}</p>
              <p>
                Disponibil noaptea (urgente): {item.urgenteNoapte ? "Da" : "Nu"}
              </p>
              <p>Descriere: {item.detalii}</p>
              <p>
                Online din {item.dataregister} ora {item.oraregister}
              </p>
              <button>raporteaza</button>
            </div>
          </div>
        </div>
        <Ratings userReviews={revs} />
      </div>
      <Card data={item} userReviews={revs} />
    </Container>
  );
};

export default Person;
// <Card data={item} userReviews={revs} />
