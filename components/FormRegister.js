import {
  Wrapper,
  SmallContainer,
  SelectCustom,
  InputCustom,
  TextAreaCustom,
  LabelCustom,
  LabelSmallCustom,
} from "../components/singleTags/elemetsCustom";
import { ButtonWithIcon } from "../components/tags/ButtonWithIcon";
import { Checkbox } from "@mui/material";
import { BiReset } from "react-icons/bi";
import { judete } from "../lib/judete";
import { alin } from "../lib";
import InputSuggestions from "./InputSuggestions";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  setUrgente,
  setUrgenteNoapte,
  setInitialStateInscriere,
  changeState,
  setPhone,
  addPhone,
  removePhone,
  setEmail,
  addEmail,
  removeEmail,
} from "../features/inscriere/inscriereSlice";
import styles from "../styles/FormRegister.module.scss";

const FormRegister = () => {
  const dispatch = useDispatch();
  const uid = useSelector((state) => state.login.uid);
  const oras = useSelector((state) => state.inscriere.oras);
  const phone = useSelector((state) => state.inscriere.phone);
  const email = useSelector((state) => state.inscriere.email);
  const judet = useSelector((state) => state.inscriere.judet);
  const tipjob = useSelector((state) => state.inscriere.tipjob);
  const pretMin = useSelector((state) => state.inscriere.pretMin);
  const pretMax = useSelector((state) => state.inscriere.pretMax);
  const detalii = useSelector((state) => state.inscriere.detalii);
  const website = useSelector((state) => state.inscriere.website);
  const urgente = useSelector((state) => state.inscriere.urgente);
  const fullname = useSelector((state) => state.inscriere.fullname);
  const ziinceput = useSelector((state) => state.inscriere.ziinceput);
  const zisfarsit = useSelector((state) => state.inscriere.zisfarsit);
  const orainceput = useSelector((state) => state.inscriere.orainceput);
  const orasfarsit = useSelector((state) => state.inscriere.orasfarsit);
  const listaOrase = useSelector((state) => state.inscriere.listaOrase);
  const urgenteNoapte = useSelector((state) => state.inscriere.urgenteNoapte);

  const MAX_CHAR_LENGTH = 400;

  const changeListaOrase = (e) => {
    const tempSorted = [...alin[e.target.value]].sort(
      (a, b) => (a.nume > b.nume && 1) || -1
    );
    dispatch(changeState(["judet", e.target.value]));
    dispatch(
      changeState([
        "oras",
        tempSorted[0].nume +
          (tempSorted[0].comuna ? ", " + tempSorted[0].comuna : ""),
      ])
    );
    dispatch(changeState(["listaOrase", tempSorted]));
  };

  const getDateToRegister = () => {
    const dt = new Date();
    const yr = dt.getFullYear();
    const mth = dt.getMonth() + 1;
    const day = dt.getDate();
    const finalDate = `${yr}-${mth < 10 ? "0" + mth : mth}-${
      day < 10 ? "0" + day : day
    }`;
    return finalDate;
  };

  // Inregistrare fara plata
  const postData = async (e) => {
    e.preventDefault();
    const newPhone = Object.values(phone).map((item) => item.phone);
    const newEmail = Object.values(email).map((item) => item.email);

    const addData = {
      contact: {
        email: newEmail,
        phone: newPhone,
      },
      dataregister: getDateToRegister(),
      detalii: detalii,
      fullname: fullname,
      id: `${
        new Date().getTime().toString() + Math.ceil(Math.random() * 100000)
      }`,
      judet: judet,
      orainceput: orainceput,
      oraregister: new Date().toLocaleTimeString(),
      oras: oras,
      orasfarsit: orasfarsit,
      pretMin: pretMin,
      pretMax: pretMax,
      tipjob: tipjob,
      urgente: urgente,
      urgenteNoapte: urgenteNoapte,
      ziinceput: ziinceput,
      zisfarsit: zisfarsit,
      website: website ? "https://www." + website : "",
    };

    const sendData = await fetch("/api/postData", {
      method: "POST",
      "Content-Type": "application/json",
      body: JSON.stringify({ data: addData, uid }),
    });
    const { msg } = await sendData.json();
    if (msg.msg) {
      toast.success(msg.msg);
    } else if (msg.error) {
      toast.error(msg.error);
    }
  };

  const changePhone = (index, e) => {
    const { name, value } = e.target;
    const newList = [...phone];
    const newVal = { [name]: value };
    newList[index] = newVal;
    dispatch(setPhone(newList));
  };

  const changeEmail = (index, e) => {
    const { name, value } = e.target;
    const newList = [...email];
    const newVal = { [name]: value };
    newList[index] = newVal;
    dispatch(setEmail(newList));
  };

  return (
    <SmallContainer bg>
      <form onSubmit={postData} method="GET" className="w-100">
        <Wrapper>
          <LabelCustom>Nume Prenume / Nume companie</LabelCustom>
          <InputCustom
            required
            pattern="[A-Za-z -.0-9]{2,}"
            autoComplete="off"
            type="text"
            value={fullname}
            placeholder="nume prenume"
            onChange={(e) =>
              dispatch(changeState(["fullname", e.target.value]))
            }
          />
          <span>&quot;Nume Prenume / Nume Companie&quot; sunt necesare</span>
        </Wrapper>

        <Wrapper>
          <LabelCustom>Telefon</LabelCustom>
          {phone.map((item, index) => {
            return (
              <Wrapper key={index} m="0">
                <Wrapper fd="row" className="align-items-start">
                  <Wrapper fd="column" w="100%" m="0">
                    <InputCustom
                      required
                      pattern="[.\-0-9]+"
                      name="phone"
                      autoComplete="off"
                      type="text"
                      placeholder="telefon"
                      value={item.phone}
                      onChange={(e) => changePhone(index, e)}
                    />
                    <span>Numarul de telefon este necesar.</span>
                  </Wrapper>
                  {phone.length > 1 && (
                    <div
                      onClick={() => dispatch(removePhone(index))}
                      className={styles.removeButton}
                    >
                      x
                    </div>
                  )}
                </Wrapper>
                {phone.length - 1 === index && phone.length < 4 && (
                  <span
                    type="button"
                    className={styles.span}
                    onClick={() => dispatch(addPhone())}
                  >
                    Adaugă alt numar
                  </span>
                )}
              </Wrapper>
            );
          })}
        </Wrapper>

        <Wrapper>
          <LabelCustom>Email</LabelCustom>
          {email.map((item, index) => {
            return (
              <Wrapper key={index} m="0">
                <Wrapper fd="row" className="align-items-start">
                  <Wrapper fd="column" w="100%" m="0">
                    <InputCustom
                      required
                      name="email"
                      autoComplete="off"
                      type="email"
                      placeholder="email"
                      value={item.email}
                      onChange={(e) => changeEmail(index, e)}
                    />
                    <span>
                      Adresa de email trebuie să existe și să fie validă
                    </span>
                  </Wrapper>
                  {email.length > 1 && (
                    <div
                      onClick={() => dispatch(removeEmail(index))}
                      className={styles.removeButton}
                    >
                      x
                    </div>
                  )}
                </Wrapper>
                {email.length - 1 === index && email.length < 4 && (
                  <span
                    type="button"
                    className={styles.span}
                    onClick={() => dispatch(addEmail())}
                  >
                    Adaugă alt email
                  </span>
                )}
              </Wrapper>
            );
          })}
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
            onChange={(e) => dispatch(changeState(["tipjob", e.target.value]))}
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
            onChange={(e) => dispatch(changeState(["pretMin", e.target.value]))}
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
            onChange={(e) => dispatch(changeState(["pretMax", e.target.value]))}
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
            onChange={(e) => dispatch(changeState(["detalii", e.target.value]))}
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
            onChange={(e) => dispatch(changeState(["website", e.target.value]))}
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
            onChange={(e) =>
              dispatch(changeState(["ziinceput", e.target.value]))
            }
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
            onChange={(e) =>
              dispatch(changeState(["zisfarsit", e.target.value]))
            }
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
            onChange={(e) =>
              dispatch(changeState(["orainceput", e.target.value]))
            }
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
            onChange={(e) =>
              dispatch(changeState(["orasfarsit", e.target.value]))
            }
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

        {oras ? (
          <Wrapper m="0">
            <LabelCustom htmlFor="labelComuna" m="0">
              Localitate:{" "}
            </LabelCustom>
            <SelectCustom
              required
              id="labelComuna"
              name="comune"
              value={oras}
              onChange={(e) => dispatch(changeState(["oras", e.target.value]))}
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

        <Wrapper jc="space-between" fd="row" gap="1rem">
          <ButtonWithIcon
            reset
            onClick={() => dispatch(setInitialStateInscriere())}
          >
            <BiReset className="icon" />
            Reset
          </ButtonWithIcon>

          <ButtonWithIcon className="shadow">Înregistrare</ButtonWithIcon>
        </Wrapper>
      </form>
    </SmallContainer>
  );
};

export default FormRegister;
