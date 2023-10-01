import React from "react";
import styles from "../styles/cardCautare.module.scss";
import Link from "next/link";

const CardCautare = ({ data, idx }) => {
  const gotoId = `/servicii/${data.judet}/${data.id}`
  return (
    <div className={styles.container + " m-0 p-0 px-1 mb-2 mx-md-1"}>
      <div className={styles.topWrapper}>
        <h6>{idx + 1}</h6>
        <h6>{data.tipjob}</h6>
      </div>
      <hr />
      <div className={styles.bottomWrapper}>
        <div className={styles.bottomLeft}>
          <div className={styles.row}>
            <p>Nume:</p>
            <h6>{data.fullname}</h6>
          </div>
          <div className={styles.row}>
            <p>Tel:</p>
            <h6>{data.contact.phone}</h6>
          </div>
          <div className={styles.row}>
            <p>Judet:</p>
            <h6>{data.judet}</h6>
          </div>
          <div className={styles.row}>
            <p>Oras:</p>
            <h6>{data.oras}</h6>
          </div>
        </div>
        <div className={styles.bottomRight}>
          <div className={styles.row}>
            <p>Tarif:</p>
            <h6>
              {data.pretMin} - {data.pretMax}
            </h6>
          </div>
          <div className={styles.row}>
            <p>Program:</p>
            <h6>
              {data.ziinceput} - {data.zisfarsit} : {data.orainceput} -{" "}
              {data.orasfarsit}
            </h6>
          </div>
          <div className={styles.row}>
            <Link href={gotoId}>
              <a target="_blank">Vezi alte detalii</a>
            </Link>
          </div>

          <div className={styles.row}>
            <p>Data înregistrării</p>
            <h6>
              {data.dataregister}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCautare;
