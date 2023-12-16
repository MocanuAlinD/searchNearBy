import React, { useState } from "react";
import { Container } from "../components/singleTags/elemetsCustom";
import Stars from "../components/Stars";
import styles from "../styles/test.module.scss";
import { FaStar } from "react-icons/fa";

const Test = () => {
  const initial = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };
  const [state, setState] = useState(1);
  const [each, setEach] = useState(initial);
  const [score, setScore] = useState(0);

  const changeSlider = (e) => {
    setState(e);
    setEach((prev) => ({ ...each, [e]: each[e] + 1 }));
    average();
  };

  const getPercent = (x) => {
    const total = Object.values(each).reduce((total, num) => {
      return total + num;
    });
    const added = (each[x] * 100) / total;
    return added > 0 ? added : 0;
  };

  const average = () => {
    const k1 = each[1];
    const k2 = each[2];
    const k3 = each[3];
    const k4 = each[4];
    const k5 = each[5];
    const av = 1 * k1 + 2 * k2 + 3 * k3 + 4 * k4 + 5 * k5;
    const totalReviews = k1 + k2 + k3 + k4 + k5;
    const finalScore = (av / totalReviews).toFixed(2);
    setScore((prev) => finalScore);
  };

  const resetAll = () => {
    setState(1);
    setEach(initial);
    average();
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
                    newI <= state ? "var(--color-yellow)" : "var(--color-light)"
                  }`,
                }}
              >
                {newI}
              </h4>
              <input
                type="radio"
                checked={newI <= state}
                value={newI}
                className={styles.input}
                readOnly
              />

              <FaStar
                onClick={() => changeSlider(newI)}
                color={
                  newI <= state ? "var(--color-yellow)" : "var(--color-light)"
                }
                size="30"
                className={styles.star}
              />
            </div>
          );
        })}
      </div>
      <h4 className="w-100 text-center m-0 p-0 fs-6 fw-200">
        Actual state: {state} - Score: {score}
      </h4>

      <button onClick={resetAll} className="mt-5">
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
                <h4>{each[index + 1]} recenzii</h4>
              </div>
            );
          })
          .reverse()}
      </div>
      <button onClick={average}>average</button>
    </Container>
  );
};

export default Test;

// <div className="border d-flex gap-3">
//         <h4>{each[1]}</h4>
//         <h4>{each[2]}</h4>
//         <h4>{each[3]}</h4>
//         <h4>{each[4]}</h4>
//         <h4>{each[5]}</h4>
//       </div>
