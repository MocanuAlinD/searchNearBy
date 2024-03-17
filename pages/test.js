import React, { useState, useEffect } from "react";
import { Container } from "../components/singleTags/elemetsCustom";
import styles from "../styles/pages/test.module.scss";

const Test = () => {
  const values = [10, 18, 24, 35, 46, 57, 68, 79, 90];
  const barHeight = 5;
  const spacing = 1;
  const row = barHeight + spacing;
  const size = row * values.length;
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

            return (
              <rect
                x="0%"
                y={offset}
                width={item + "%"}
                height={barHeight}
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
