// store.js
import { configureStore } from "@reduxjs/toolkit";
import compareReducer from "./slices/compareSlice";
import cardReducer from "./slices/cardSlice";
import cartAdd from "./slices/cartAdd";
import productReducer from "../reducers/productReducer";

import wishlistSlice from '../redux/slices/wishlistSlice';

const store = configureStore({
  reducer: {
    compare: compareReducer,
    cardReducer,
    cartAdd,
    products: productReducer,
    wishlists: wishlistSlice
  },
  
});

export default store;
