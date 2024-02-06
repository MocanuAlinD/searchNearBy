import React from "react";
import {
  SelectCustom,
  InputContainer,
  SmallContainer,
  Wrapper,
} from "../components/singleTags/elemetsCustom";
import { judete } from "../lib/judete";
import { alin } from "../lib";
import { IconButton } from "@mui/material";
import { MdClear } from "react-icons/md";
import { Button } from "./tags/Button";
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
import { IconSearch, IconDelete } from "./tags/Icon";
import styles from "../styles/clientsearch.module.scss";

const ClientSearch = ({ searchJudet, searchJudetOras }) => {
  const dispatch = useDispatch();
  const judet = useSelector((state) => state.search.judet);
  const oras = useSelector((state) => state.search.oras);
  const listaOrase = useSelector((state) => state.search.listaOrase);
  const cautare = useSelector((state) => state.search.cautare);

  return (
    <SmallContainer bg mh jc="flex-start">
      <Wrapper>
        <Wrapper>
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
        </Wrapper>

        {oras ? (
          <Wrapper>
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
          </Wrapper>
        ) : (
          []
        )}

        {oras && (
          <Wrapper fd="row">
            <InputContainer>
              <input
                autoComplete="off"
                type="text"
                placeholder=""
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
                  : " text-black-50 ms-1 py-2 align-self-end"
              }`}
            >
              <MdClear fontSize="1.3rem" />
            </IconButton>
          </Wrapper>
        )}
      </Wrapper>

      {judet && (
        <Wrapper>
          <Button onClick={searchJudet} icon={<IconSearch />}>
            Caută în {judet}
          </Button>
          <Button onClick={searchJudetOras} icon={<IconSearch />}>
            Caută în {judet}, {oras}
          </Button>
          <Button reset onClick={() => dispatch(setInitialStateSearch())}>
            Sterge
          </Button>
        </Wrapper>
      )}
    </SmallContainer>
  );
};

export default ClientSearch;
