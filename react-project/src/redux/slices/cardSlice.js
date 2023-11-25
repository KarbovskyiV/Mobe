import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  characteristics: [],
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setCategoryProduct(state, action) {
      state.category = action.payload;
    },
    setCharacteristics(state, action) {
      state.characteristics = action.payload;
    },
  },
});

export const { setCharacteristics, setCategoryProduct } = cardSlice.actions;

export default cardSlice.reducer;
