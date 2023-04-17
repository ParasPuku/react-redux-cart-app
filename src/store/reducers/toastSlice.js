import { createSlice } from "@reduxjs/toolkit";

const toastSlice = createSlice({
  name: "toast",
  initialState: {
    activeClass: "",
    isToastOpen: false,
    STATUS: "",
    MESSAGE: "",
  },
  reducers: {
    showToast(state, action) {
      state.activeClass = action.payload.activeClass;
      state.isToastOpen = action.payload.isToastOpen;
      state.STATUS = action.payload.STATUS;
      state.MESSAGE = action.payload.MESSAGE;
    },
    hideToast(state, action) {
      state.activeClass = action.payload.activeClass;
      state.isToastOpen = action.payload.isToastOpen;
      state.STATUS = action.payload.STATUS;
      state.MESSAGE = action.payload.MESSAGE;
    },
  },
});

export const { showToast, hideToast } = toastSlice.actions;
export default toastSlice.reducer;
