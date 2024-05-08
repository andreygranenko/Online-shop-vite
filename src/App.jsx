import './App.css'
import React, {useEffect, useState} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./components/pages/error-page/errorPage.jsx";
import ProductsPageRoute from "./routes/ProductsPageRoute.jsx";
import SignInForm from "./SignInForm.jsx";
import SignUpForm from "./SignUpForm.jsx";
import Homepage from "./Homepage.jsx";
import {Provider} from "react-redux";
import {store} from "./store/index.jsx";
import Root from "./routes/root.jsx";
import {supabase} from './client.js';

function App() {
  const [session, setSession] = useState(null)


  useEffect(() => {
    const sessionFromStorage = JSON.parse(sessionStorage.getItem('token'));
    if (sessionFromStorage) {
      setSession(sessionFromStorage);
    } else {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session);
      });
      supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session);
      });
    }
  }, []);


  const router = createBrowserRouter([
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
      element: <SignInForm session={session} setSession={setSession}/>
    },
    {
      path: '/register',
      element: <SignUpForm/>
    },
    {
      path: '/account',
      element: <Homepage setSession={setSession} session={session}/>
    }
  ]);



  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
