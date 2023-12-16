import React from "react";
import { Container } from "../components/singleTags/elemetsCustom";
import styles from "../styles/test.module.scss";
import { FaStar } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  setReview,
  setCurrentStar,
  setReviewInitialState,
} from "../features/review/reviewSlice";

const Test = () => {
  const dispatch = useDispatch();
  const eachStar = useSelector((state) => state.review.stars);
  const currentStar = useSelector((state) => state.review.currentStar);

  const changeSlider = (e) => {
    dispatch(setCurrentStar(e));
    dispatch(setReview(e));
  };

  const getPercent = (x) => {
    const total = Object.values(eachStar).reduce((total, num) => {
      return total + num;
    });
    const added = (eachStar[x] * 100) / total;
    return added > 0 ? added : 0;
  };

  return (
    <Container className={styles.container}>
      <div className="d-flex justify-content-between">
        {[...Array(5)].map((_, i) => {
          const newI = i + 1;
          return (
            <div key={newI} className="w-100 m-0 p-0 m-2">
              <h4
                className="text-center m-0 p-0 fs-6"
                style={{
                  color: `${
                    newI <= currentStar
                      ? "var(--color-yellow)"
                      : "var(--color-light)"
                  }`,
                }}
              >
                {newI}
              </h4>
              <input
                type="radio"
                checked={newI <= currentStar}
                value={newI}
                className={styles.input}
                readOnly
              />

              <FaStar
                onClick={() => changeSlider(newI)}
                color={
                  newI <= currentStar
                    ? "var(--color-yellow)"
                    : "var(--color-light)"
                }
                size="30"
                className={styles.star}
              />
            </div>
          );
        })}
      </div>
      <h4 className="w-100 text-center m-0 p-0 fs-6 fw-200">
        Current star selection: {currentStar}
      </h4>

      <button
        onClick={() => dispatch(setReviewInitialState())}
        className="mt-5"
      >
        reset
      </button>

      <div className={styles.ratingScore}>
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
                  size="25"
                />
                <input
                  type="range"
                  min="0"
                  max="100"
                  id="slider"
                  value={getPercent(index + 1)}
                  readOnly
                  style={{
                    background: `linear-gradient(to right, var(--color-blue-dark) ${getPercent(
                      index + 1
                    )}%, var(--color-light) ${getPercent(index + 1)}%)`,
                  }}
                />
                <h4>{eachStar[index + 1]} recenzii</h4>
              </div>
            );
          })
          .reverse()}
      </div>
    </Container>
  );
};

export default Test;
