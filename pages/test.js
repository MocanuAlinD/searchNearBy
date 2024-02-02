import React, { useState, useEffect } from "react";
import SvgButton from "../components/tags/svgButton";
import styles from "../styles/test.module.scss";
import Romania from "../components/Romania";

const Test = () => {
  const txt = () => {
    const doc = document.getElementById("svg1");
  };

  return (
    <div className={styles.svgcontainer}>
      <SvgButton onClick={txt}>Text</SvgButton>
      <Romania />
    </div>
  );
};

export default Test;
