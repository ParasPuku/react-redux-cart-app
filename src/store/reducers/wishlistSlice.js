import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: { wishlistStatus: "", wishlistData: [] },
  reducers: {
    addToWishList(state, action) {
      state.wishlistStatus = "wishlisted";
      state.wishlistData.push(action.payload);
    },
    removeFromWishList(state, action) {
      state.wishlistData = state.wishlistData.filter(
        (item) => item.id !== action.payload
      );
      return state;
    },
  },
});
export const { addToWishList, removeFromWishList } = wishlistSlice.actions;
export default wishlistSlice.reducer;
