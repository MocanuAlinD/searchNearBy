import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showTitle: true,
};

export const showTitleSlice = createSlice({
  name: "showTitle",
  initialState,
  reducers: {
    setShowTitle: (state, action) => {
      state.showTitle = !state.showTitle;
    },
    setInitialStateShowTitle: (state, action) => {
      return initialState;
    },
  },
});

export const { setShowTitle, setInitialStateShowTitle } =
  showTitleSlice.actions;
export default showTitleSlice.reducer;
