import { configureStore, combineReducers } from "@reduxjs/toolkit";
import searchReducers from "../features/searchJudet/searchJudetSlice";
import sortItemsReducer from "../features/sortItems/sortItemsSlice";
import inscriereReducer from "../features/inscriere/inscriereSlice";
import loginReducer from "../features/login/loginSlice";
import signupReducer from "../features/signup/signupSlice";
import reclamatieReducer from "../features/reclamatie/reclamatieSlice";
import showTitleReducer from "../features/showTitle/showTitleSlice";
import modReducer from "../features/modificaDate/modificaDateSlice";
import reviewRedurer from "../features/review/reviewSlice";
import reviewSearchReducer from "../features/reviewSearch/reviewSearchSlice";

const rootReducers = combineReducers({
  search: searchReducers,
  sort: sortItemsReducer,
  inscriere: inscriereReducer,
  login: loginReducer,
  signup: signupReducer,
  reclamatie: reclamatieReducer,
  showTitle: showTitleReducer,
  mod: modReducer,
  review: reviewRedurer,
  reviewSearch: reviewSearchReducer,
});

export const store = configureStore({
  reducer: rootReducers,
});
