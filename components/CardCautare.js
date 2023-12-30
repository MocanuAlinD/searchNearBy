import React from "react";
import styles from "../styles/cardCautare.module.scss";
import Link from "next/link";
import Stars from "../components/Stars";

const namedMonths = {
  1: "Ianuarie",
  2: "Februarie",
  3: "Martie",
  4: "Aprilie",
  5: "Mai",
  6: "Iunie",
  7: "Iulie",
  8: "August",
  9: "Septembrie",
  10: "Octombrie",
  11: "Noiembrie",
  12: "Decembrie",
};

const CardCautare = ({ data, idx, revs }) => {
  console.log('card cautare revs',revs)
  const gotoId = `/servicii/${data.judet}/${data.id}`;
  const tempDate = new Date(data.dataregister);
  const formatedDate = `${tempDate.getDate()} ${
    namedMonths[tempDate.getMonth() + 1]
  } ${tempDate.getFullYear()}`;

  const userReviews = [];

  Object.values(revs).map((item) => userReviews.push(item));
  // const a = Object.values(revs[0])
  // console.log("Card cautare: ",a);

  // const eachStar = {
  //   1: 0,
  //   2: 0,
  //   3: 0,
  //   4: 0,
  //   5: 0,
  // };

  // userReviews.map(
  //   (i) => (eachStar[i.currentStar] = eachStar[i.currentStar] + 1)
  // );

  // const media = () => {
  //   const totalRev = Object.values(eachStar).reduce((total, num) => {
  //     return total + num;
  //   });
  //   const md =
  //     (eachStar[1] * 1 +
  //       eachStar[2] * 2 +
  //       eachStar[3] * 3 +
  //       eachStar[4] * 4 +
  //       eachStar[5] * 5) /
  //     totalRev;
  //   return md > 0 ? md : 0;
  // };
  // const md = media();

  return (
    <div className={styles.container + " px-1 mb-2 mx-md-1"}>
      <div className={styles.topWrapper}>
        <h6>{idx + 1}</h6>
        <h6>{data.tipjob}</h6>
      </div>
      <hr />
      <div className={styles.bottomWrapper}>
        <div className={styles.card}>
          <div className={styles.row}>
            <p>Nume:</p>
            <h6>{data.fullname}</h6>
          </div>
          <div className={styles.row}>
            <p>Telefon:</p>
            {data.contact.phone.map((item, index) => {
              return (
                <h6 key={index}>
                  Telefon {index + 1}: {item}
                </h6>
              );
            })}
          </div>
          <div className={styles.row}>
            <p>Locație:</p>
            <h6>{`${data.judet}, ${data.oras}`}</h6>
          </div>
          <div className={styles.row}>
            <p className={styles.disponibil}>
              Înregistrat din: <b>{formatedDate}</b>
            </p>
          </div>
          <div className={styles.row}>
            <p className={styles.disponibil}>
              Dupa ora 16( pana seara ): <b>{data.urgente ? "DA" : "NU"}</b>
            </p>
          </div>
          <div className={styles.row}>
            <p className={styles.disponibil}>
              Urgente 24/7: <b>{data.urgenteNoapte ? "DA" : "NU"}</b>
            </p>
          </div>
          <div className={styles.row}>
            <p className={styles.disponibil}>
              Website: <b>{data.website ? "DA" : "NU"}</b>
            </p>
          </div>
          <div className={styles.row}>
            <p className={styles.disponibil}>
              Tarif:{" "}
              <b>
                {data.pretMin} - {data.pretMax}
              </b>
            </p>
          </div>
          <div className={styles.link}>
            
            <Link href={gotoId}>
              <a target="_blank">Vezi alte detalii</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCautare;

// <Stars nos={md} />