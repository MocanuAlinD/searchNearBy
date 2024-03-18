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
          fontSize="3"
          textColor="coral"
          // colors={["red", "blue", "yellow", "cyan", "coral"]}
          // gradient
          gradientColor1="tomato"
          gradientColor2="teal"
          divider="50"
          spacing="2"
          padding="0"
        />
      </div>
    </Container>
  );
};

export default Test;
