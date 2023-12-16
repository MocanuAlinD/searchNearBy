import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStar: 1,
  sortReview: "",
  longReview: "",
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
      console.log("setReview: ", action.payload);
      state.stars[action.payload] = state.stars[action.payload] + 1;
    },
    setCurrentStar: (state, action) => {
      console.log("current star: ", action.payload);
      state.currentStar = action.payload;
    },
    setSortReview: (state, action) => {
      state.sortReview = action.payload;
    },
    setLongReview: (state, action) => {
      state.longReview = action.payload;
    },
    setReviewInitialState: () => {
      return initialState;
    },
  },
});

export const {
  setReview,
  setCurrentStar,
  setReviewInitialState,
  setSortReview,
  setLongReview,
} = reviewSlice.actions;
export default reviewSlice.reducer;
