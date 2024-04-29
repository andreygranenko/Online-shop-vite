import './App.css'
import React, {useEffect, useState} from "react";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import ErrorPage from "./components/pages/error-page/errorPage.jsx";
import ProductsPageRoute from "./routes/ProductsPageRoute.jsx";
import SignInForm from "./SignInForm.jsx";
import SignUpForm from "./SignUpForm.jsx";
import Homepage from "./Homepage.jsx";
import {Provider} from "react-redux";
import {store} from "./store/index.jsx";
import Root from "./routes/root.jsx";

function App() {
  const [token, setToken] = useState(null);
  const [router, setRouter] = useState(null);

  useEffect(() => {
    const storedToken = sessionStorage.getItem('token');
    if (storedToken) {
      setToken(JSON.parse(storedToken));
    }
  }, []);

  useEffect(() => {
    if (token !== null) {
      const newRouter = createBrowserRouter([
        {
          path: '/',
          element: <Root/>,
          errorElement: <ErrorPage/>,
        },
        {
          path: '/produkti',
          element: <ProductsPageRoute/>
        },
        {
          path: '/login',
          element: <SignInForm setToken={setToken}/>
        },
        {
          path: '/register',
          element: <SignUpForm/>
        },
        {
          path: '/account',
          element: token ? <Homepage token={token}/> : <Navigate to={'/login'}/>
        }
      ]);
      setRouter(newRouter);
    }
  }, [token]);

  if (!router) return null;

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
