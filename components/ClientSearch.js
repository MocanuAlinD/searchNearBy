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
import { ButtonWithIcon } from "../components/tags/ButtonWithIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  setJudet,
  setOras,
  setNoResTrigger,
  setListaCarduri,
  setListaOrase,
  setInitialStateSearch,
  setCautare,
} from "../features/searchJudet/searchJudetSlice";

const ClientSearch = ({ searchJudet, searchJudetOras }) => {
  const dispatch = useDispatch();
  const judet = useSelector((state) => state.search.judet);
  const oras = useSelector((state) => state.search.oras);
  const listaOrase = useSelector((state) => state.search.listaOrase);
  const cautare = useSelector((state) => state.search.cautare);

  return (
    <div
      className={
        styles.container +
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
            <InputContainer>
              <input
                autoComplete="off"
                type="text"
                placeholder=" "
                id="idForLabel"
                value={cautare}
                onChange={(e) => dispatch(setCautare(e.target.value))}
              />
              <label htmlFor="idForLabel">Cauta....</label>
            </InputContainer>

            <IconButton
              aria-label="delete"
              disabled={!cautare}
              onClick={() => dispatch(setCautare(""))}
              variant="contained"
              className={`${
                cautare
                  ? " text-warning ms-1 py-2 align-self-end"
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
          <ButtonWithIcon hasIcon onClick={searchJudet}>
            <div className="iconContainer">
              <AiOutlineSearch className="icon" />
            </div>
            Caută în {judet}
          </ButtonWithIcon>
          <ButtonWithIcon hasIcon onClick={searchJudetOras} mt="0">
            <div className="iconContainer">
              <AiOutlineSearch className="icon" />
            </div>
            Caută în {judet + ", " + oras}
          </ButtonWithIcon>
          <Button
            className={styles.resetBtn + " shadow-sm"}
            size="medium"
            color="error"
            variant="outlined"
            onClick={() => dispatch(setInitialStateSearch())}
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
