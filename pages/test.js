import React, { useState, useEffect } from "react";
import { Container } from "../components/singleTags/elemetsCustom";
import styles from "../styles/pages/test.module.scss";

const Test = () => {
  const obj = {
    Constanta: 10,
    Bucuresti: 18,
    Braila: 35,
    Tulcea: 99,
    Craiova: 1,
    Cluj: 7,
  };
  const values = Object.values(obj);
  const keys = Object.keys(obj);
  const barHeight = 5;
  const spacing = 1;
  const row = barHeight + spacing;
  const size = row * values.length;
  const colors = ["#d90429", "#f77f00", "#ffe5d9", "#b5e48c", "#7ae582"];
  console.log(values.length);

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
  let offset;
  return (
    <Container>
      <div className={styles.main}>
        <svg
          id="graphSvg"
          viewBox={`0 0 100 ${size}`}
          preserveAspectRatio="none"
          width="100%"
          height="100%"
        >
          {values.map((item, index) => {
            if (index === 0) {
              offset = spacing;
            } else if (index > 0) {
              offset = index * row + spacing;
            }

            return (
              <rect
                x={50 - item / 2}
                y={offset}
                width={item / 2 + "%"}
                height={barHeight}
                fill={fillBar(item)}
                // fill="gray"
              />
            );
          })}

          {values.map((item, index) => {
            if (index === 0) {
              offset = row / 2 + spacing * 2;
            } else if (index > 0) {
              offset = index * row + row - spacing;
            }

            return (
              <text
                x="52%"
                y={offset}
                fill={fillBar(item)}
                stroke="blue"
                fontSize={barHeight - 1}
                // textLength={50}
              >
                {keys[index]}
              </text>
            );
          })}
        </svg>
      </div>
    </Container>
  );
};

export default Test;
