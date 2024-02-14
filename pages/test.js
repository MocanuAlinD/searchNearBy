import React, { useState, useEffect } from "react";
import OnOff from "../components/tags/OnOff";
import styles from "../styles/pages/test.module.scss";

const Test = () => {
  const moc = () => {};

  return (
    <div className={styles.main}>
      <OnOff size="4rem" />
    </div>
  );
};

export default Test;
