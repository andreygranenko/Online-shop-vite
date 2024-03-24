import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
  categories: [],
  categoriesLoadingStatus: 'idle'
}

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const data = await axios.get("http://localhost:3001/categories");
    return data.data;
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
        console.log(action.payload);
        state.categories = action.payload;
        state.categoriesLoadingStatus = 'idle';
      })
      .addCase(fetchCategories.rejected, (state) => { state.categoriesLoadingStatus = 'error'; })
      .addDefaultCase(state => state)
  }
});

const {actions, reducer} = categoriesSlice;

export default reducer;

console.log(actions);