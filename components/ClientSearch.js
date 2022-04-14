import React from "react";
import {
  SelectCustom,
  LabelCustom,
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

const ClientSearch = ({
  state,
  setState,
  searchJudet,
  searchJudetOras,
  initialValues,
}) => {

  return (
    <div className="row m-0 p-0 d-flex flex-column justify-content-end">
      <div className="p-0">
        <div>
          <LabelCustom htmlFor="judetID">Judet</LabelCustom>
          <SelectCustom
            w="100%"
            name="judet"
            id="judetID"
            value={state.judet}
            onChange={(e) =>
              setState({
                ...state,
                judet: e.target.value,
                listaOrase: alin[e.target.value].sort(
                  (a, b) => (a.nume > b.nume && 1) || -1
                ),
                oras: alin[e.target.value].sort(
                  (a, b) => (a.nume > b.nume && 1) || -1
                )[0].nume,
                listaCarduri: [],
              })
            }
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

        {state.oras ? (
          <div>
            <LabelCustom htmlFor="orasID">Oras</LabelCustom>
            <SelectCustom
              w="100%"
              name="oras"
              id="orasID"
              value={state.oras}
              onChange={(e) =>
                setState({
                  ...state,
                  oras: e.target.value,
                })
              }
            >
              {state.listaOrase.map((item, index) => (
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

        {state.oras && (
          <div>
            <div className="d-flex m-0 p-0 justify-content-between align-items-center">
              <InputContainer className="inputContainer" fs="1rem">
                <input
                  autoComplete="off"
                  type="text"
                  className="input"
                  placeholder=" "
                  id="idForLabel"
                  value={state.cautare}
                  onChange={(e) =>
                    setState({ ...state, cautare: e.target.value })
                  }
                />
                <label htmlFor="idForLabel" className="label">
                  Cauta....
                </label>
              </InputContainer>

              <IconButton
                aria-label="delete"
                disabled={!state.cautare}
                onClick={() => setState({ ...state, cautare: "" })}
                variant="contained"
                className={`${state.cautare ? "text-warning ms-1 py-1 align-self-end" : "text-muted ms-1 py-1 align-self-end"}`}
              >
                <MdClear fontSize="1.3rem" />
              </IconButton>
            </div>
          </div>
        )}
      </div>

      {state.judet && (
        <div className="row m-0 p-0">
          <ButtonWithIcon hasIcon m="1rem 0 1rem 0" onClick={searchJudet} className="shadow-sm">
            <div className="iconContainer">
              <AiOutlineSearch className="icon" />
            </div>
            Cauta {"in " + state.judet}
          </ButtonWithIcon>
          <ButtonWithIcon hasIcon m="0 0 1rem 0" onClick={searchJudetOras} className="shadow-sm">
            <div className="iconContainer">
              <AiOutlineSearch className="icon" />
            </div>
            Cauta in {state.judet + ", " + state.oras}
          </ButtonWithIcon>
          <Button
            className={styles.resetBtn + " shadow-sm"}
            size="small"
            color="error"
            variant="outlined"
            onClick={() => setState(initialValues)}
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
