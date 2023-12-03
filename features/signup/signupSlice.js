import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  emailInregistrare: "",
  parolaOne: "",
  parolaTwo: "",
};

export const signupSlice = createSlice({
  name: "signin",
  initialState,
  reducers: {
    setEmailInregistrare: (state, action) => {
      state.emailInregistrare = action.payload;
    },
    setParolaOne: (state, action) => {
      state.parolaOne = action.payload;
    },
    setParolaTwo: (state, action) => {
      state.parolaTwo = action.payload;
    },
    setInitialStateInregistrare: (state, action) => {
      return initialState;
    },
  },
});

export const {
  setEmailInregistrare,
  setParolaOne,
  setParolaTwo,
  setInitialStateInregistrare,
} = signupSlice.actions;
export default signupSlice.reducer;
