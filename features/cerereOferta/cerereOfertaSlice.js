import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  caut: "Reparatii tv",
  cerinte: "Sa lucreze bine",
  sumaAlocata: "maxim 500",
  numePrenume: "Daniel Alin",
  contact: "alin.dann@yahoo.ro",
  dataLimita: "30.03.2024",
  char: 0,
};

export const cerereOfertaSlice = createSlice({
  name: "oferta",
  initialState,
  reducers: {
    setCerereState: (state, action) => {
      state[action.payload[0]] = action.payload[1];
    },
    setInitialStateCerere: (state, action) => {
      return initialState;
    },
  },
});

export const { setCerereState, setInitialStateCerere } =
  cerereOfertaSlice.actions;
export default cerereOfertaSlice.reducer;
