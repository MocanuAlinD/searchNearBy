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
import { Checkbox } from "@mui/material";
import { BiReset } from "react-icons/bi";
import { judete } from "../lib/judete";
import { alin } from "../lib";
import InputSuggestions from "./InputSuggestions";
import { useDispatch, useSelector } from "react-redux";
import {
  setId,
  setJudet,
  setTipJob,
  setPretMax,
  setPretMin,
  setDetalii,
  setOras,
  setDataRegister,
  setOraRegister,
  setFullname,
  setUrgente,
  setUrgenteNoapte,
  setZiInceput,
  setZiSfarsit,
  setOraInceput,
  setOraSfarsit,
  setPhone,
  setEmail,
  setWebsite,
  setInitialState,
} from "../features/inscriere/inscriereSlice";

const FormRegister = ({
  state,
  setState,
  listaOrase,
  setListaOrase,
  postData,
}) => {
  const dispatch = useDispatch();

  const fullname = useSelector((state) => state.inscriere.fullname);
  const phone = useSelector((state) => state.inscriere.phone);
  const email = useSelector((state) => state.inscriere.email);
  const tipjob = useSelector((state) => state.inscriere.tipjob);
  const pretMin = useSelector((state) => state.inscriere.pretMin);
  const pretMax = useSelector((state) => state.inscriere.pretMax);
  const detalii = useSelector((state) => state.inscriere.detalii);
  const website = useSelector((state) => state.inscriere.website);
  const ziinceput = useSelector((state) => state.inscriere.ziinceput);
  const zisfarsit = useSelector((state) => state.inscriere.zisfarsit);
  const orainceput = useSelector((state) => state.inscriere.orainceput);
  const orasfarsit = useSelector((state) => state.inscriere.orasfarsit);
  const urgente = useSelector((state) => state.inscriere.urgente);
  const urgenteNoapte = useSelector((state) => state.inscriere.urgenteNoapte);
  const judet = useSelector((state) => state.inscriere.judet);
  const oras = useSelector((state) => state.inscriere.oras);

  const MAX_CHAR_LENGTH = "255";

  const changeListaOrase = (e) => {
    const tempSorted = alin[e.target.value].sort(
      (a, b) => (a.nume > b.nume && 1) || -1
    );
    setState({
      ...state,
      judet: e.target.value,
      oras:
        tempSorted[0].nume +
        (tempSorted[0].comuna ? ", " + tempSorted[0].comuna : ""),
    });
    setListaOrase(tempSorted);
  };

  return (
    <form onSubmit={postData} method="GET" className="col-12">
      <SmallContainer m="0 0 15rem 0" className="d-flex flex-column mx-auto">
        <Wrapper>
          <LabelCustom htmlFor="numeUtilizator">
            Nume Prenume / Nume companie
          </LabelCustom>
          <InputCustom
            required
            pattern="[A-Za-z -.0-9]{2,}"
            autoComplete="off"
            type="text"
            id="numeUtilizator"
            value={fullname}
            placeholder="nume prenume"
            // onChange={(e) => setState({ ...state, fullname: e.target.value })}
            onChange={(e) => dispatch(setFullname(e.target.value))}
          />
          <span>&quot;Nume Prenume / Nume Companie&quot; sunt necesare</span>
        </Wrapper>

        <Wrapper>
          <LabelCustom htmlFor="phoneID">
            Telefon ( unul sau mai multe desparțite prin &quot;,&quot; )
          </LabelCustom>
          <InputCustom
            required
            pattern="[0-9,]+"
            id="phoneID"
            autoComplete="off"
            type="text"
            placeholder="telefon"
            value={phone}
            // onChange={(e) =>
            //   setState({ ...state, phone: [...e.target.value.split(",")] })
            // }
            onChange={(e) => dispatch(setPhone(e.target.value))}
          />
          <span>Numărul de telefon este necesar</span>
        </Wrapper>

        <Wrapper>
          <LabelCustom htmlFor="emailID">
            Email ( unul sau mai multe desparțite prin &quot;,&quot; )
          </LabelCustom>
          <InputCustom
            required
            id="emailID"
            autoComplete="off"
            type="text"
            placeholder="Email"
            value={email}
            // onChange={(e) =>
            //   setState({ ...state, email: [...e.target.value.split(",")] })
            // }
            onChange={(e) => dispatch(setEmail(e.target.value))}
          />
          <span>Adresa de email trebuie să existe și să fie validă</span>
        </Wrapper>

        <Wrapper>
          <LabelCustom htmlFor="meserie">Serviciu prestat</LabelCustom>
          <InputCustom
            required
            list="inputList"
            // pattern="[\D]{3,}"
            autoComplete="off"
            type="text"
            id="meserie"
            value={tipjob}
            placeholder="electrician, instalator, fotograf, etc...."
            // onChange={(e) => setState({ ...state, tipjob: e.target.value })}
            onChange={(e) => dispatch(setTipJob(e.target.value))}
          />
          <span>Tipul de serviciu este necesar</span>
          <datalist id="inputList">
            <InputSuggestions />
          </datalist>
        </Wrapper>

        <Wrapper>
          <LabelCustom htmlFor="pretMinID">Preț minim</LabelCustom>
          <InputCustom
            required
            id="pretMinID"
            autoComplete="off"
            type="text"
            value={pretMin}
            pattern="[0-9]+"
            placeholder="pret minim"
            // onChange={(e) => setState({ ...state, pretMin: e.target.value })}
            onChange={(e) => dispatch(setPretMin(e.target.value))}
          />
          <span>Treceți prețul minim</span>
          <LabelCustom htmlFor="pretMaxID">Preț maxim</LabelCustom>
          <InputCustom
            required
            pattern="[0-9]+"
            id="pretMaxID"
            autoComplete="off"
            type="text"
            value={pretMax}
            placeholder="pret maxim"
            // onChange={(e) => setState({ ...state, pretMax: e.target.value })}
            onChange={(e) => dispatch(setPretMax(e.target.value))}
          />
          <span>Treceți prețul maxim</span>
        </Wrapper>

        <Wrapper>
          <LabelCustom htmlFor="detalii">Scurtă descriere</LabelCustom>
          <TextAreaCustom
            required
            pattern="[0-9]+"
            maxLength={MAX_CHAR_LENGTH}
            name="detalii"
            id="detalii"
            // onChange={(e) => setState({ ...state, detalii: e.target.value })}
            onChange={(e) => dispatch(setDetalii(e.target.value))}
            value={detalii}
            rows="6"
            placeholder="Aici poti trece detalii despre serviciul prestat"
          ></TextAreaCustom>
          <span>Scurta descriere este obligatorie</span>
          <LabelSmallCustom
            htmlFor="detalii"
            char={detalii.length}
            maxChar={MAX_CHAR_LENGTH}
          >
            {"Caractere ramase: " + (+MAX_CHAR_LENGTH - +detalii.length)}
          </LabelSmallCustom>
        </Wrapper>

        <Wrapper>
          <LabelCustom htmlFor="website">Website (Opțional)</LabelCustom>
          <InputCustom
            pattern="(?!^[\d-])[a-zA-Z0-9-]{2,63}(?<!-)\.[a-zA-Z]{2,4}"
            id="website"
            autoComplete="off"
            type="text"
            value={website}
            placeholder="denumire-website.ro"
            // onChange={(e) => setState({ ...state, website: e.target.value })}
            onChange={(e) => dispatch(setWebsite(e.target.value))}
          />
        </Wrapper>

        <Wrapper>
          <LabelCustom htmlFor="saptamanaStart" m="0">
            Disponibil de
          </LabelCustom>
          <SelectCustom
            name="saptamanaStart"
            id="saptamanaStart"
            value={ziinceput}
            // onChange={(e) => setState({ ...state, ziinceput: e.target.value })}
            onChange={(e) => dispatch(setZiInceput(e.target.value))}
          >
            <option value="Luni">Luni</option>
            <option value="Marti">Marți</option>
            <option value="Miercuri">Miercuri</option>
            <option value="Joi">Joi</option>
            <option value="Vineri">Vineri</option>
            <option value="Sambata">Sâmbătă</option>
            <option value="Duminica">Duminică</option>
          </SelectCustom>
          <LabelCustom htmlFor="saptamanaSfarsit" m="0">
            până
          </LabelCustom>
          <SelectCustom
            name="saptamanaSfarsit"
            id="saptamanaSfarsit"
            value={zisfarsit}
            // onChange={(e) => setState({ ...state, zisfarsit: e.target.value })}
            onChange={(e) => dispatch(setZiSfarsit(e.target.value))}
          >
            <option value="Luni">Luni</option>
            <option value="Marti">Marți</option>
            <option value="Miercuri">Miercuri</option>
            <option value="Joi">Joi</option>
            <option value="Vineri">Vineri</option>
            <option value="Sambata">Sâmbătă</option>
            <option value="Duminica">Duminică</option>
          </SelectCustom>
        </Wrapper>

        <Wrapper m="0">
          <LabelCustom htmlFor="programInceput" m="0rem 0 .2rem 0">
            Disponibil incepand cu ora
          </LabelCustom>
          <InputCustom
            required
            autoComplete="off"
            type="time"
            w="100%"
            id="programInceput"
            value={orainceput}
            // onChange={(e) => setState({ ...state, orainceput: e.target.value })}
            onChange={(e) => dispatch(setOraInceput(e.target.value))}
          />
          <span>Selectează corect o oră</span>

          <LabelCustom htmlFor="programSfarsit"> până la ora </LabelCustom>
          <InputCustom
            required
            w="100%"
            autoComplete="off"
            type="time"
            id="programSfarsit"
            value={orasfarsit}
            // onChange={(e) => setState({ ...state, orasfarsit: e.target.value })}
            onChange={(e) => dispatch(setOraSfarsit(e.target.value))}
          />
          <span>Selectează corect o oră</span>
        </Wrapper>

        <Wrapper m="0.5rem 0 0 0">
          <LabelCustom>
            <Checkbox
              name="inafaraOrelorNume"
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
              checked={urgente}
              value=""
              // onChange={() => setState({ ...state, urgente: !state.urgente })}
              onChange={() => dispatch(setUrgente())}
            />
            Disponibil în afara zilelor/orelor de lucru
          </LabelCustom>
        </Wrapper>

        {/* Urgente noapte */}
        <Wrapper m="0.5rem 0 0 0">
          <LabelCustom>
            <Checkbox
              name="urgenteNoapteName"
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
              checked={urgenteNoapte}
              value=""
              // onChange={() =>
              //   setState({ ...state, urgenteNoapte: !state.urgenteNoapte })
              // }
              onChange={() => dispatch(setUrgenteNoapte())}
            />
            Urgențe pe timp de noapte
          </LabelCustom>
        </Wrapper>

        <Wrapper>
          <LabelCustom htmlFor="labelOrase">
            Județul unde prestezi serviciile
          </LabelCustom>
          <SelectCustom
            required
            name="orase"
            id="labelOrase"
            value={judet}
            onChange={(e) => changeListaOrase(e)}
          >
            <option value="" disabled>
              ---Alege județul---
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
            <LabelCustom htmlFor="labelComuna" m="0">
              Localitate:{" "}
            </LabelCustom>
            <SelectCustom
              required
              id="labelComuna"
              name="comune"
              value={oras}
              // onChange={(e) => setState({ ...state, oras: e.target.value })}
              onChange={(e) => dispatch(setOras(e.target.value))}
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

        <Wrapper className="d-flex flex-row justify-content-between">
          <ButtonWithIcon
            hasIcon
            w="45%"
            m=".5rem 0 .5rem"
            className="shadow"
            onClick={() => dispatch(setInitialState())}
          >
            <div className="iconContainer">
              <BiReset className="icon" />
            </div>
            Reset
          </ButtonWithIcon>

          <ButtonWithIcon w="45%" className="shadow">
            Înregistrare
          </ButtonWithIcon>
        </Wrapper>
      </SmallContainer>
    </form>
  );
};

export default FormRegister;
