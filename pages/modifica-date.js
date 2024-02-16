import React from "react";
import { getAuth } from "firebase/auth";
import ModifyData from "../components/ModifyData";
import { useSelector } from "react-redux";

import {
  Container,
  H4Custom,
  H6Custom,
  SmallContainer,
} from "../components/singleTags/elemetsCustom";

const ModificaDate = () => {
  const auth = getAuth();
  const uid = useSelector((state) => state.login.uid);
  const hasService = useSelector((state) => state.login.hasService);

  return (
    <Container>
      {hasService && uid ? (
        <ModifyData />
      ) : uid && !hasService ? (
        <SmallContainer bg border>
          <H4Custom>Nu ai inregistrat nimic.</H4Custom>
        </SmallContainer>
      ) : (
        <SmallContainer bg border>
          <H6Custom>Nu esti logat</H6Custom>
        </SmallContainer>
      )}
    </Container>
  );
};

export default ModificaDate;
