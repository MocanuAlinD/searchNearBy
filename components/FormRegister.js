import React from "react";
import {
  Wrapper,
  SmallContainer,
  SelectCustom,
  InputCustom,
  TextAreaCustom,
  LabelCustom,
  LabelSmallCustom,
} from "../components/singleTags/elemetsCustom";
import { ButtonWithIcon } from "./singleTags/ButtonWithIcon";

import { Checkbox, Button } from "@mui/material";
import { BiReset } from "react-icons/bi";
import { judete } from "../lib/judete";
import { alin } from "../lib";
import axios from "axios";
import getStripe from "../lib/get-stripe";

const FormRegister = ({
  state,
  setState,
  listaOrase,
  setListaOrase,
  postData,
  initialValues,
  loading,
}) => {
  const MAX_CHAR_LENGTH = "255";

  const redirectToCheckout = async () => {
    const {
      data: { id },
    } = await axios.post("/api/checkout_sessions", {
      items: [
        {
          price: process.env.PRICE,
          quantity: 1,
        },
      ],
      formRegister: state,
      payment_method_types: ["card"],
    });
    // Redirect to checkout
    const stripe = await getStripe();
    await stripe.redirectToCheckout({ sessionId: id });
  };

  const changeListaOrase = (e) => {
    const tempSorted = alin[e.target.value].sort((a, b) => (a.nume > b.nume && 1) || -1)
    setState({
      ...state,
      judet: e.target.value,
      oras: tempSorted[0].nume + (tempSorted[0].comuna ? ", " + tempSorted[0].comuna : '')
    });
    setListaOrase(
      tempSorted
    );
  };

  return (
    <form onSubmit={postData} method="GET" className="col-12">
      <SmallContainer m="0 0 15rem 0" className="d-flex flex-column mx-auto">
        <Wrapper>
          <LabelCustom htmlFor="numeUtilizator" m="0">Nume complet: </LabelCustom>
          <InputCustom
            required
            pattern="[A-Za-z -.]{2,}"
            autoComplete="off"
            type="text"
            id="numeUtilizator"
            value={state.fullname}
            placeholder="Nume Prenume"
            onChange={(e) => setState({ ...state, fullname: e.target.value })}
          />
          <span>Numele si prenumele sunt necesare.</span>
        </Wrapper>

        <Wrapper>
          <LabelCustom htmlFor="phoneID" m="0">Telefon</LabelCustom>
          <InputCustom
            required
            pattern="[0-9]{6,20}"
            id="phoneID"
            autoComplete="off"
            type="text"
            placeholder="Telefon"
            value={state.phone}
            onChange={(e) => setState({ ...state, phone: e.target.value })}
          />
          <span>Numarul de telefon este necesar.</span>
          <LabelCustom htmlFor="emailID">Email</LabelCustom>
          <InputCustom
            required
            pattern="[A-Za-z0-9_.-]+@[a-z]+\.[a-z]{2,3}"
            id="emailID"
            autoComplete="off"
            type="text"
            placeholder="Email"
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
          <span>Adresa de email trebuie sa existe si sa fie valida</span>
        </Wrapper>

        <Wrapper>
          <LabelCustom htmlFor="meserie">Serviciu prestat: </LabelCustom>
          <InputCustom
            required
            pattern="[A-Za-z0-9 ]{3,}"
            autoComplete="off"
            type="text"
            id="meserie"
            value={state.tipjob}
            placeholder="Electrician, instalator, fotograf, etc...."
            onChange={(e) => setState({ ...state, tipjob: e.target.value })}
          />
          <span>Tipul de job este necesar.</span>
        </Wrapper>

        <Wrapper>
          <LabelCustom htmlFor="pretMinID">Pret minim:</LabelCustom>
          <InputCustom
            required
            id="pretMinID"
            autoComplete="off"
            type="text"
            value={state.pretMin}
            pattern="[0-9]+"
            placeholder="pret minim"
            onChange={(e) => setState({ ...state, pretMin: e.target.value })}
          />
          <span>Treceti pretul minim</span>
          <LabelCustom htmlFor="pretMaxID">Pret maxim:</LabelCustom>
          <InputCustom
            required
            pattern="[0-9]+"
            // mb="1rem"
            id="pretMaxID"
            autoComplete="off"
            type="text"
            value={state.pretMax}
            placeholder="pret maxim"
            onChange={(e) => setState({ ...state, pretMax: e.target.value })}
          />
          <span>Treceti pretul maxim</span>
        </Wrapper>

        <Wrapper>
          <LabelCustom htmlFor="detalii">Scurta descriere</LabelCustom>
          <TextAreaCustom
            required
            pattern="[0-9]+"
            maxLength={MAX_CHAR_LENGTH}
            name="detalii"
            id="detalii"
            onChange={(e) => setState({ ...state, detalii: e.target.value })}
            value={state.detalii}
            rows="6"
            placeholder="Aici poti trece detalii despre serviciul prestat"
          ></TextAreaCustom>
            <span>Scurta descriere este obligatorie</span>
          <LabelSmallCustom
            char={state.detalii.length}
            maxChar={MAX_CHAR_LENGTH}
          >
            {"Caractere ramase: " + (+MAX_CHAR_LENGTH - +state.detalii.length)}
          </LabelSmallCustom>
        </Wrapper>

        <Wrapper>
          <LabelCustom htmlFor="keyTags" m="0">Cuvinte cheie</LabelCustom>
          <InputCustom
            required
            autoComplete="off"
            type="text"
            id="keyTags"
            placeholder="cuvinte ce vor fi cautate de oameni"
            value={state.tags}
            onChange={(e) => setState({ ...state, tags: e.target.value })}
          />
          <span>Cuvintele cheie sunt obligatorii</span>
        </Wrapper>

        <Wrapper>
          <LabelCustom htmlFor="saptamanaStart" m="0">Disponibil de</LabelCustom>
          <SelectCustom
            name="saptamanaStart"
            id="saptamanaStart"
            value={state.ziinceput}
            onChange={(e) => setState({ ...state, ziinceput: e.target.value })}
          >
            <option value="Luni">Luni</option>
            <option value="Marti">Marti</option>
            <option value="Miercuri">Miercuri</option>
            <option value="Joi">Joi</option>
            <option value="Vineri">Vineri</option>
            <option value="Sambata">Sambata</option>
            <option value="Duminica">Duminica</option>
          </SelectCustom>
          <LabelCustom htmlFor="saptamanaSfarsit" m="0">pana</LabelCustom>
          <SelectCustom
            name="saptamanaSfarsit"
            id="saptamanaSfarsit"
            value={state.zisfarsit}
            onChange={(e) => setState({ ...state, zisfarsit: e.target.value })}
          >
            <option value="Luni">Luni</option>
            <option value="Marti">Marti</option>
            <option value="Miercuri">Miercuri</option>
            <option value="Joi">Joi</option>
            <option value="Vineri">Vineri</option>
            <option value="Sambata">Sambata</option>
            <option value="Duminica">Duminica</option>
          </SelectCustom>
        </Wrapper>

        <Wrapper m="0">
          <LabelCustom htmlFor="programInceput" m="0rem 0 .2rem 0">
            Disponibil de la ora{" "}
          </LabelCustom>
          <InputCustom
            required
            autoComplete="off"
            type="time"
            w="100%"
            id="programInceput"
            value={state.orainceput}
            onChange={(e) => setState({ ...state, orainceput: e.target.value })}
          />
          <span>Selecteaza corect o ora</span>

          <LabelCustom htmlFor="programSfarsit"> pana la ora </LabelCustom>
          <InputCustom
            required
            w="100%"
            autoComplete="off"
            type="time"
            id="programSfarsit"
            value={state.orasfarsit}
            onChange={(e) => setState({ ...state, orasfarsit: e.target.value })}
            />
            <span>Selecteaza corect o ora</span>
        </Wrapper>

        <Wrapper m="0.5rem 0 0 0">
          <LabelCustom>
            <Checkbox
              size="small"
              sx={{
                color: "var(--color-blue)",
                "&.Mui-checked": {
                  color: "var(--color-blue)",
                },
                marginTop: "-.2rem",
                marginRight: ".5rem",
                padding: 0,
              }}
              checked={state.urgente}
              value=""
              onChange={() => setState({ ...state, urgente: !state.urgente })}
            />
            Disponibil in afara zilelor/orelor de lucru
          </LabelCustom>
        </Wrapper>

        <Wrapper>
          <LabelCustom htmlFor="labelOrase">
            Judetul unde prestezi serviciile:{" "}
          </LabelCustom>
          <SelectCustom
            required
            name="orase"
            id="labelOras"
            value={state.judet}
            onChange={(e) => changeListaOrase(e)}

          >
            <option value="" disabled>
              ---Alege judetul---
            </option>
            {judete.map((item, index) => (
              <option key={index} value={item.nume}>
                {item.nume}
              </option>
            ))}
          </SelectCustom>
        </Wrapper>

        {state.oras ? (
          <Wrapper m="0">
            <LabelCustom htmlFor="labelComuna" m="0">Localitate: </LabelCustom>
            <SelectCustom
              required
              name="comune"
              value={state.oras}
              onChange={(e) => setState({ ...state, oras: e.target.value })}
              id="comunaID"
            >
              {listaOrase.map((item, index) => (
                <option key={index}>
                  {item.nume}
                  {item.comuna ? `, ${item.comuna}` : ""}
                </option>
              ))}
            </SelectCustom>
          </Wrapper>
        ) : (
          ""
        )}

        <Wrapper className='d-flex flex-row justify-content-between'>
          {loading ? (
            <ButtonWithIcon w="45%" className="shadow">
              Inregistrare
            </ButtonWithIcon>
          ) : (
            <ButtonWithIcon
              onClick={redirectToCheckout}
              w="45%"
              className="shadow"
            >
              Plateste
            </ButtonWithIcon>
          )}

          <ButtonWithIcon
            hasIcon
            w="45%"
            m=".5rem 0 .5rem"
            className="shadow"
            onClick={() => setState(initialValues)}
          >
            <div className="iconContainer">
              <BiReset className="icon" />
            </div>
            Reset
          </ButtonWithIcon>

        </Wrapper>
      </SmallContainer>
    </form>
  );
};

export default FormRegister;