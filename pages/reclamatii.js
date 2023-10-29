import React, { useState } from "react";
import styles from "../styles/reclamatii.module.scss";
import BackButton from "../components/BackButton";
import {
  LabelCustom,
  InputCustom,
  Wrapper,
  TextAreaCustom,
  SmallContainer,
} from "../components/singleTags/elemetsCustom";
import { ButtonWithIcon } from "../components/singleTags/ButtonWithIcon";

const Reclamatii = () => {
  const defaultReclamatie = {
    telefonReclamat: "",
    motivReclamatie: "",
    emailReclamant: "",
  };

  const [reclamatie, setReclamatie] = useState(defaultReclamatie);

  const sendData = (e) => {
    e.preventDefault();
    console.log(reclamatie);
    // setReclamatie(defaultReclamatie)
  };

  return (
    <div
      className={
        styles.container + " d-flex flex-column m-0 p-0 flex-grow-1 min-vh-100"
      }
    >
      <div className="row col-12 m-0 p-0 ps-1 ms-2 mt-2 w-auto">
        <BackButton url="/" text="Pagina principală" />
      </div>
      <div className={styles.mainContent}>
        <SmallContainer className={styles.infoContainer}>
          <LabelCustom>
            Reclamația dumneavoastră va fi supusă unui control în detaliu. Dacă
            nu se găsesc nereguli, anunțul reclamat nu va fi șters sau
            modificat.
          </LabelCustom>
        </SmallContainer>
        <LabelCustom m="0" fw="400">
          Campurile marcate cu * sunt obligatorii.
        </LabelCustom>

        <div className={styles.formContainer}>
          <form
            onSubmit={sendData}
            className={styles.form}
            action="https://formsubmit.co/81b98d1d934c3b7f0e32bc02eb386532"
            method="POST"
          >
            <SmallContainer>
              <Wrapper className={styles.wrapper}>
                <LabelCustom htmlFor="telefonReclamatie">
                  *Telefon reclamatie
                </LabelCustom>

                <InputCustom
                  name="telefonReclamatie"
                  type="text"
                  id="telefonReclamatie"
                  pattern="[0-9]+"
                  required
                  value={reclamatie.telefonReclamat}
                  placeholder="0721987654"
                  onChange={(e) =>
                    setReclamatie({
                      ...reclamatie,
                      telefonReclamat: e.target.value,
                    })
                  }
                />
              </Wrapper>

              <Wrapper>
                <LabelCustom htmlFor="motivReclamatie">
                  *Motivul reclamatiei
                </LabelCustom>
                <TextAreaCustom
                  name="motivReclamatie"
                  required
                  type="text"
                  rows="6"
                  value={reclamatie.motivReclamatie}
                  placeholder="Adauga aici motivul reclamatiei"
                  onChange={(e) =>
                    setReclamatie({
                      ...reclamatie,
                      motivReclamatie: e.target.value,
                    })
                  }
                />
              </Wrapper>

              <Wrapper>
                <LabelCustom htmlFor="emailReply">
                  Introdu adresa ta de email dacă dorești să fii notificat în
                  legătură cu rezultatul.
                </LabelCustom>
                <InputCustom
                  name="emailReply"
                  type="email"
                  value={reclamatie.emailReclamant}
                  onChange={(e) =>
                    setReclamatie({
                      ...reclamatie,
                      emailReclamant: e.target.value,
                    })
                  }
                />
              </Wrapper>

              <ButtonWithIcon type="submit">Trimite</ButtonWithIcon>
            </SmallContainer>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reclamatii;
