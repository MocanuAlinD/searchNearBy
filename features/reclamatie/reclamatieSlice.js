import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  telefonReclamat: "",
  motivReclamatie: "",
  emailReclamant: "",
};

export const reclamatieSlice = createSlice({
  name: "reclamatie",
  initialState,
  reducers: {
    setTelefonReclamat: (state, action) => {
      state.telefonReclamat = action.payload;
    },
    setMotivReclamatie: (state, action) => {
      state.motivReclamatie = action.payload;
    },
    setEmailReclamant: (state, action) => {
      state.emailReclamant = action.payload;
    },
    setInitialStateReclamatie: (state, action) => {
      return initialState;
    },
  },
});

export const {
  setTelefonReclamat,
  setMotivReclamatie,
  setEmailReclamant,
  setInitialStateReclamatie,
} = reclamatieSlice.actions;
export default reclamatieSlice.reducer;
