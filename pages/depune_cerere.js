import React from "react";
import {
  Container,
  ParaCustom,
  SmallContainer,
} from "../components/singleTags/elemetsCustom";
import {
  Wrapper,
  InputCustom,
  LabelCustom,
  TextAreaCustom,
  LabelSmallCustom,
} from "../components/singleTags/elemetsCustom";
import { v4 as userId } from "uuid";
import { ButtonWithIcon } from "../components/tags/ButtonWithIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  setCerereState,
  setInitialStateCerere,
} from "../features/cerereOferta/cerereOfertaSlice";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const DepuneCerere = () => {
  const { push } = useRouter();
  const dispatch = useDispatch();
  const caut = useSelector((state) => state.cerereOferta.caut);
  const cerinte = useSelector((state) => state.cerereOferta.cerinte);
  const sumaAlocata = useSelector((state) => state.cerereOferta.sumaAlocata);
  const numePrenume = useSelector((state) => state.cerereOferta.numePrenume);
  const contact = useSelector((state) => state.cerereOferta.contact);
  const dataLimita = useSelector((state) => state.cerereOferta.dataLimita);
  const char = useSelector((state) => state.cerereOferta.char);

  const MAX_LENGTH = 400;

  const allData = async (e) => {
    e.preventDefault();
    const currentTime = new Date();
    const data = {
      caut,
      cerinte,
      sumaAlocata,
      numePrenume,
      contact,
      dataLimita,
      char,
      currentDate: new Date().toLocaleDateString(),
      cerereId: userId(),
      currentTime: `${currentTime.getHours()}.${currentTime.getMinutes()}.${currentTime.getSeconds()}`,
    };
    const sendToApi = await fetch("/api/depuneCerereOferta", {
      method: "POST",
      "Content-Type": "application/json",
      body: JSON.stringify({ data }),
    });
    const { msg } = await sendToApi.json();
    toast.success(msg);
    // push("/cereriCurente");
  };

  return (
    <Container>
      <SmallContainer bg border className="my-sm-auto my-2">
        <form onSubmit={allData} className="w-100">
          <ParaCustom fw="400" p="0 1rem" fs="1rem">
            Cererea va fi stearsa automat cand se atinge data limita.
          </ParaCustom>
          <Wrapper>
            <LabelCustom>Am nevoie de . . .</LabelCustom>
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
          </Wrapper>
          <Wrapper>
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
              rows="7"
              placeholder="Spune mai detaliat ce ai nevoie sau daca ai anumite cerinte"
            ></TextAreaCustom>
            <span>Scurta descriere este obligatorie</span>
          </Wrapper>
          <Wrapper>
            <LabelSmallCustom
              htmlFor="detalii"
              char={char}
              maxChar={MAX_LENGTH}
            >
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
              w="100%"
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
            <Wrapper fd="row" gap="1rem">
              <ButtonWithIcon
                type="reset"
                reset
                onClick={() => dispatch(setInitialStateCerere())}
              >
                Reset
              </ButtonWithIcon>
              <ButtonWithIcon>Trimite</ButtonWithIcon>
            </Wrapper>
          </Wrapper>
        </form>
      </SmallContainer>
    </Container>
  );
};

export default DepuneCerere;
