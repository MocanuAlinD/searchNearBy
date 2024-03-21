import React, { useState, useEffect } from "react";
import { Container } from "../components/singleTags/elemetsCustom";
import Bars from "../components/Graphs/Bars";
import styles from "../styles/pages/test.module.scss";

const Test = () => {
  return (
    <Container>
      <div className={styles.main}>
        <Bars
          barHeight="5"
          // bg="darkblue"
          border
          // borderC
          // borderR="1rem"
          // borderW
          // colors={["red", "blue", "yellow", "cyan", "coral"]}
          // borderViewColor
          conturView
          divider="31"
          fontSize="3"
          fontWeight="100"
          // gradient
          // dividerLine
          // gradientColor1="tomato"
          // gradientColor2="teal"
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
          // overflow="hidden"
          padding="0"
          // rotate="-90"
          spacing="1"
          textColor="whitesmoke"
          view="100"
          // textLengthLimit="30"
          width="90%"
          // height="40rem"
          fullBar
          // fullBarWidth={0.1}
          percentOffset="5"
          textLeft
          range="20"
        />
      </div>
    </Container>
  );
};

export default Test;
