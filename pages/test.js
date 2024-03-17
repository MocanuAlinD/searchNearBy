import React, { useState, useEffect } from "react";
import { Container } from "../components/singleTags/elemetsCustom";
import styles from "../styles/pages/test.module.scss";

const Test = () => {
  const values = [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 70, 50, 30, 3];
  const topBottom = 2;
  const size = values.length * 5 + values.length * 2 + topBottom;
  const max = Math.max(...values);
  const finalValues = (x) => {
    const one = ((100 * x) / max).toFixed(2);
    return one;
  };

  const colors = ["#d90429", "#f77f00", "#ffe5d9", "#b5e48c", "#7ae582"];

  const fillBar = (sz) => {
    if (sz <= 20) {
      return colors[0];
    } else if (sz > 20 && sz <= 40) {
      return colors[1];
    } else if (sz > 40 && sz <= 60) {
      return colors[2];
    } else if (sz > 60 && sz <= 80) {
      return colors[3];
    } else if (sz > 80 && sz <= 100) {
      return colors[4];
    }
  };
  return (
    <Container>
      <div className={styles.main}>
        <svg
          id="graphSvg"
          viewBox={`0 0 ${size} ${size}`}
          preserveAspectRatio="none"
          width="100%"
          height={size}
        >
          {values.map((item, index) => {
            const offset = index * 7 + topBottom;
            console.log(finalValues(item));
            return (
              <rect
                x="0"
                y={offset}
                width={item}
                height="5"
                fill={fillBar(item)}
              />
            );
          })}
        </svg>
      </div>
    </Container>
  );
};

export default Test;
