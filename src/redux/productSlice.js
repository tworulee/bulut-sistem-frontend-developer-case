import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
};

const PRODUCTS_API = "https://dummyjson.com/products?limit=200";

export const getProducts = createAsyncThunk("getproducts", async () => {
  const response = await fetch(PRODUCTS_API);
  const data = await response.json();
  console.log(data.products);

  return data.products;
});

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.productsStatus = STATUS.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.productsStatus = STATUS.SUCCESS;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state) => {
        state.productsStatus = STATUS.FAIL;
      });
  },
});

export default productSlice.reducer;
