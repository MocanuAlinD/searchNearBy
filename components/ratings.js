import React from "react";
import styles from "../styles/ratings.module.scss";
import { FaStar } from "react-icons/fa";
import RatingMedia from "../components/ratingMedia.js";
import Stars from "../components/Stars.js";
import { ButtonWithIcon } from "./singleTags/ButtonWithIcon.js";

const Ratings = ({ userReviews }) => {
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

  const getPercent = (x) => {
    const total = Object.values(eachStar).reduce((total, num) => {
      return total + num;
    });
    const added = (eachStar[x] * 100) / total;
    return added > 0 ? added : 0;
  };

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
    <div className={styles.ratingScore}>
      <div className={styles.topContainer}>
        <RatingMedia nos={media()} />
        <div className={styles.allStars}>
          {[...Array(5)]
            .map((_, index) => {
              return (
                <div key={index}>
                  <h4>{index + 1}</h4>
                  <FaStar
                    style={{
                      color: "var(--color-yellow)",
                      marginRight: ".5rem",
                    }}
                    size="20"
                  />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    id="slider"
                    value={getPercent(index + 1)}
                    readOnly
                    style={{
                      background: `linear-gradient(to right, var(--color-blue-darkish) ${getPercent(
                        index + 1
                      )}%, var(--color-light) ${getPercent(index + 1)}%)`,
                      height: ".6rem",
                    }}
                  />
                  <h4 className={styles.recenzii}>
                    {eachStar[index + 1]}{" "}
                    {eachStar[index + 1] == 1 ? "recenzie" : "recenzii"}
                  </h4>
                </div>
              );
            })
            .reverse()}
        </div>
      </div>

      <div className="justify-content-end mb-3">
        <ButtonWithIcon w="fit-content" p=".3rem 1rem" pl="1rem" m=".3rem">
          {userReviews.length > 0
            ? "Lasa un review"
            : "Fii primul care lasa un review"}
        </ButtonWithIcon>
      </div>
      <div className={styles.bottomContainer}>
        {userReviews &&
          userReviews.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  styles.userReviewContainer + " flex-column flex-md-row"
                }
              >
                <div
                  className={
                    styles.userInfo + " align-items-md-start align-items-center"
                  }
                >
                  <p>{item.numeReview}</p>
                  <p>adaugat {item.postTime}</p>
                  <span>
                    <Stars nos={item.currentStar} />
                  </span>
                </div>
                <div className={styles.userReview}>
                  <p>&emsp;{item.sortRev}</p>
                  <p>{item.longRev}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Ratings;

// currentStar
// id
// judet
// longRev
// numeReview
// oras
// postTime
// sortRev
