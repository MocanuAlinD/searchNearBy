import { configureStore, combineReducers } from "@reduxjs/toolkit";
import searchReducers from "../features/searchJudet/searchJudetSlice";
import sortItemsReducer from "../features/sortItems/sortItemsSlice";
import inscriereReducer from "../features/inscriere/inscriereSlice";
import loginReducer from "../features/login/loginSlice";
import signupReducer from "../features/signup/signupSlice";
import reclamatieReducer from "../features/reclamatie/reclamatieSlice";
import showTitleReducer from "../features/showTitle/showTitleSlice";

const rootReducers = combineReducers({
  search: searchReducers,
  sort: sortItemsReducer,
  inscriere: inscriereReducer,
  login: loginReducer,
  signup: signupReducer,
  reclamatie: reclamatieReducer,
  showTitle: showTitleReducer,
});

export const store = configureStore({
  reducer: rootReducers,
});
