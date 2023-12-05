// store.js
import { configureStore } from "@reduxjs/toolkit";
import compareReducer from "./slices/compareSlice";
import cardReducer from "./slices/cardSlice";
import cartAdd from "./slices/cartAdd";
import productReducer from "../reducers/productReducer";

import likedProducts from "../redux/slices/wishlistSlice";

const store = configureStore({
  reducer: {
    compare: compareReducer,
    cardReducer,
    cartAdd,
    products: productReducer,
    likedProducts:likedProducts
  },
  
});

export default store;
