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
  // show: true,
  showMenu: false,
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
    // setShow: (state, action) => {
    //   state.show = !state.show;
    // },
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
  setInitialState,
  setOriginalList,
  setLoadSearch,
  // setShow,
  setShowMenu,
  setNoResultText,
  setNoResTrigger,
} = cautareSlice.actions;

export default cautareSlice.reducer;
