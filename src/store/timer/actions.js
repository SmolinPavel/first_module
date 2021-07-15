import { createAction } from "@reduxjs/toolkit";

export const increment = createAction("@timer/increment");
export const decrement = createAction("@timer/decrement");
export const clear = createAction("@timer/clear");
