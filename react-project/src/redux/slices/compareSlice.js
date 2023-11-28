import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comparedProducts: [],
};

const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    addToCompare: (state, action) => {
      const productId = action.payload;
      const isProductInComparison = state.comparedProducts.includes(productId);

      if (!isProductInComparison) {
        state.comparedProducts.push(productId);
      } else {
        console.log("Product already in comparison");
      }
    },
    removeFromCompare: (state, action) => {
      const productId = action.payload;
      const index = state.comparedProducts.findIndex((id) => id === productId);

      if (index !== -1) {
        state.comparedProducts.splice(index, 1);
      } else {
        console.log("Product not found in comparison");
      }
    },
  },
});

export const { addToCompare, removeFromCompare } = compareSlice.actions;
export default compareSlice.reducer;
