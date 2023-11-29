import { configureStore, combineReducers } from "@reduxjs/toolkit";
import searchReducers from "../features/searchJudet/searchJudetSlice";
import sortItemsReducer from "../features/sortItems/sortItemsSlice";
import inscriereReducer from "../features/inscriere/inscriereSlice";

const rootReducers = combineReducers({
  search: searchReducers,
  sort: sortItemsReducer,
  inscriere: inscriereReducer,
});

export const store = configureStore({
  reducer: rootReducers,
});
