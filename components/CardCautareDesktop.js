import React from "react";
import Link from "next/link";
import Stars from "../components/Stars";
import styles from "../styles/comps/cardCautareDesktop.module.scss";

const CardCautareDesktop = ({ data, key, idx, revs }) => {
  const gotoId = `/servicii/${data.judet}/${data.id}`;
  const textLength = 50;

  const sliceText =
    data.tipjob.length > textLength
      ? data.tipjob.slice(0, textLength) + "..."
      : data.tipjob;

  const flt = revs.filter((item) => item.id === data.id);

  const userReviews = revs ? flt : [];

  const eachStar = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };

  userReviews.map(
    (i) => (eachStar[i.currentStar] = eachStar[i.currentStar] + 1)
  );

  const media = () => {
    const totalRev = Object.values(eachStar).reduce((total, num) => {
      return total + num;
    });
    const md =
      (eachStar[1] * 1 +
        eachStar[2] * 2 +
        eachStar[3] * 3 +
        eachStar[4] * 4 +
        eachStar[5] * 5) /
      totalRev;
    return md > 0 ? md : 0;
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
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
          <div className={styles.bottomRight}>
            <Stars nos={media()} size="20" inactiveColor="#fff3" />
          </div>
          <div className={styles.tipjob}>
            {idx + 1} - {sliceText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCautareDesktop;
