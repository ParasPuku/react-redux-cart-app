import { createSlice } from "@reduxjs/toolkit";
import fetchData from "../actions-creator/fetch-data";

const dataSlice = createSlice({
  name: "data",
  initialState: { loading: false, error: null, data: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.data = null;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.data = null;
    });
  },
});

export const { addToCart, removeCart } = dataSlice.actions;

export default dataSlice.reducer;
