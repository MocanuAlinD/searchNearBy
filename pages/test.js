import React, { useState, useEffect } from "react";
import { Container } from "../components/singleTags/elemetsCustom";
import Bars from "../components/Graphs/Bars";
import styles from "../styles/pages/test.module.scss";

const Test = () => {
  return (
    <Container>
      <div className={styles.main}>
        <Bars
          // addHeight="0"
          // barHeight="7"
          // bg="darkblue"
          // border
          // borderC="red"
          // borderR="2rem"
          // borderW="2"
          // colors={["red", "blue", "yellow", "cyan", "coral"]}
          // borderViewColor="black"
          conturView
          divider="30"
          fontSize="4"
          fontWeight="200"
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
          // padding="0"
          // rotate="0"
          spacing="3"
          // textColor="whitesmoke"
          view="200"
          textLengthLimit="30"
          width="90%"
          height="40rem"
          // percentOffset="3"
          fullBar
          // fullBarWidth={0.1}
          // percentOffset="5"
          textLeft
          // range="20"
        />
      </div>
    </Container>
  );
};

export default Test;
