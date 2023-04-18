import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./reducers/dataSlice";
import cartReducer from "./reducers/cartSlice";
import toastReducer from "./reducers/toastSlice";
import wishlistReducer from "./reducers/wishlistSlice";

const store = configureStore({
  reducer: {
    data: dataReducer,
    cart: cartReducer,
    toast: toastReducer,
    wishlist: wishlistReducer,
    devtools: true,
  },
});

export default store;
