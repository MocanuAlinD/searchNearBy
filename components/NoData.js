import React from "react";
import { Container } from "./singleTags/elementsCustom";

const NoData = ({ children }) => {
  return (
    <Container border jc="center">
      {children}
    </Container>
  );
};

export default NoData;
