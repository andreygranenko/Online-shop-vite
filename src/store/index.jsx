import {configureStore} from "@reduxjs/toolkit";
import categories from "../components/categories/categoriesSlice.jsx";
import process from "process";
import productsCategories from "../components/products-categories-list/productsCategoriesSlice.jsx";
export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  reducer: {
    categories,
    productsCategories
  },
  devTools: process.env.NODE_ENV !== 'production'
});

// console.log(store.getState());