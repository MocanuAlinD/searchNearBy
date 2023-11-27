import {  configureStore, combineReducers } from "@reduxjs/toolkit";
import searchReducers from "../features/searchJudet/searchJudetSlice";
import testReducers from "../features/test/testSlice"


const rootReducers = combineReducers({
  search: searchReducers,
  test: testReducers
})


export const store = configureStore({
  reducer: rootReducers,
});
