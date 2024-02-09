import React, { useState, useEffect } from "react";
import styles from "../styles/pages/test.module.scss";

const Test = () => {
  const moc = () => {
    // const one = document.getElementById("c1");
    // one.style.r = 100;
    // one.style.fill = "red";
    // one.classList = "";
    // one.classList.add("mocanu");
    const a = document.querySelectorAll("circle")
    console.log(a)
  };
  const moc1 = () => {
    // const one = document.getElementById("c1");
    // one.style.r = 10;
    // one.style.fill = "green";
    // one.classList = "";
    // one.classList.add("alin");
  };

  const dan = (item) => {
    var items = document.querySelectorAll("UL.location__list LI A");
    items.forEach(item => {
      item.addEventListener("mouseover", itemMouseOver);
      item.addEventListener("mouseout", itemMouseOut);
    });
  }

  return (
    <div className={styles.main}>
      <svg viewBox="0 0 1000 1000">
        <circle
          cx="100"
          cy="100"
          r="20"
          fill="black"
          onMouseEnter={() => moc()}
          onMouseLeave={() => moc1()}
        />
        <circle id="c1" cx="250" cy="250" r="10" />
      </svg>
    </div>
  );
};

export default Test;
