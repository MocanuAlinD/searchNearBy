import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  testOne: "testOne",
  testTwo: "",
  testThree: "",
};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setTestOne: (state, action) => {
      state.testOne = action.payload;
    },
    setTestTwo: (state, action) => {
      state.testTwo = action.payload;
    },
    setTestThree: (state, action) => {
      state.testThree = action.payload;
    },
    getState: (state, action) => {
      console.log(state)
    },
  },
});

export const { setTestOne, setTestTwo, setTestThree, getState } =
  testSlice.actions;

export default testSlice.reducer;
