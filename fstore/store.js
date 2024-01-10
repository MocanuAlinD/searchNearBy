import { configureStore, combineReducers } from "@reduxjs/toolkit";
import searchReducers from "../features/searchJudet/searchJudetSlice";
import sortItemsReducer from "../features/sortItems/sortItemsSlice";
import inscriereReducer from "../features/inscriere/inscriereSlice";
import loginReducer from "../features/login/loginSlice";
import signupReducer from "../features/signup/signupSlice";
import reclamatieReducer from "../features/reclamatie/reclamatieSlice";
import showTitleReducer from "../features/showTitle/showTitleSlice";
import modifyReducer from "../features/modificaDate/modificaSlice";
import reviewRedurer from "../features/review/reviewSlice";
import reviewSearchReducer from "../features/reviewSearch/reviewSearchSlice";
import cerereOfertaReducer from "../features/cerereOferta/cerereOfertaSlice";

const rootReducers = combineReducers({
  search: searchReducers,
  sort: sortItemsReducer,
  inscriere: inscriereReducer,
  login: loginReducer,
  signup: signupReducer,
  reclamatie: reclamatieReducer,
  showTitle: showTitleReducer,
  modify: modifyReducer,
  review: reviewRedurer,
  reviewSearch: reviewSearchReducer,
  cerereOferta: cerereOfertaReducer,
});

export const store = configureStore({
  reducer: rootReducers,
});
