import { configureStore } from '@reduxjs/toolkit'
import productSlice from './productSlice'
import categorySlice from './categorySlice'

export const store = configureStore({
  reducer: {
    products:productSlice,
    categories:categorySlice,
  },
})