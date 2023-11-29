import { RootState } from "@/app/store";
import { createSelector } from "@reduxjs/toolkit";

export const countSelector = createSelector(
  (state: RootState) => state.counter,
  (counter) => counter.count
);
