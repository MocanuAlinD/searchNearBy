import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  emailLogare: "alin_ngt@yahoo.com",
  parolaLogare: "mocanu",
  uid: "",
  logImage: "",
  hasService: false,
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
    setImage: (state, action) => {
      state.logImage = action.payload;
    },
    setHasService: (state, action) => {
      state.hasService = action.payload;
    },
  },
});

export const { setEmail, setPassword, setUid, setImage, setHasService } =
  loginSlice.actions;
export default loginSlice.reducer;
