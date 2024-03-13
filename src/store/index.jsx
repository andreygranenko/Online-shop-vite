import {configureStore} from "@reduxjs/toolkit";
import categories from "../components/categories/categoriesSlice.jsx";
import process from "process";
export const store = configureStore({
  reducer: {categories},
  devTools: process.env.NODE_ENV !== 'production'
});

console.log(store.getState());