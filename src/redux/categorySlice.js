import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};
//Api de bulunan kategorileri cekme
export const getCategories = createAsyncThunk("category", async () => {
  const response = await fetch("https://dummyjson.com/products/categories");
  const data = await response.json();
  const names = data.map((category) => category.name);
  
  return names;
});

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export default categorySlice.reducer;
