import React, { useState } from "react";
import BackButton from "../../../../components/BackButton";
import Card from "../../../../components/card";
import Ratings from "../../../../components/ratings.js";
import {
  Container,
  Wrapper,
  TextAreaCustom,
  ParaCustom,
} from "../../../../components/singleTags/elementsCustom";
import {
  IconMinMax,
  IconDays,
  IconOrar,
} from "../../../../components/tags/Icon.js";
import IconWithText from "../../../../components/tags/IconWithText";
import styles from "../../../../styles/pages/userCard.module.scss";

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
  const [state, setState] = useState(false);

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

  const openDescription = (s) => {
    setState(s);
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
          <h4>{item.tipjob}</h4>
        </div>

        <div className={styles.topMenu}>
          <h4 onClick={() => rotateMenu("1")}>Preturi/Program</h4>
          <h4 onClick={() => rotateMenu("2")}>Contact</h4>
          <h4 onClick={() => rotateMenu("3")}>Altele</h4>
        </div>
        <div className={styles.rotateContainer}>
          <div className={styles.rotateWrapper} id="rotateWrapper">
            <div className={styles.screenLeft}>
              <span>
                <IconMinMax min={item.pretMin} max={item.pretMax} text=" " />
              </span>
              <span>
                <IconDays zi_start={item.ziinceput} zi_end={item.zisfarsit} />
              </span>
              <span>
                <IconOrar inceput={item.orainceput} sfarsit={item.orasfarsit} />
              </span>
            </div>

            <div className={styles.screenMiddle}>
              <Wrapper w="75%" mw="100%">
                <IconWithText text={item.fullname} iconName="name" />
                {item.contact.email.map((item, idx) => {
                  return (
                    <IconWithText
                      key={idx}
                      text={item}
                      iconName="email01_blue"
                    />
                  );
                })}
                {item.contact.phone.map((item, idx) => {
                  return (
                    <IconWithText
                      key={idx}
                      text={item}
                      iconName="phone01_blue"
                    />
                  );
                })}
                <IconWithText
                  text={`${item.judet}, ${item.oras}`}
                  iconName="location"
                />
              </Wrapper>
            </div>

            <div className={styles.screenRight}>
              <Wrapper w="75%" mw="100%">
                <IconWithText
                  text={`${item.urgente ? "Da" : "Nu"}`}
                  iconName="overtime"
                />
                <IconWithText
                  text={`${item.urgenteNoapte ? "Da" : "Nu"}`}
                  iconName="247"
                />

                <IconWithText
                  iconName="description"
                  text="Apasa pentru descriere"
                  click={() => openDescription(true)}
                  color="var(--color-blue)"
                  underline
                  cursor="pointer"
                />
                <IconWithText
                  text={`${item.dataregister} ora ${item.oraregister}`}
                  iconName="onlineFrom"
                />
                <IconWithText iconName="report" text="Raporteaza" />
              </Wrapper>
              {state && (
                <Wrapper
                  className={styles.dialog}
                  onClick={() => openDescription(false)}
                  jc="space-around"
                  m="0"
                  p="2rem"
                >
                  <ParaCustom>&emsp;&#8811;&emsp;{item.detalii}</ParaCustom>
                  <ParaCustom
                    color="var(--color-yellow)"
                    ta="center"
                    fs="var(--fs067)"
                  >
                    Apasa oriunde pentru a inchide
                  </ParaCustom>
                </Wrapper>
              )}
            </div>
          </div>
        </div>
        <Ratings userReviews={revs} />
      </div>
    </Container>
  );
};

export default Person;
// <Card data={item} userReviews={revs} />
