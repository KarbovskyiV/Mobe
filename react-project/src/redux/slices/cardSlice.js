import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  characteristics: [],
  analog: [],
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
    setAnalog(state, action) {
      state.analog = action.payload;
    },
  },
});

export const { setCharacteristics, setCategoryProduct, setAnalog } =
  cardSlice.actions;

export default cardSlice.reducer;
