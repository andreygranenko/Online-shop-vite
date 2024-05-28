import './App.css'
import React, {useEffect, useState} from "react";
import { BrowserRouter as Router} from "react-router-dom";

import {Provider} from "react-redux";
import {store} from "./store/index.jsx";
import {supabase} from './client.js';

import AnimatedRoutes from "./components/animated-routes/AnimatedRoutes.jsx";
import Navbar from "./components/nav-bar/NavBar.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    const sessionFromStorage = JSON.parse(sessionStorage.getItem('token'));
    if (sessionFromStorage) {
      setSession(sessionFromStorage);
    } else {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session);
        sessionStorage.setItem('token', JSON.stringify(session));
      });
      supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session);
        sessionStorage.setItem('token', JSON.stringify(session));
      });
    }
  }, []);


  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Root/>,
  //     errorElement: <ErrorPage/>,
  //   },
  //   {
  //     path: '/produkti',
  //     element: <ProductsPageRoute/>
  //   },
  //   {
  //     path: '/login',
  //     element: <SignInForm session={session} setSession={setSession}/>
  //   },
  //   {
  //     path: '/register',
  //     element: <SignUpForm/>
  //   },
  //   {
  //     path: '/account',
  //     element: <Homepage setSession={setSession} session={session}/>
  //   },
  //   {
  //     path: '/blogs',
  //     element: <BlogPage/>
  //   },
  //   {
  //     path: 'faq',
  //     element: <FaqPage/>
  //   },
  //   {
  //     path: 'kontakti',
  //     element: <ContactPage/>
  //   }
  // ]);



  return (
    <Provider store={store}>
      <Router >
        <Navbar session={session}/>
        <AnimatedRoutes session={session} setSession={setSession}/>
        <Footer/>
      </Router>
      {/*<RouterProvider router={router} />*/}
    </Provider>
  );
}

export default App;
