import React from "react";
import { Container, ParaCustom } from "../components/singleTags/elemetsCustom";
import {
  Wrapper,
  InputCustom,
  LabelCustom,
  TextAreaCustom,
  LabelSmallCustom,
} from "../components/singleTags/elemetsCustom";
import { v4 as userId } from "uuid";
import { ButtonWithIcon } from "../components/singleTags/ButtonWithIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  setCerereState,
  setInitialStateCerere,
} from "../features/cerereOferta/cerereOfertaSlice";

const Caut = () => {
  const dispatch = useDispatch();
  const caut = useSelector((state) => state.cerereOferta.caut);
  const cerinte = useSelector((state) => state.cerereOferta.cerinte);
  const sumaAlocata = useSelector((state) => state.cerereOferta.sumaAlocata);
  const numePrenume = useSelector((state) => state.cerereOferta.numePrenume);
  const contact = useSelector((state) => state.cerereOferta.contact);
  const char = useSelector((state) => state.cerereOferta.char);
  const dataLimita = useSelector((state) => state.cerereOferta.dataLimita);
  const currentDate = new Date().toLocaleDateString();

  const cautaid = userId();

  const MAX_LENGTH = 255;

  const allData = (e) => {
    e.preventDefault();
    console.log(caut, cerinte, sumaAlocata, numePrenume, contact, dataLimita, char);
    console.log(currentDate);
  };

  return (
    <Container>
      <form onSubmit={allData}>
        <Wrapper w="min(95%, 40rem)">
          <ParaCustom>
            Cererea va fi stearsa automat cand se atinge data limita.
          </ParaCustom>
          <LabelCustom>Caut . . .</LabelCustom>
          <InputCustom
            required
            name="caut"
            placeholder="instalator, electrician, zugrav, etc"
            value={caut}
            onChange={(e) =>
              dispatch(setCerereState([e.target.name, e.target.value]))
            }
          />
          <span>Acest camp este obligatoriu</span>
          <LabelCustom>Cerintele tale</LabelCustom>
          <TextAreaCustom
            required
            maxLength={MAX_LENGTH}
            name="cerinte"
            id="detalii"
            onChange={(e) => (
              dispatch(setCerereState([e.target.name, e.target.value])),
              dispatch(setCerereState(["char", e.target.value.length]))
            )}
            value={cerinte}
            rows="6"
            placeholder="Spune mai detaliat ce ai nevoie sau daca ai anumite cerinte"
          ></TextAreaCustom>
          <span>Scurta descriere este obligatorie</span>
          <LabelSmallCustom htmlFor="detalii" char={char} maxChar={MAX_LENGTH}>
            {char}/{MAX_LENGTH}
          </LabelSmallCustom>
          <LabelCustom>Suma alocata (optional)</LabelCustom>
          <InputCustom
            name="sumaAlocata"
            placeholder="pret minim - pret maxim"
            value={sumaAlocata}
            onChange={(e) =>
              dispatch(setCerereState([e.target.name, e.target.value]))
            }
          />
          <LabelCustom>Nume prenume (optional)</LabelCustom>
          <InputCustom
            name="numePrenume"
            value={numePrenume}
            onChange={(e) =>
              dispatch(setCerereState([e.target.name, e.target.value]))
            }
          />
          <LabelCustom>Data limita</LabelCustom>
          <InputCustom
            required
            type="date"
            name="dataLimita"
            value={dataLimita}
            onChange={(e) =>
              dispatch(setCerereState([e.target.name, e.target.value]))
            }
          />
          <LabelCustom>
            Introdu numarul de telefon, adresa de email sau cum vrei sa fi
            contactat.
          </LabelCustom>
          <InputCustom
            required
            name="contact"
            value={contact}
            onChange={(e) =>
              dispatch(setCerereState([e.target.name, e.target.value]))
            }
          />
          <div className="d-flex gap-5">
            <ButtonWithIcon
              type="reset"
              bg="transparent"
              border="1px solid var(--color-blue-dark)"
              onClick={() => dispatch(setInitialStateCerere())}
            >
              Reset
            </ButtonWithIcon>
            <ButtonWithIcon>trimite</ButtonWithIcon>
          </div>
        </Wrapper>
      </form>
    </Container>
  );
};

export default Caut;
