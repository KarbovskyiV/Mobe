import { createSlice } from "@reduxjs/toolkit";

const compareSlice = createSlice({
  name: "compare",
  initialState: {
    comparedProductsCount: 0,
  },
  reducers: {
    setComparedProductsCount: (state, action) => {
      state.comparedProductsCount = action.payload;
    },
  },
});

export const { setComparedProductsCount } = compareSlice.actions;
export default compareSlice.reducer;
