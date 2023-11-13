import React, { useState } from "react";
import styles from "../styles/reclamatii.module.scss";
import BackButton from "../components/BackButton";
import {
  LabelCustom,
  InputCustom,
  Wrapper,
  TextAreaCustom,
  SmallContainer,
  Container,
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
    <Container>
      <BackButton url="/" text="Pagina principală" />
      <div className={styles.mainContent}>
        <SmallContainer className={styles.infoContainer} m="1rem 0 0 0">
          <LabelCustom>
            Reclamația dumneavoastră va fi supusă unui control în detaliu. Dacă
            nu se găsesc nereguli, anunțul reclamat nu va fi șters sau
            modificat.
          </LabelCustom>
        </SmallContainer>

        <SmallContainer className={styles.formContainer} m=".5rem 0 0 0">
          <form
            className={styles.form}
            action="https://formsubmit.co/81b98d1d934c3b7f0e32bc02eb386532"
            method="POST"
          >
            <input
              type="hidden"
              name="_next"
              value="https://search-near-by.vercel.app/reclamatii"
            />
            <SmallContainer>
              <Wrapper className={styles.wrapper}>
                <LabelCustom htmlFor="Telefon reclamatie:">
                  *Numărul de telefon ce dorești a fi reclamat
                </LabelCustom>

                <InputCustom
                  name="Telefon reclamație:"
                  type="text"
                  id="telefonReclamatie"
                  pattern="[0-9,]+"
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
                <LabelCustom htmlFor="Motiv reclamatie:">
                  *Motivul reclamației
                </LabelCustom>
                <TextAreaCustom
                  name="Motiv reclamatie:"
                  required
                  type="text"
                  rows="6"
                  value={reclamatie.motivReclamatie}
                  placeholder="Adaugă aici motivul reclamației"
                  onChange={(e) =>
                    setReclamatie({
                      ...reclamatie,
                      motivReclamatie: e.target.value,
                    })
                  }
                />
              </Wrapper>

              <Wrapper>
                <LabelCustom htmlFor="Reply email:">
                  Introdu adresa ta de email dacă dorești să fii notificat în
                  legătură cu rezultatul reclamației.
                </LabelCustom>
                <InputCustom
                  name="Reply email:"
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
              <LabelCustom m="0" fw="400">
                Campurile marcate cu * sunt obligatorii.
              </LabelCustom>

              <ButtonWithIcon type="submit">Trimite</ButtonWithIcon>
            </SmallContainer>
          </form>
          <SmallContainer className={styles.whatsapp}>
            <p>- sau -</p>
            <SmallContainer className={styles.bottomPartWhatsApp}>
              <h4>Ne poți trimite pe &nbsp;</h4>
              <span>
                <a
                  href="http://wa.me/+40748221577"
                  target="_blank"
                  rel="noreferrer"
                  title="0721989796"
                >
                  WhatsApp
                </a>
              </span>
            </SmallContainer>
          </SmallContainer>
        </SmallContainer>
      </div>
    </Container>
  );
};

export default Reclamatii;
