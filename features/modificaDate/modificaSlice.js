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
  id: "",
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

export const modificaSlice = createSlice({
  name: "modifica",
  initialState,
  reducers: {
    setPhoneModifica: (state, action) => {
      state.phone = action.payload;
    },
    addPhoneModifica: (state, action) => {
      if (state.phone.length >= 4) {
        return;
      }
      const newPhone = { phone: "" };
      state.phone.push(newPhone);
    },
    removePhoneModifica: (state, action) => {
      if (state.phone.length <= 1) {
        return;
      }
      const list = [...state.phone];
      list.splice(action.payload, 1);
      state.phone = list;
    },
    setEmailModifica: (state, action) => {
      state.email = action.payload;
    },
    addEmailModifica: (state, action) => {
      if (state.email.length >= 4) {
        return;
      }
      const newEmail = { email: "" };
      state.email.push(newEmail);
    },
    removeEmailModifica: (state, action) => {
      if (state.email.length <= 1) {
        return;
      }
      const list = [...state.email];
      list.splice(action.payload, 1);
      state.email = list;
    },
    changeStateModifica: (state, action) => {
      const actOne = action.payload[0];
      const actTwo = action.payload[1];
      state[actOne] = actTwo;
    },
    setInitialStateModifica: (state, action) => {
      return initialState;
    },
  },
});

export const {
  setPhoneModifica,
  addPhoneModifica,
  removePhoneModifica,
  setEmailModifica,
  addEmailModifica,
  removeEmailModifica,
  changeStateModifica,
  setInitialStateModifica,
} = modificaSlice.actions;

export default modificaSlice.reducer;
