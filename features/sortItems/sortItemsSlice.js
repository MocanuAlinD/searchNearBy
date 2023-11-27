import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toate: true,
  tarifAsc: false,
  tarifDesc: false,
  dataAsc: false,
  dataDesc: false,
  program: false,
  night: false,
  website: false,
  weekend: false,
};

const sortItemsSlice = createSlice({
  reducer: {
    name: "sortItems",
    initialState,
    reducers: {
      setToate: (state, action) => {
        state.toate = action.payload;
      },
      setTarifAsc: (state, action) => {
        state.tarifAsc = action.payload;
      },
      setTarifDesc: (state, action) => {
        state.tarifDesc = action.payload;
      },
      setDataAsc: (state, action) => {
        state.dataAsc = action.payload;
      },
      setDataDesc: (state, action) => {
        state.dataDesc = action.payload;
      },
      setProgram: (state, action) => {
        state.program = action.payload;
      },
      setNight: (state, action) => {
        state.night = action.payload;
      },
      setWebsite: (state, action) => {
        state.website = action.payload;
      },
      setWeekend: (state, action) => {
        state.weekend = action.payload;
      },
      setInitialState: (state, action) => {
        state = initialState;
      },
    },
  },
});

export const {
  setToate,
  setTarifAsc,
  setTarifDesc,
  setDataAsc,
  setDataDesc,
  setProgram,
  setNight,
  setWebsite,
  setWeekend,
  setInitialState,
} = sortItemsSlice.actions;

export default sortItemsSlice.reducer;
