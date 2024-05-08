import './App.css'
import React, {useEffect, useState} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./components/pages/error-page/errorPage.jsx";
import ProductsPageRoute from "./routes/ProductsPageRoute.jsx";
import SignInForm from "./components/auth/SignInForm.jsx";
import SignUpForm from "./components/auth/SignUpForm.jsx";
import Homepage from "./Homepage.jsx";
import {Provider} from "react-redux";
import {store} from "./store/index.jsx";
import Root from "./routes/root.jsx";
import {supabase} from './client.js';
import BlogPage from "./components/pages/blog-page/BlogPage.jsx";
import FaqPage from "./components/pages/faq-page/faqPage.jsx";
import ContactPage from "./components/pages/contact-page/ContactPage.jsx";

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
    },
    {
      path: '/blogs',
      element: <BlogPage/>
    },
    {
      path: 'faq',
      element: <FaqPage/>
    },
    {
      path: 'kontakti',
      element: <ContactPage/>
    }
  ]);



  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
