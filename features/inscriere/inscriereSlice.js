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
  phone: [{ phone: "" }],
  pretMax: "2000",
  pretMin: "100",
  tipjob: "electrician",
  urgente: false,
  urgenteNoapte: false,
  website: "",
  ziinceput: "Luni",
  zisfarsit: "Vineri",
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
    setPhone: (state, action) => {
      state.phone[action.payload[0]] = action.payload[1];
    },
    addPhone: (state, action) => {
      const newPhone = { phone: "" };
      state.phone.push(newPhone);
    },
    changeState: (state, action) => {
      const actOne = action.payload[0];
      const actTwo = action.payload[1];
      state[actOne] = actTwo;
    },
    setInitialState: (state, action) => {
      return initialState;
    },
  },
});

export const {
  setUrgente,
  setUrgenteNoapte,
  setInitialState,
  changeState,
  setPhone,
  addPhone,
} = inscriereSlice.actions;

export default inscriereSlice.reducer;
