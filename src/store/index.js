import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import { catsReducer } from "./cats";
import { timerReducer } from "./timer";

const rootReducer = combineReducers({
  cats: catsReducer,
  timer: timerReducer,
});

// Store
export const store = configureStore({ reducer: rootReducer });
