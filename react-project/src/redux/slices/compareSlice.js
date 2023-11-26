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
    removeFromCompare: (state, action) => {
      const index = state.comparedProducts.findIndex(
        (product) => product.id === action.payload
      );
      if (index !== -1) {
        state.comparedProducts.splice(index, 1);
      }
    },
  },
});

export const { addToCompare, removeFromCompare } = compareSlice.actions;
export default compareSlice.reducer;
