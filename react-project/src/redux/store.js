// store.js
import { configureStore } from "@reduxjs/toolkit";
import compareReducer from "./slices/compareSlice";
import cardReducer from "./slices/cardSlice";
import cartAdd from "./slices/cartAdd";
import productReducer from "../reducers/productReducer";

const store = configureStore({
  reducer: {
    compare: compareReducer,
    cardReducer,
    cartAdd,
    products: productReducer,
  },
});

export default store;
