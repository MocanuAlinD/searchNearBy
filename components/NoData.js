import React from "react";
import { Container } from "./singleTags/elemetsCustom";

const NoData = ({ children }) => {
  return (
    <Container border jc="center">
      {children}
    </Container>
  );
};

export default NoData;
