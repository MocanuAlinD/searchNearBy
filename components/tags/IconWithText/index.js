import React from "react";
import {
  H4Custom,
  Wrapper,
} from "../../../components/singleTags/elemetsCustom";

const IconWithText = ({ text, iconName, size }) => {
  const sz = size ? size + "rem" : "1.5rem";
  return (
    <Wrapper border fd="row" ai="center" p="0.1rem 0.5rem" mjc="flex-start">
      <div
        style={{
          background: `url('/icons/${iconName}.svg')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: sz,
          height: sz,
          marginRight: "0.5rem",
        }}
      ></div>
      <H4Custom>{text}</H4Custom>
    </Wrapper>
  );
};

export default IconWithText;
