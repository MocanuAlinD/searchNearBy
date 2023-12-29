import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataregister: "",
  detalii: "Introdu detalii aici",
  fullname: "John Doe",
  judet: "",
  listaOrase: [],
  orainceput: "08:00",
  oraregister: "",
  oras: "",
  orasfarsit: "16:00",
  email: [{ email: "email@yahoo.com" }],
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
      state.phone = action.payload;
    },
    addPhone: (state, action) => {
      if (state.phone.length >= 4) {
        return;
      }
      const newPhone = { phone: "" };
      state.phone.push(newPhone);
    },
    removePhone: (state, action) => {
      if (state.phone.length <= 1) {
        return;
      }
      const list = [...state.phone];
      list.splice(action.payload, 1);
      state.phone = list;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    addEmail: (state, action) => {
      if (state.email.length >= 4) {
        return;
      }
      const newEmail = { email: "" };
      state.email.push(newEmail);
    },
    removeEmail: (state, action) => {
      if (state.email.length <= 1) {
        return;
      }
      const list = [...state.email];
      list.splice(action.payload, 1);
      state.email = list;
    },
    changeState: (state, action) => {
      const actOne = action.payload[0];
      const actTwo = action.payload[1];
      state[actOne] = actTwo;
    },
    setInitialStateInscriere: (state, action) => {
      return initialState;
    },
  },
});

export const {
  setUrgente,
  setUrgenteNoapte,
  setInitialStateInscriere,
  changeState,
  setPhone,
  addPhone,
  removePhone,
  setEmail,
  addEmail,
  removeEmail,
} = inscriereSlice.actions;

export default inscriereSlice.reducer;
