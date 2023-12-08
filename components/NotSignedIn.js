import React from "react";
import { useRouter } from "next/router";
import { ButtonWithIcon } from "./singleTags/ButtonWithIcon";
import { LabelCustom, Container } from "./singleTags/elemetsCustom";

const NotSignedIn = () => {
  const { push } = useRouter();
  return (
    // <div className=" border w-50 m-auto d-flex flex-column align-items-center m-0 p-0">
    <Container className="w-50 m-auto">
      <LabelCustom>
        Te rugam sa te autentifici pentru a inscrie un serviciu
      </LabelCustom>
      <ButtonWithIcon onClick={() => push("/login?q=inregistrare")}>
        Mergi la pagina de logare
      </ButtonWithIcon>
    </Container>
  );
};

export default NotSignedIn;
