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
  showMenu: false,
  showUserMenu: false,
  noResultsText: "",
  noResTrigger: false,
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
    setShowMenu: (state, action) => {
      state.showMenu = action.payload;
    },
    setShowUserMenu: (state, action) => {
      state.showMenu = action.payload;
    },
    setNoResultText: (state, action) => {
      state.noResultsText = action.payload;
    },
    setNoResTrigger: (state, action) => {
      state.noResTrigger = action.payload;
    },
    setInitialStateSearch: (state, action) => {
      return initialState;
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
  setInitialStateSearch,
  setOriginalList,
  setLoadSearch,
  setShowMenu,
  setShowUserMenu,
  setNoResultText,
  setNoResTrigger,
} = cautareSlice.actions;

export default cautareSlice.reducer;
