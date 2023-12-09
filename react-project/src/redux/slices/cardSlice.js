import { createSlice } from "@reduxjs/toolkit";
import getCharacteristicLocalStorage from "../../utils/getCharacteristicLocalStorage";
import getAnalogLocalStorage from "../../utils/getAnalogLocalStorage";

const initialState = {
  category: "",
  characteristics: getCharacteristicLocalStorage(),
  analog: getAnalogLocalStorage(),
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
