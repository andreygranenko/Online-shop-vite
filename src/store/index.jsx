import {configureStore} from "@reduxjs/toolkit";
import categories from "../components/categories/categoriesSlice.jsx";
import process from "process";
import productsCategories from "../components/products-categories-list/productsCategoriesSlice.jsx";
import productsList from '../components/products-list/productsListSlice.jsx';
export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  reducer: {
    categories,
    productsCategories,
    productsList
  },
  devTools: process.env.NODE_ENV !== 'production'
});

console.log(store.getState());