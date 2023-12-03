import { configureStore, combineReducers } from "@reduxjs/toolkit";
import searchReducers from "../features/searchJudet/searchJudetSlice";
import sortItemsReducer from "../features/sortItems/sortItemsSlice";
import inscriereReducer from "../features/inscriere/inscriereSlice";
import loginReducer from "../features/login/loginSlice";
import signupReducer from "../features/signup/signupSlice";

const rootReducers = combineReducers({
  search: searchReducers,
  sort: sortItemsReducer,
  inscriere: inscriereReducer,
  login: loginReducer,
  signup: signupReducer,
});

export const store = configureStore({
  reducer: rootReducers,
});
