import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { status: "", data: [] },
  reducers: {
    addToCart(state, action) {
      state.status = "completed";
      state.data.push(action.payload);
    },
    removeCart(state, action) {
      state.data = state.data.filter((item) => item.id !== action.payload);
      return state;
    },
  },
});

export const { addToCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
