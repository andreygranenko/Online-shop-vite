import axios from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productsLoadingStatus: 'idle'
}

export const fetchProducts = createAsyncThunk(
'products/fetchProducts',
  async () => {
    const data = await axios.get("http://localhost:3001/products");
    return data.data;
  }
);

const productsListSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => { state.productsLoadingStatus = 'loading'})
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.productsLoadingStatus = 'idle';
      })
      .addCase(fetchProducts.rejected, (state) => { state.productsLoadingStatus = 'error'; })
      .addDefaultCase(state => state)
  }
});

const {actions, reducer} = productsListSlice;
export default reducer;