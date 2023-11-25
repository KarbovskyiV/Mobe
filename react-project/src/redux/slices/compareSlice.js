// compareSlice.js (или ваш редюсер для сравнения товаров)
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comparedProductsCount: 0,
 
};

const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    addToCompare: (state) => {
      state.comparedProductsCount += 1;
    },
    removeFromCompare: (state) => {
      if (state.comparedProductsCount > 0) {
        state.comparedProductsCount -= 1;
      }
    },
  },
});

export const { addToCompare, removeFromCompare } = compareSlice.actions;
export default compareSlice.reducer;
