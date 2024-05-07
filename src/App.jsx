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
  const [session, setSession] = useState(null)
  const [router, setRouter] = useState(null);


  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, []);

  useEffect(() => {

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
        element: <SignInForm token={token} setToken={setToken}/>
      },
      {
        path: '/register',
        element: <SignUpForm/>
      },
      {
        path: '/account',
        element: <Homepage token={token}/>
      }
    ]);
    setRouter(newRouter);
  }, [token]);



  if (!router)
  {
    return <h1>test</h1>
  }

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
