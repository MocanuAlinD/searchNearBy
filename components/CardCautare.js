import React from "react";
import styles from "../styles/cardCautare.module.scss";
import Link from "next/link";

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

const CardCautare = ({ data, idx }) => {
  const gotoId = `/servicii/${data.judet}/${data.id}`;

  const tempDate = new Date(data.dataregister);
  const formatedDate = `${tempDate.getDate()} ${
    namedMonths[tempDate.getMonth() + 1]
  } ${tempDate.getFullYear()}`;

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
            <h6>{data.contact.phone}</h6>
          </div>
          <div className={styles.row}>
            <p>Locație:</p>
            <h6>{`${data.judet}, ${data.oras}`}</h6>
          </div>
          <div className={styles.row}>
            <p className={styles.disponibil}>
              Disponibil din: <b>{formatedDate}</b>
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
