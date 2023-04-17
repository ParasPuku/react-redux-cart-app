import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./reducers/dataSlice";
import cartReducer from "./reducers/cartSlice";
import toastReducer from "./reducers/toastSlice";

const store = configureStore({
  reducer: {
    data: dataReducer,
    cart: cartReducer,
    toast: toastReducer,
    devtools: true,
  },
});

export default store;
