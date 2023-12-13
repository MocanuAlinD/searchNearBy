import {
  Wrapper,
  SmallContainer,
  SelectCustom,
  InputCustom,
  TextAreaCustom,
  LabelCustom,
  LabelSmallCustom,
} from "./singleTags/elemetsCustom";
import { ButtonWithIcon } from "./singleTags/ButtonWithIcon";
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
  setInitialState,
  changeState,
} from "../features/inscriere/inscriereSlice";
import { getDatabase, ref, push, child, onValue } from "firebase/database";

const ModifyData = () => {
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
  const listaOrase = useSelector((state) => state.inscriere.listaOrase);
  const uid = useSelector((state) => state.login.uid);

  const MAX_CHAR_LENGTH = "255";

  const changeListaOrase = (e) => {
    const tempSorted = alin[e.target.value].sort(
      (a, b) => (a.nume > b.nume && 1) || -1
    );
    // dispatch(setJudet(e.target.value));
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
    const newPhone = phone.split(",");
    const newEmail = email.split(",");
    // La id sa fie uid de la logare
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

  const db = getDatabase();
  const moc = ref(db, "searchUsers");

  const getData = () => {
    // console.log(uid);
    onValue(moc, (s) => {
      console.log(s.val());
    });
  };

  return (
    <form onSubmit={postData} method="GET" className="col-12">
      <SmallContainer bg>
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
            onChange={(e) =>
              dispatch(changeState(["fullname", e.target.value]))
            }
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
            onChange={(e) => dispatch(changeState(["phone", e.target.value]))}
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
            onChange={(e) => dispatch(changeState(["email", e.target.value]))}
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

export default ModifyData;
