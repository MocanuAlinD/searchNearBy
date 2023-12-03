import React from "react";
import { useRouter } from "next/router";
import { ButtonWithIcon } from "./singleTags/ButtonWithIcon";
import { LabelCustom } from "./singleTags/elemetsCustom";

const NotSignedIn = () => {
  const { push } = useRouter();
  return (
    <div className="w-50 m-auto d-flex flex-column align-items-center m-0 p-0">
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
