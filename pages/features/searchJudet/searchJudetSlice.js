import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  judet: "",
  oras: "",
  cautare: "",
  sortedList: [],
  listaOrase: [],
  listaCarduri: [],
  originalList: [],
  loadSearch: false,
  show: true,
  showMenu: false,
  noResultsText: "",
  noResTrigger: false,
  
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

export const cautareSlice = createSlice({
  name: "cautare",
  initialState,
  reducers: {
    setJudet: (state, action) => {
      state.judet = action.payload;
    },
    setOras: (state, action) => {
      state.oras = action.payload;
    },
    setCautare: (state, action) => {
      state.cautare = action.payload;
    },
    setSortedList: (state, action) => {
      state.sortedList = action.payload;
    },
    setListaOrase: (state, action) => {
      state.listaOrase = action.payload;
    },
    setListaCarduri: (state, action) => {
      state.listaCarduri = action.payload;
    },
    setOriginalList: (state, action) => {
      state.originalList = action.payload;
    },
    setLoadSearch: (state, action) => {
      state.loadSearch = action.payload;
    },
    setShow: (state, action) => {
      state.show = action.payload;
    },
    setShowMenu: (state, action) => {
      state.showMenu = action.payload;
    },
    setNoResultText: (state, action) => {
      state.noResultsText = action.payload;
    },
    setNoResTrigger: (state, action) => {
      state.noResTrigger = action.payload;
    },
    setInitialState: (state, action) => {
      state.originalList = [];
      state.judet = "";
      state.oras = "";
      state.cautare = "";
      state.sortedList = [];
      state.noResTrigger = false;
    },
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
    setInitialSort: (state, action) => {
      state.toate = true;
      state.tarifAsc = false;
      state.tarifDesc = false;
      state.dataAsc = false;
      state.dataDesc = false;
      state.program = false;
      state.night = false;
      state.website = false;
      state.weekend = false;
    },
  },
});

export const {
  setJudet,
  setOras,
  setCautare,
  setSortedList,
  setListaOrase,
  setListaCarduri,
  setInitialState,
  setOriginalList,
  setLoadSearch,
  setShow,
  setShowMenu,
  setNoResultText,
  setNoResTrigger,
  setToate,
  setTarifAsc,
  setTarifDesc,
  setDataAsc,
  setDataDesc,
  setProgram,
  setNight,
  setWebsite,
  setWeekend,
  setInitialSort
} = cautareSlice.actions;

export default cautareSlice.reducer;
