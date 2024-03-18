import React, { useState, useEffect } from "react";
import { Container } from "../components/singleTags/elemetsCustom";
import Bars from "../components/Graphs/Bars";
import styles from "../styles/pages/test.module.scss";

const Test = () => {
  return (
    <Container>
      <div className={styles.main}>
        <Bars
          // barHeight="4"
          // bg="gray"
          border
          // borderC
          // borderR
          // borderW
          // colors={["red", "blue", "yellow", "cyan", "coral"]}
          divider="50"
          fontSize="4"
          // fontWeight
          // gradient
          // gradientColor1="tomato"
          // gradientColor2="teal"
          // height
          // margin="0"
          // obj={{
          //   Brăila: 10,
          //   Brașov: 20,
          //   București: 30,
          //   Cluj: 40,
          //   Constanța: 50,
          //   Craiova: 60,
          //   "Drobeta-Turnu Severin": 70,
          //   Timișoara: 80,
          //   Tulcea: 100,
          // }}
          padding="0"
          // spacing="2"
          // textColor="teal"
          // textLengthLimit
          width="40rem"
          // textLeft
        />
      </div>
    </Container>
  );
};

export default Test;
