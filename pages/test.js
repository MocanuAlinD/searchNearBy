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
          divider="26"
          barHeight="8"
          view="200"
          fontSize={5}
          percentFontSize="1.5"
          spacing="0.5"
          textLengthLimit="18"
          width="80%"
          fullBar
          textLeft
          // gradient
        />
      </div>
    </Container>
  );
};

export default Test;
