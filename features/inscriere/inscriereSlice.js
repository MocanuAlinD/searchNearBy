import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  judet: "",
  tipjob: "electrician",
  pretMin: "100",
  pretMax: "2000",
  detalii: "Introdu detalii aici",
  oras: "",
  dataregister: "",
  oraregister: "",
  fullname: "John Doe",
  urgente: false,
  urgenteNoapte: false,
  ziinceput: "Luni",
  zisfarsit: "Vineri",
  orainceput: "08:00",
  orasfarsit: "16:00",
  phone: "0721345678",
  email: "email@yahoo.com",
  website: "",
  listaOrase: [],
};

export const inscriereSlice = createSlice({
  name: "inscriere",
  initialState,
  reducers: {
    setUrgente: (state, action) => {
      state.urgente = !state.urgente;
    },
    setUrgenteNoapte: (state, action) => {
      state.urgenteNoapte = !state.urgenteNoapte;
    },
    setInitialState: (state, action) => {
      return initialState;
    },
    changeState: (state, action) => {
      const actOne = action.payload[0];
      const actTwo = action.payload[1];
      state[actOne] = actTwo;
    },
  },
});

export const { setUrgente, setUrgenteNoapte, setInitialState, changeState } =
  inscriereSlice.actions;

export default inscriereSlice.reducer;
