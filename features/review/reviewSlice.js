import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStar: 1,
  sortReview: "",
  longReview: "",
  numeReview: "",
  stars: {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  },
};

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setReview: (state, action) => {
      state.stars[action.payload] = state.stars[action.payload] + 1;
    },
    setCurrentStar: (state, action) => {
      state.currentStar = action.payload;
    },
    setSortReview: (state, action) => {
      state.sortReview = action.payload;
    },
    setLongReview: (state, action) => {
      state.longReview = action.payload;
    },
    setNumeReview: (state, action) => {
      state.numeReview = action.payload;
    },
    setInitialStateReview: () => {
      return initialState;
    },
  },
});

export const {
  setReview,
  setCurrentStar,
  setInitialStateReview,
  setSortReview,
  setLongReview,
  setNumeReview,
} = reviewSlice.actions;
export default reviewSlice.reducer;
