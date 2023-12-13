import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataregister: "2100-10-25",
  detalii: "Introdu detalii aici",
  email: "email@yahoo.com",
  fullname: "Moc Dan Alin",
  judet: "",
  listaOrase: [],
  orainceput: "08:00",
  oraregister: "",
  oras: "",
  orasfarsit: "16:00",
  phone: "0721345678,221577",
  pretMax: "2345",
  pretMin: "678",
  tipjob: "programmer for life",
  urgente: false,
  urgenteNoapte: false,
  website: "mocanu",
  ziinceput: "Luni",
  zisfarsit: "Vineri",
};

export const modificaDateSlice = createSlice({
  name: "modifica",
  initialState,
  reducers: {
    modUrgente: (state, action) => {
      state.urgente = action.payload;
    },
    modUrgenteNoapte: (state, action) => {
      state.urgenteNoapte = action.payload;
    },
    modChangeState: (state, action) => {
      const actOne = action.payload[0];
      const actTwo = action.payload[1];
      state[actOne] = actTwo;
    },
    modInitialState: (state, action) => {
      return initialState;
    },
  },
});

export const { modUrgente, modUrgenteNoapte, modInitialState, modChangeState } =
  modificaDateSlice.actions;

export default modificaDateSlice.reducer;
