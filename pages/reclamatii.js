import React from "react";
import {
  LabelCustom,
  InputCustom,
  Wrapper,
  TextAreaCustom,
  SmallContainer,
  Container,
  H4Custom,
  H6Custom,
  ParaCustom,
} from "../components/singleTags/elemetsCustom";
import { ButtonWithIcon } from "../components/tags/ButtonWithIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  setTelefonReclamat,
  setMotivReclamatie,
  setEmailReclamant,
  setInitialStateReclamatie,
} from "../features/reclamatie/reclamatieSlice";
import styles from "../styles/pages/reclamatii.module.scss";

const Reclamatii = () => {
  const dispatch = useDispatch();

  const telefonReclamat = useSelector(
    (state) => state.reclamatie.telefonReclamat
  );
  const motivReclamatie = useSelector(
    (state) => state.reclamatie.motivReclamatie
  );
  const emailReclamant = useSelector(
    (state) => state.reclamatie.emailReclamant
  );

  return (
    <Container>
      <SmallContainer bg border>
        <Wrapper>
          <H6Custom w="100%" m="1rem 0" fs="1.25rem">
            🔖&emsp;Depune o reclamație
          </H6Custom>
          <LabelCustom fw="400">
            Campurile marcate cu * sunt obligatorii.
          </LabelCustom>
          <ParaCustom>
            &emsp;Reclamația dumneavoastră va fi supusă unui control în detaliu.
            Dacă nu se găsesc nereguli, anunțul reclamat nu va fi șters sau
            modificat. Ne poti trimite detalii în formularul de mai jos, sau pe
            WhatsApp (captură de ecran sau în scris).
          </ParaCustom>
        </Wrapper>

        <Wrapper>
          <form
            action="https://formsubmit.co/81b98d1d934c3b7f0e32bc02eb386532"
            method="POST"
          >
            <input
              type="hidden"
              name="_next"
              value="https://search-near-by.vercel.app/reclamatii"
            />
            <Wrapper className={styles.wrapper}>
              <LabelCustom htmlFor="Telefon reclamatie:">
                *Numărul de telefon ce dorești a fi reclamat
              </LabelCustom>

              <InputCustom
                name="Telefon reclamație:"
                type="text"
                id="telefonReclamatie"
                pattern="[0-9,]+"
                value={telefonReclamat}
                placeholder="0721987654"
                onChange={(e) => dispatch(setTelefonReclamat(e.target.value))}
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
                value={motivReclamatie}
                placeholder="Adaugă aici motivul reclamației"
                onChange={(e) => dispatch(setMotivReclamatie(e.target.value))}
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
                value={emailReclamant}
                autoComplete="off"
                onChange={(e) => dispatch(setEmailReclamant(e.target.value))}
              />
            </Wrapper>

            <div className="d-flex gap-2 m-0 p-0">
              <ButtonWithIcon
                type="reset"
                reset
                onClick={() => dispatch(setInitialStateReclamatie())}
              >
                Reset
              </ButtonWithIcon>
              <ButtonWithIcon type="submit" bg="var(--color-blue)">
                Trimite
              </ButtonWithIcon>
            </div>
          </form>

          <Wrapper className={styles.whatsapp}>
            <ParaCustom ta="center">- sau -</ParaCustom>
            <H6Custom className={styles.h6}>
              Ne poți trimite pe &nbsp;
              <a
                href="http://wa.me/+40748221577"
                target="_blank"
                rel="noreferrer"
                title="0721989796"
              >
                WhatsApp
              </a>
            </H6Custom>
          </Wrapper>
        </Wrapper>
      </SmallContainer>
    </Container>
  );
};

export default Reclamatii;
