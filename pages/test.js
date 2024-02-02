import React, { useState, useEffect } from "react";
import SvgButton from "../components/tags/svgButton";
import Romania from "../components/Romania";
import styles from "../styles/test.module.scss";

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
