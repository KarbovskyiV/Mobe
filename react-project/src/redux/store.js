// store.js
import { configureStore } from "@reduxjs/toolkit";
import compareReducer from "./slices/compareSlice";
import cardReducer from "./slices/cardSlice";

const store = configureStore({
  reducer: {
    compare: compareReducer,
    cardReducer,
  },
});

export default store;
