import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataregister: "",
  detalii: "Introdu detalii aici",
  email: "email@yahoo.com",
  fullname: "John Doe",
  judet: "",
  listaOrase: [],
  orainceput: "08:00",
  oraregister: "",
  oras: "",
  orasfarsit: "16:00",
  phone: "0721345678",
  pretMax: "2000",
  pretMin: "100",
  tipjob: "electrician",
  urgente: false,
  urgenteNoapte: false,
  website: "",
  ziinceput: "Luni",
  zisfarsit: "Vineri",
};

export const modificaDateSlice = createSlice({
  name: "modifica",
  initialState,
  reducers: {
    modUrgente: (state, action) => {
      state.urgente = !state.urgente;
    },
    modUrgenteNoapte: (state, action) => {
      state.urgenteNoapte = !state.urgenteNoapte;
    },
    modInitialState: (state, action) => {
      return initialState;
    },
    modChangeState: (state, action) => {
      const actOne = action.payload[0];
      const actTwo = action.payload[1];
      state[actOne] = actTwo;
    },
  },
});

export const { modUrgente, modUrgenteNoapte, modInitialState, modChangeState } =
  modificaDateSlice.actions;

export default modificaDateSlice.reducer;
