import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  emailLogare: "alin_ngt@yahoo.com",
  parolaLogare: "mocanu",
  uid: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.emailLogare = action.payload;
    },
    setPassword: (state, action) => {
      state.parolaLogare = action.payload;
    },
    setUid: (state, action) => {
      state.uid = action.payload;
    },
  },
});

export const { setEmail, setPassword, setUid } = loginSlice.actions;
export default loginSlice.reducer;
