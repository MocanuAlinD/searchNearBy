import React, { useState, useEffect } from "react";
import { Container } from "../components/singleTags/elemetsCustom";
import Bars from "../components/Graphs/Bars";
import styles from "../styles/pages/test.module.scss";

const Test = () => {
  return (
    <Container>
      <div className={styles.main}>
        <Bars
          conturView
          divider="50"
          view="215"
          textLengthLimit="20"
          width="80%"
          fullBar
          textLeft
        />
      </div>
    </Container>
  );
};

export default Test;
