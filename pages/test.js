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
    "Drobeta-Turnu Severin": 20,
  };
  const divider = 50;
  const values = Object.values(obj);
  const keys = Object.keys(obj);
  const barHeight = 7;
  const spacing = 1;
  const row = barHeight + spacing;
  const size = row * values.length + spacing;
  const colors = ["#c7f9cc", "#80ed99", "#57cc99", "#38a3a5", "#22577a"];
  // const fontSize = barHeight < 5 ? barHeight : barHeight / 1.5;
  const fontSize = barHeight < 4 ? barHeight : 4;
  const fontWeight = 200;

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
              offset = spacing + row / 2;
            } else if (index > 0) {
              offset = index * row + row / 2 + spacing;
            }

            return (
              <text
                x={divider + 0.5 + "%"}
                y={offset}
                fill={fillBar(item)}
                fontSize={fontSize}
                textLength={divider <= 55 ? "none" : 100 - divider - 0.5}
                textAnchor="start"
                lengthAdjust="spacing"
                dominantBaseline="middle"
                fontWeight={fontWeight}
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
