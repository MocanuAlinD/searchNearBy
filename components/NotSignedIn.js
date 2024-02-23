import React from "react";
import { useRouter } from "next/router";
import { ButtonWithIcon } from "../components/tags/ButtonWithIcon";
import { LabelCustom, SmallContainer } from "./singleTags/elemetsCustom";

const NotSignedIn = () => {
  const { push } = useRouter();
  return (
    <SmallContainer bg border>
      <LabelCustom className="w-100 text-center">
        Te rugam sa te autentifici pentru a inscrie un serviciu
      </LabelCustom>
      <ButtonWithIcon onClick={() => push("/login?q=inregistrare")}>
        Mergi la pagina de logare
      </ButtonWithIcon>
    </SmallContainer>
  );
};

export default NotSignedIn;
