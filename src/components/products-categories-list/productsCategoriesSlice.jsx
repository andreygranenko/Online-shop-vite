import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  productsCategories: [],
  productsCategoriesLoadingStatus: 'idle'
}

export const fetchProductsCategories = createAsyncThunk(
  'productsCategories/fetchProductsCategories',
  async () => {
    const data = await axios.get("http://localhost:3001/products-categories");
    return data.data;
  }
);

const productsCategoriesSlice = createSlice({
  name: 'productsCategories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsCategories.pending, (state) => { state.productsCategoriesLoadingStatus = 'loading'})
      .addCase(fetchProductsCategories.fulfilled, (state, action) => {
        state.productsCategories = action.payload;
        state.productsCategoriesLoadingStatus = 'idle';
      })
      .addCase(fetchProductsCategories.rejected, (state) => { state.productsCategoriesLoadingStatus = 'error'; })
      .addDefaultCase(state => state)
  }
});

const {actions, reducer} = productsCategoriesSlice;

export default reducer;