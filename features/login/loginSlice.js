import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  emailLogare: "alin_ngt@yahoo.com",
  parolaLogare: "mocanu",
  uid: "",
  logImage: "",
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
  },
});

export const { setEmail, setPassword, setUid, setImage } = loginSlice.actions;
export default loginSlice.reducer;
