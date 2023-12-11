import { createSlice } from "@reduxjs/toolkit";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();

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
    signOutState: (state, action) => {
      signOut(auth);
    },
  },
});

export const { setEmail, setPassword, setUid, setImage, signOutState } =
  loginSlice.actions;
export default loginSlice.reducer;
