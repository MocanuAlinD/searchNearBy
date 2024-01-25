import React, { useState, useEffect } from "react";
import styles from "../styles/test.module.scss";
import SvgButton from "../components/tags/svgButton";

const Test = () => {
  const txt = () => {
    const doc = document.getElementById("svg1");
  };

  return (
    <div className={styles.svgcontainer}>
      <SvgButton onClick={txt}>Text</SvgButton>
      <SvgButton onClick={() => setLoading(true)}>Start timer</SvgButton>
      <SvgButton onClick={() => setLoading(false)}>Stop timer</SvgButton>

      <svg id="svg1" viewBox="0 0 300 300" height="40rem">
        <pattern
          id="pat"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="50" cy="50" r="10" />
          <rect fill="none" stroke="gray" width="100" height="100" />
        </pattern>
        <rect fill="url(#pat)" width="100%" height="100%" />
        <style>
          {`
        #svg1{
          border: 1px solid gray;
          // width: 25rem;
          background-color: black;
          // border-radius: 50%;
        }
        text{
          fill: gray;
          font-family: monospace;
          stroke: none;
        }
        circle{
          transition: .5s linear;
          fill: blue;
        }
        circle:hover{
          fill: coral;
        }
        `}
        </style>
      </svg>
    </div>
  );
};

export default Test;
