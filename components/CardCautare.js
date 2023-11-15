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

  const testdate = new Date(data.dataregister).getTime() / 1000; //seconds
  let diffalin = 0;

  const { day, month, year } = { day: 86400, month: 2678400, year: 31536000 };
  const prezent = Math.floor(new Date().getTime()) / 1000; //seconds

  const registeredYear = new Date(data.dataregister).getFullYear();
  const prez = Date.now();
  const prezentYear = new Date(prez).getFullYear();

  function checkLeap(y) {
    const x1 =
      y % 100 === 0 ? false : y % 400 === 0 ? false : y % 4 === 0 && true;
    return x1;
  }

  const checkNrAni = (currYear, regYear) => {
    const aniDiff = currYear - regYear;
    for (let i = 0; i < aniDiff; i++) {
      const res = checkLeap(regYear + i);
      if (res === true) {
        diffalin += day;
      }
    }
  };

  checkNrAni(prezentYear, registeredYear);

  const floor = (z) => {
    return Math.floor(z);
  };

  const calcYears = (x) => {
    const diff = prezent - x + diffalin; // remaining total time OK
    const ani = floor(diff / year); // nr ani OK
    const restAni = diff % year; // ramane pt luni in secunde
    const luni = floor(restAni / month); // luni OK
    const restZile = restAni % month; // ramane pt zile in secunde
    const zile = floor(restZile / day);

    console.log(`Online de: ${ani > 0 ? ani + (ani > 1 ? " ani": " an") : ""} ${luni > 0 ? "Luni: " + luni : ""} ${zile > 0 ? "Zile: " + zile : ""}`, data.dataregister);
  };

  calcYears(testdate);

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
