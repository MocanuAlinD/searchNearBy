import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  caut: "",
  cerinte: "",
  sumaAlocata: "",
  numePrenume: "",
  contact: "",
  dataLimita: "",
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
