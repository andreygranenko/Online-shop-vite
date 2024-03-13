import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
  categories: [],
  categoriesLoadingStatus: 'idle'
}

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  () => {
    return axios.get("http://localhost:3001/categories");
  }
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => { state.categoriesLoadingStatus = 'loading'})
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload.data;
        state.categoriesLoadingStatus = 'idle';
      })
      .addCase(fetchCategories.rejected, (state) => { state.categoriesLoadingStatus = 'error'; })
      .addDefaultCase(state => state)
  }
});

const {actions, reducer} = categoriesSlice;

export default reducer;

console.log(actions);