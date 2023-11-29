import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
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
  phone: ["0721345678"],
  email: ["email@yahoo.com"],
  website: "",
};

export const inscriereSlice = createSlice({
  name: "inscriere",
  initialState,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setJudet: (state, action) => {
      state.judet = action.payload;
    },
    setTipJob: (state, action) => {
      state.tipjob = action.payload;
    },
    setPretMin: (state, action) => {
      state.pretMin = action.payload;
    },
    setPretMax: (state, action) => {
      state.pretMax = action.payload;
    },
    setDetalii: (state, action) => {
      state.detalii = action.payload;
    },
    setOras: (state, action) => {
      state.oras = action.payload;
    },
    setDataRegister: (state, action) => {
      state.dataregister = action.payload;
    },
    setOraRegister: (state, action) => {
      state.oraregister = action.payload;
    },
    setFullname: (state, action) => {
      state.fullname = action.payload;
    },
    setUrgente: (state, action) => {
      state.urgente = action.payload;
    },
    setUrgenteNoapte: (state, action) => {
      state.urgenteNoapte = action.payload;
    },
    setZiInceput: (state, action) => {
      state.ziinceput = action.payload;
    },
    setZiSfarsit: (state, action) => {
      state.zisfarsit = action.payload;
    },
    setOraInceput: (state, action) => {
      state.orainceput = action.payload;
    },
    setOraSfarsit: (state, action) => {
      state.orasfarsit = action.payload;
    },
    setPhone: (state, action) => {
      state.phone.push(action.payload);
    },
    setEmail: (state, action) => {
      state.email.push(action.payload);
    },
    setWebsite: (state, action) => {
      state.website = action.payload;
    },
    setInitialState: (state, action) => {
      return initialState;
    },
  },
});

export const {
  setId,
  setJudet,
  setTipJob,
  setPretMax,
  setPretMin,
  setDetalii,
  setOras,
  setDataRegister,
  setOraRegister,
  setFullname,
  setUrgente,
  setUrgenteNoapte,
  setZiInceput,
  setZiSfarsit,
  setOraInceput,
  setOraSfarsit,
  setPhone,
  setEmail,
  setWebsite,
  setInitialState,
} = inscriereSlice.actions;

export default inscriereSlice.reducer;
