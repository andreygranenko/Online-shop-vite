import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {store} from './store/index.jsx'


import {Provider} from "react-redux";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./routes/root.jsx";
import ErrorPage from "./components/pages/error-page/errorPage.jsx";
import ProductsPageRoute from "./routes/ProductsPageRoute.jsx";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: '/produkti',
    element: <ProductsPageRoute/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      {/*<App />*/}
      <RouterProvider router={router} />
    </Provider>,
)
