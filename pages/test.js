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
          divider="69"
          view="100"
          // textLengthLimit="30"
          width="80%"
          fullBar
          // textLeft
        />
      </div>
    </Container>
  );
};

export default Test;
