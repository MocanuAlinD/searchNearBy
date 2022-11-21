import React, { useState } from "react";
import styles from "../styles/cardCautare.module.scss";
import { FcExpand, FcCollapse } from "react-icons/fc";
import Link from "next/link";

const CardCautare = ({ data, idx }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
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
            <p>Email:</p>
            <h6>{data.contact.email}</h6>
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
          <div className={styles.row}>
            <p>Program:</p>
            <h6>
              {data.ziinceput} - {data.zisfarsit} : {data.orainceput} -{" "}
              {data.orasfarsit}
            </h6>
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
            <p>Website:</p>
            <h6>{data.website ? data.website : "-"}</h6>
          </div>
          <div className={styles.row}>
            <p>Disponibilitate peste program:</p>
            <h6>{data.urgente ? "Da" : "Nu"}</h6>
          </div>
          <div className={styles.row}>
            <p>Urgente 24/7:</p>
            <h6>{data.urgenteNoapte ? "Da" : "Nu"}</h6>
          </div>
          <div className={styles.row}>
            <p>Descriere:</p>
            <h6>{data.detalii}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCautare;
