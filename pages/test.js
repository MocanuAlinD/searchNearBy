import React from "react";
import { Container } from "../components/singleTags/elemetsCustom";
import BackButton from "../components/BackButton";
import { useDispatch, useSelector } from "react-redux";
import {
  setTestOne,
  setTestTwo,
  setTestThree,
} from "../features/test/testSlice";

const Test = () => {
  const disp = useDispatch();
  const ts1 = useSelector((state) => state.test.testOne);
  const ts2 = useSelector((state) => state.test.testTwo);
  const ts3 = useSelector((state) => state.test.testThree);
  const all = useSelector(state => state.test)

  const rnd1 = () => {
    const alin = Math.floor(Math.random(99999) * 10000);
    disp(setTestOne(alin));
  };

  const rnd2 = () => {
    const alin = Math.floor(Math.random(99999) * 10000);
    disp(setTestTwo(alin));
  };

  const rnd3 = () => {
    const alin = Math.floor(Math.random(99999) * 10000);
    disp(setTestThree(alin));
  };

  const rnd4 = () => {
    console.log(all.testOne)
  };
  return (
    <Container>
      <BackButton url="/" text="inapoi" />
      <h4>test One {ts1}</h4>
      <button onClick={rnd1}>Click random number - One</button>
      <h4>test Two {ts2}</h4>
      <button onClick={rnd2}>Click random number - Two</button>
      <h4>test Three {ts3}</h4>
      <button onClick={rnd3}>Click random number - Three</button>
      <button onClick={rnd4}>Click random number - Three</button>
    </Container>
  );
};

export default Test;
