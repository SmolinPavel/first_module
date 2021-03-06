import { createSelector } from "@reduxjs/toolkit";

export const selectFilterValue = (state) => state.cats.filter;

export const selectItems = (state, props) => state.cats.items;

export const selectFilteredCats = createSelector(
  [selectItems, selectFilterValue],
  (items, filterValue) => {
    return items.filter((cat) => cat.type.includes(filterValue));
  }
);
