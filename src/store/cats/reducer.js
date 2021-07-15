import { createReducer } from "@reduxjs/toolkit";

import { cats } from "api/cats.json";

import { filter } from "./actions";

const initialState = {
  filter: "",
  items: cats,
};

export const catsReducer = createReducer(initialState, {
  [filter]: (state, action) => ({ ...state, filter: action.payload }),
});
