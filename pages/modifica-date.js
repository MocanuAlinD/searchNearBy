import React from "react";
import { getAuth } from "firebase/auth";
import ModifyData from "../components/ModifyData";
import { useSelector } from "react-redux";

import { Container } from "../components/singleTags/elemetsCustom";

const ModificaDate = () => {
  const auth = getAuth();
  const uid = useSelector((state) => state.login.uid);
  const hasService = useSelector((state) => state.login.hasService);
  console.log(auth.currentUser);

  return (
    <Container className="border border-danger flex-grow-1">
      {hasService && uid ? (
        <ModifyData />
      ) : uid && !hasService ? (
        <h4>Nu ai inregistrat nimic.</h4>
      ) : (
        <h4>Nu esti logat</h4>
      )}
    </Container>
  );
};

export default ModificaDate;
