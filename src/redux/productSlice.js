import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";


const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
  productDetail: [],
  productDetailStatus: STATUS.IDLE,
};

const PRODUCTS_API = "https://dummyjson.com/products?limit=200";

//Bütün ürünleri cekme
export const getProducts = createAsyncThunk("getproducts", async () => {
  const response = await fetch(PRODUCTS_API);
  const data = await response.json();
  return data.products;
});

//ürünlerin detayını cekme
export const getDetailProduct = createAsyncThunk(
  "getdetailproduct",
  async (id) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    return data;
  }
);

//kategoriye gore urun cekme
export const getCategoryProducts = createAsyncThunk(
  "getcategoryproducts",
  async (category) => {
    const response = await fetch(
      `https://dummyjson.com/products/category/${category}`
    );
    const data =await response.json();
    return data.products;
  }
);

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
      })
      .addCase(getDetailProduct.pending, (state) => {
        state.productDetailStatus = STATUS.LOADING;
      })
      .addCase(getDetailProduct.fulfilled, (state, action) => {
        state.productDetailStatus = STATUS.SUCCESS;
        state.productDetail = action.payload;
      })
      .addCase(getDetailProduct.rejected, (state) => {
        state.productDetailStatus = STATUS.FAIL;
      })
      .addCase(getCategoryProducts.pending, (state) => {
        state.productsStatus = STATUS.LOADING;
      })
      .addCase(getCategoryProducts.fulfilled, (state, action) => {
        state.productsStatus = STATUS.SUCCESS;
        state.products = action.payload;
      })
      .addCase(getCategoryProducts.rejected, (state) => {
        state.productsStatus = STATUS.FAIL;
      });
  },
});

export default productSlice.reducer;
