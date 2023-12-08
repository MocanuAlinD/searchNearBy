import React from "react";
import { useRouter } from "next/router";
import { ButtonWithIcon } from "./singleTags/ButtonWithIcon";
import { LabelCustom, Container } from "./singleTags/elemetsCustom";

const NotSignedIn = () => {
  const { push } = useRouter();
  return (
    <div>
      <LabelCustom>
        Te rugam sa te autentifici pentru a inscrie un serviciu
      </LabelCustom>
      <ButtonWithIcon onClick={() => push("/login?q=inregistrare")}>
        Mergi la pagina de logare
      </ButtonWithIcon>
    </div>
  );
};

export default NotSignedIn;
