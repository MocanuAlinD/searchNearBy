import { configureStore } from "@reduxjs/toolkit";
import searchReducers from "../features/searchJudet/searchJudetSlice";

export const store = configureStore({
  reducer: searchReducers,
});
