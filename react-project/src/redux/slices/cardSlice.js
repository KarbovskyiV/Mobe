import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  category: "",
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setNameProduct(state, action) {
      state.namePr = action.payload;
    },
    setCategoryProduct(state, action) {
      state.category = action.payload;
    },
  },
});

export const { setNameProduct, setCategoryProduct } = cardSlice.actions;

export default cardSlice.reducer;
