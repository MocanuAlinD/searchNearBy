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
      // const tmp = ["program", "night", "website", "weekend"];
      state.toate = false
      state[action.payload] = !state[action.payload];
    },
    getState: (state, action) => {
      console.log("stat ", { ...state });
      // return state;
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
  setFilterSorteraza,
  setFilterFilters,
  getState,
} = sortItemsSlice.actions;

export default sortItemsSlice.reducer;
