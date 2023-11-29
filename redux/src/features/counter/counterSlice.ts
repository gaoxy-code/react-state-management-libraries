import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  count: number;
};

const initialState: InitialState = {
  count: 0,
};

const slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.count -= action.payload;
    },
  },
  extraReducers(builder) {},
});

export const { increment, decrement } = slice.actions;
export default slice.reducer;
