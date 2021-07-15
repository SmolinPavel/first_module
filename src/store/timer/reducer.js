import { createReducer } from "@reduxjs/toolkit";

import { clear, decrement, increment } from "./actions";

const initialState = 43;

export const timerReducer = createReducer(initialState, {
  [clear]: () => 0,
  [decrement]: (state, action) => state - action.payload,
  [increment]: (state, action) => state + action.payload,
});
