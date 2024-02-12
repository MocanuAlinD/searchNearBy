import React from "react";
import styles from "../styles/comps/cardCautareDesktop.module.scss";
import Link from "next/link";

const CardCautareDesktop = ({ data, key, idx, revs }) => {
  const gotoId = `/servicii/${data.judet}/${data.id}`;
  const textLength = 50;

  const sliceText =
    data.tipjob.length > textLength
      ? data.tipjob.slice(0, textLength) + "..."
      : data.tipjob;

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.bottom}></div>
          <div className={styles.top}></div>
          <div className={styles.card1}>
            <div className={styles.card1Content}>
              <h6>Nume</h6>
              <p>{data.fullname}</p>
              <h6>Preturi</h6>
              <p>
                Lei: {data.pretMin} - {data.pretMax}
              </p>
            </div>
          </div>
          <div className={styles.card2}>
            <div className={styles.card2Content}>
              <h6>Program</h6>
              <p>
                Zile: {data.ziinceput} - {data.zisfarsit}
              </p>
              <p>
                Ore: {data.orainceput} - {data.orasfarsit}
              </p>
            </div>
          </div>
          <div className={styles.bottomFront}>
            <div className={styles.link}>
              <span>{sliceText}</span>
              <Link href={gotoId}>
                <a target="_blank">Detalii</a>
              </Link>
            </div>
          </div>
          <div className={styles.bottomRight}></div>
          <div className={styles.tipjob}>
            {idx + 1} - {sliceText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCautareDesktop;
