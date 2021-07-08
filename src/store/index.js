import { combineReducers } from "redux";
import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

export const increment = createAction("timer/increment");
export const decrement = createAction("timer/decrement");
export const clear = createAction("timer/clear");

const timer = createReducer(43, {
  [increment]: (state, action) => state + action.payload,
  [decrement]: (state, action) => state - action.payload,
  [clear]: () => 0,
});

const rootReducer = combineReducers({
  timer,
});

// Store
export const store = configureStore({ reducer: rootReducer });
