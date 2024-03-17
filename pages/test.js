import React, { useState, useEffect } from "react";
import { Container } from "../components/singleTags/elemetsCustom";
import styles from "../styles/pages/test.module.scss";

const Test = () => {
  const obj = {
    Braila: 50,
    Bucuresti: 30,
    Cluj: 90,
    Constanta: 10,
    Craiova: 70,
    Timisoara: 35,
    Tulcea: 100,
  };
  const divider = 50;
  const values = Object.values(obj);
  const keys = Object.keys(obj);
  const barHeight = 5;
  const spacing = 1;
  const row = barHeight + spacing;
  const size = row * values.length + spacing;
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
            const w = (divider * item) / 100;
            const x = divider - w;

            return (
              <rect
                x={x}
                y={offset}
                width={w + "%"}
                height={barHeight}
                fill={fillBar(item)}
              />
            );
          })}

          {values.map((item, index) => {
            if (index === 0) {
              offset = spacing * 2 + row / 2;
            } else if (index > 0) {
              offset = index * row + row - spacing;
            }

            return (
              <text
                x={divider + 1 + "%"}
                y={offset}
                fill={fillBar(item)}
                fontSize={barHeight / 1.2}
                textLength={100 - divider - 1}
                textAnchor="start"
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
