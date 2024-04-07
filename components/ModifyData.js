import {
  Wrapper,
  SmallContainer,
  SelectCustom,
  InputCustom,
  TextAreaCustom,
  LabelCustom,
  LabelSmallCustom,
} from "./singleTags/elementsCustom";
import { ButtonWithIcon } from "../components/tags/ButtonWithIcon";
import { Checkbox } from "@mui/material";
import { judete } from "../lib/judete";
import JobSuggestions from "./JobsSuggestions";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  setPhoneModifica,
  addPhoneModifica,
  removePhoneModifica,
  setEmailModifica,
  addEmailModifica,
  removeEmailModifica,
  changeStateModifica,
} from "../features/modificaDate/modificaSlice";
import styles from "../styles/comps/FormRegister.module.scss";

const ModifyData = () => {
  const dispatch = useDispatch();

  const id = useSelector((state) => state.modify.id);
  const fullname = useSelector((state) => state.modify.fullname);
  const phone = useSelector((state) => state.modify.phone);
  const email = useSelector((state) => state.modify.email);
  const tipjob = useSelector((state) => state.modify.tipjob);
  const pretMin = useSelector((state) => state.modify.pretMin);
  const pretMax = useSelector((state) => state.modify.pretMax);
  const detalii = useSelector((state) => state.modify.detalii);
  const website = useSelector((state) => state.modify.website);
  const ziinceput = useSelector((state) => state.modify.ziinceput);
  const zisfarsit = useSelector((state) => state.modify.zisfarsit);
  const orainceput = useSelector((state) => state.modify.orainceput);
  const orasfarsit = useSelector((state) => state.modify.orasfarsit);
  const urgente = useSelector((state) => state.modify.urgente);
  const urgenteNoapte = useSelector((state) => state.modify.urgenteNoapte);
  const judet = useSelector((state) => state.modify.judet);
  const oras = useSelector((state) => state.modify.oras);
  const oraregister = useSelector((state) => state.modify.oraregister);
  const dataregister = useSelector((state) => state.modify.dataregister);
  const uid = useSelector((state) => state.login.uid);
  const MAX_CHAR_LENGTH = 400;

  // Inregistrare fara plata
  const postData = async (e) => {
    e.preventDefault();
    const data = {
      contact: {
        email,
        phone,
      },
      dataregister,
      detalii,
      fullname,
      id,
      judet,
      orainceput,
      oraregister,
      oras,
      orasfarsit,
      pretMin,
      pretMax,
      tipjob,
      urgente,
      urgenteNoapte,
      ziinceput,
      zisfarsit,
      website,
    };

    const sendData = await fetch("/api/userEditService", {
      method: "POST",
      "Content-Type": "application/json",
      body: JSON.stringify({ data, uid }),
    });

    const res = await sendData.json();
    if (res.msg) {
      toast.success(res.msg);
    } else if (res.error) {
      toast.error(res.error);
    }
  };

  const changePhone = (index, e) => {
    const { name, value } = e.target;
    const newList = [...phone];
    const newVal = { [name]: value };
    newList[index] = newVal;
    dispatch(setPhoneModifica(newList));
  };

  const changeEmail = (index, e) => {
    const { name, value } = e.target;
    const newList = [...email];
    const newVal = { [name]: value };
    newList[index] = newVal;
    dispatch(setEmailModifica(newList));
  };

  return (
    <form onSubmit={postData} method="GET" className="col-12 my-3">
      <SmallContainer bg border>
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
              dispatch(changeStateModifica(["fullname", e.target.value]))
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
                      onClick={() => dispatch(removePhoneModifica(index))}
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
                    onClick={() => dispatch(addPhoneModifica())}
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
                      onClick={() => dispatch(removeEmailModifica(index))}
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
                    onClick={() => dispatch(addEmailModifica())}
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
            onChange={(e) =>
              dispatch(changeStateModifica(["tipjob", e.target.value]))
            }
          />
          <span>Tipul de serviciu este necesar</span>
          <datalist id="inputList">
            <JobSuggestions />
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
            onChange={(e) =>
              dispatch(changeStateModifica(["pretMin", e.target.value]))
            }
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
            onChange={(e) =>
              dispatch(changeStateModifica(["pretMax", e.target.value]))
            }
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
            onChange={(e) =>
              dispatch(changeStateModifica(["detalii", e.target.value]))
            }
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
            // pattern="(?!^[\d-])[a-zA-Z0-9-]{2,63}(?<!-)\.[a-zA-Z]{2,4}"
            id="website"
            autoComplete="off"
            type="text"
            value={website}
            placeholder="denumire-website.ro"
            onChange={(e) =>
              dispatch(changeStateModifica(["website", e.target.value]))
            }
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
              dispatch(changeStateModifica(["ziinceput", e.target.value]))
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
              dispatch(changeStateModifica(["zisfarsit", e.target.value]))
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
              dispatch(changeStateModifica(["orainceput", e.target.value]))
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
              dispatch(changeStateModifica(["orasfarsit", e.target.value]))
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
              value={urgente}
              onChange={() =>
                dispatch(changeStateModifica(["urgente", !urgente]))
              }
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
              value={urgenteNoapte}
              onChange={() =>
                dispatch(changeStateModifica(["urgenteNoapte", !urgenteNoapte]))
              }
            />
            Urgențe pe timp de noapte
          </LabelCustom>
        </Wrapper>

        <Wrapper>
          <LabelCustom htmlFor="labelOrase">
            Județul unde prestezi serviciile
          </LabelCustom>
          <SelectCustom disabled name="orase" id="labelOrase" value={judet}>
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
              Localitate:
            </LabelCustom>
            <SelectCustom disabled id="labelComuna" name="comune" value={oras}>
              <option>{oras}</option>
            </SelectCustom>
          </Wrapper>
        ) : (
          ""
        )}

        <Wrapper className="d-flex flex-row justify-content-end">
          <ButtonWithIcon w="45%" className="shadow" bg="var(--color-3-ok)">
            Salveaza modificari
          </ButtonWithIcon>
        </Wrapper>
      </SmallContainer>
    </form>
  );
};

export default ModifyData;
