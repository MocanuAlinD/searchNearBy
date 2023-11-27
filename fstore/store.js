import { configureStore, combineReducers } from "@reduxjs/toolkit";
import searchReducers from "../features/searchJudet/searchJudetSlice";
import sortItemsReducer from "../features/sortItems/sortItemsSlice";

const rootReducers = combineReducers({
  search: searchReducers,
  sort: sortItemsReducer,
});

export const store = configureStore({
  reducer: rootReducers,
});
