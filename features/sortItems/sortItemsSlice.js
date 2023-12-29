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
};

const sortItemsSlice = createSlice({
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
    setInitialStateSort: (state, action) => {
      return initialState;
    },
    setFilterSorteraza: (state, action) => {
      const tmp = ["tarifAsc", "tarifDesc", "dataDesc", "dataAsc", "toate"];
      for (let item in tmp) {
        if (tmp[item] === action.payload) {
          state[tmp[item]] = true;
        } else {
          state[tmp[item]] = false;
        }
      }
    },
    setFilterFilters: (state, action) => {
      state.toate = false;
      state[action.payload] = !state[action.payload];
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
  setInitialStateSort,
  setFilterSorteraza,
  setFilterFilters,
} = sortItemsSlice.actions;

export default sortItemsSlice.reducer;
