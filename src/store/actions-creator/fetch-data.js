import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchData = createAsyncThunk("data/fetchData", async () => {
  try {
    const endURL = "https://fakestoreapi.com/products";
    const response = await fetch(endURL);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("Error", err);
  }
});

export default fetchData;
