import React from "react";
import {
  SelectCustom,
  InputContainer,
} from "../components/singleTags/elemetsCustom";
import { judete } from "../lib/judete";
import { alin } from "../lib";
import { Button, IconButton } from "@mui/material";
import { MdClear } from "react-icons/md";
import { BiReset } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import styles from "../styles/clientsearch.module.scss";
import { ButtonWithIcon } from "./singleTags/ButtonWithIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  setJudet,
  setOras,
  setNoResTrigger,
  setListaCarduri,
  setListaOrase,
  setInitialState,
  setCautare,
} from "../pages/features/searchJudet/searchJudetSlice";

const ClientSearch = ({
  state,
  setState,
  searchJudet,
  searchJudetOras,
}) => {
  const dispatch = useDispatch();
  const judet = useSelector((state) => state.judet);
  const oras = useSelector((state) => state.oras);
  const listaOrase = useSelector((state) => state.listaOrase);
  const cautare = useSelector(state => state.cautare)

  return (
    <div
      className={
        styles.container +
        // "  m-0 p-0 align-self-center justify-content-center px-2 px-md-0 pt-3"
        "  m-0 p-0 align-self-center justify-content-center px-2 px-md-0 pt-3"
      }
    >
      <div className="p-0">
        <div>
          <SelectCustom
            name="judet"
            value={judet}
            onChange={(e) => (
              dispatch(setJudet(e.target.value)),
              dispatch(setListaOrase(alin[e.target.value])),
              dispatch(setOras(alin[e.target.value][0].nume)),
              dispatch(setListaCarduri([])),
              dispatch(setNoResTrigger(false))
            )}
          >
            <option value="" disabled>
              --Alege judetul--
            </option>
            {judete.map((item, index) => (
              <option value={item.nume} key={index}>
                {item.nume}
              </option>
            ))}
          </SelectCustom>
        </div>

        {oras ? (
          <div>
            <SelectCustom
              name="oras"
              value={oras}
              onChange={(e) => (
                dispatch(setOras(e.target.value)),
                dispatch(setNoResTrigger(false))
              )}
            >
              {listaOrase.map((item, index) => (
                <option value={item.nume} key={index}>
                  {item.nume}
                  {item.comuna && ", " + item.comuna}
                </option>
              ))}
            </SelectCustom>
          </div>
        ) : (
          []
        )}

        {oras && (
          <div className="d-flex m-0 p-0 justify-content-between align-items-center">
            <InputContainer fs=".8rem">
              <input
                autoComplete="off"
                type="text"
                placeholder=" "
                id="idForLabel"
                value={cautare}
                onChange={(e) =>
                  dispatch(setCautare(e.target.value))
                }
              />
              <label htmlFor="idForLabel">Cauta....</label>
            </InputContainer>

            <IconButton
              aria-label="delete"
              disabled={!state.cautare}
              onClick={() => {
                setState({ ...state, cautare: "" });
              }}
              variant="contained"
              className={`${
                state.cautare
                  ? " text-warning ms-1 py-1 align-self-end"
                  : " text-muted ms-1 py-2 align-self-end"
              }`}
            >
              <MdClear fontSize="1.3rem" />
            </IconButton>
          </div>
        )}
      </div>

      {judet && (
        <div className="row m-0 p-0" id="judetButton">
          <ButtonWithIcon
            hasIcon
            m=".5rem 0"
            onClick={searchJudet}
            className="shadow-sm"
          >
            <div className="iconContainer">
              <AiOutlineSearch className="icon" />
            </div>
            Caută în {judet}
          </ButtonWithIcon>
          <ButtonWithIcon
            hasIcon
            m="0 0 .5rem 0"
            onClick={searchJudetOras}
            className="shadow-sm"
          >
            <div className="iconContainer">
              <AiOutlineSearch className="icon" />
            </div>
            Caută în {judet + ", " + oras}
          </ButtonWithIcon>
          <Button
            className={styles.resetBtn + " shadow-sm"}
            size="small"
            color="error"
            variant="outlined"
            onClick={() => dispatch(setInitialState())}
            startIcon={<BiReset className={styles.iconReset} />}
          >
            Reset
          </Button>
        </div>
      )}
    </div>
  );
};

export default ClientSearch;
