import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rev: [],
};

export const reviewSearchSlice = createSlice({
  name: "reviewSearch",
  initialState,
  reducers: {
    setReviewSearchRev: (state, action) => {
      state.rev = action.payload;
    },
    setInitialStateReviewSearch: () => {
      return initialState;
    },
  },
});

export const { setReviewSearchRev, setInitialStateReviewSearch } =
  reviewSearchSlice.actions;
export default reviewSearchSlice.reducer;
