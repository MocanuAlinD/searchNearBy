import React, { useState } from "react";
import { Container } from "../components/singleTags/elemetsCustom";
import styles from "../styles/test.module.scss";
import { FaStar } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  setReview,
  setCurrentStar,
  setInitialStateReview,
} from "../features/review/reviewSlice";
import { getDatabase, ref, onValue } from "firebase/database";

const Test = () => {
  const [state, setState] = useState(0);
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

  const db = getDatabase();
  const all = ref(db, "/");

  // "16520824347123097" "17006014727931537" "17020697116391575" "170223731112060436"
  // Brașov Bacău Brasov Buzău Constanța
  const getAll = () => {
    const perJudet = [];
    const revs = [];
    onValue(
      all,
      (s) => {
        if (s.val() !== null) {
          const judeteAll = s.val().Alin;
          if (judeteAll) {
            const a = judeteAll["Buzău"];
            if (a) {
              console.log("judet exista");
              [a].map((item) =>
                Object.values(item).map((i) => {
                  perJudet.push(i);
                  const b = s.val().reviews;
                  const c = b[i.id];
                  if (c) {
                    // reviews exists
                    Object.values(c).map((item) => revs.push(item));
                  } else {
                    // reviews NOT exists
                    console.log("review NOT exists", c);
                  }
                  // console.log("Reviews: ",c, i.id);
                })
              );
            } else {
              console.log("judet NU exista");
            }
            console.log("db exists");
          } else {
            console.log("db nu exista");
          }
        }
      },
      {
        onlyOnce: true,
      }
    );
    console.log("Judet LIST: ", perJudet);
    console.log("Revs LIST: ", revs);
  };

  return (
    <Container className={styles.container}>
      <button onClick={getAll}>get all</button>

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
      <button
        onClick={() => dispatch(setInitialStateReview())}
        className="mt-5"
      >
        reset
      </button>
      <button>
        <span></span>
        Print state
      </button>
      <div className={styles.svg}>
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          preserveAspectRatio="none"
          style={{ border: "1px solid red" }}
        >
          <g>
            <rect id="bg" width="100" height="100" fill="#1A303A" />
            <path
              id="contur"
              d="M95 15 h-55 l-25 35 l25 35 h55 v-70"
              stroke-linecap="round"
              stroke-width="2"
            />
            <path
              id="line1"
              d="M45 30 l40 40"
              stroke="white"
              stroke-linecap="round"
              stroke-width="2"
            ></path>
            <path
              id="line2"
              d="M45 70 l40 -40"
              stroke="white"
              stroke-linecap="round"
              stroke-width="2"
            ></path>
          </g>
          <circle cx="45" cy="30" r="2" stroke="none" stroke-width="1" />
          <style>
            {`
            #contur{
              stroke: white;
              stroke-width: 2;
            }
            #line1{
              animation: line1 1s linear infinite;
              stroke-dasharray: 57;
              stroke-dashoffset: 57;
            }
            #line2{
              animation: line2 1s linear infinite;
              stroke-dasharray: 57;
              stroke-dashoffset: 57;
            }
            @keyframes line1 {
              from{
                stroke-dasharray: 57;
                stroke-dashoffset: 57;
                opacity: 0;
              }
              to{
                stroke-dashoffset: 0;
                opacity: 1;
              }
            }
            @keyframes line2 {
              from{
                stroke-dasharray: 57;
                stroke-dashoffset: 57;
                opacity: 0;
              }
              to{
                stroke-dashoffset: 0;
                opacity: 1;
              }
            }
          `}
          </style>
        </svg>
      </div>
    </Container>
  );
};

export default Test;

// <animateTransform
//   attributeName="transform"
//   type="scale"
//   from="1"
//   to="0.5"
//   dur="1.5s"
//   values="1;0.9;1"
//   keytimes="0;0.5;1"
//   repeatCount="indefinite"
// />;
