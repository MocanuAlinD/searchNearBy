import React, { useState, useEffect } from "react";
import { Container } from "../components/singleTags/elemetsCustom";
import Bars from "../components/Graphs/Bars";
import styles from "../styles/pages/test.module.scss";

const Test = () => {
  return (
    <Container>
      <div className={styles.main}>
        <Bars
          barHeight="4"
          width="40rem"
          // fontSize="2"
          // height="20rem"
          // border
          // gradient
          // gradientColor1="black"
          // textColorSingle="red"
          divider="50"
          spacing="2"
          padding="0"
        />
      </div>
    </Container>
  );
};

export default Test;
