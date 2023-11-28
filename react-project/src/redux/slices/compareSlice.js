import { createSlice } from "@reduxjs/toolkit";

const compareSlice = createSlice({
  name: "compare",
  initialState: {
    comparedProducts: [],
  },
  reducers: {
    addToCompare: (state, action) => {
      const productId = action.payload;

      if (
        state.comparedProducts.length < 2 &&
        !state.comparedProducts.includes(productId)
      ) {
        state.comparedProducts.push(productId);
      } else {
        console.log(
          "Cannot add more than 2 products to comparison or product already in comparison"
        );
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
