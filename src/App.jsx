import './App.css'
import React, {useEffect, useState} from "react";
import { BrowserRouter as Router} from "react-router-dom";

import {Provider} from "react-redux";
import {store} from "./store/index.jsx";
import {supabase} from './client.js';

import AnimatedRoutes from "./components/animated-routes/AnimatedRoutes.jsx";
import Navbar from "./components/nav-bar/NavBar.jsx";
import Footer from "./components/footer/Footer.jsx";
import {CartProvider} from "./components/cart-context/CartContext.jsx";

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



  return (
    <Provider store={store}>
      <CartProvider>
        <Router >
          <Navbar setSession={setSession} session={session}/>
          <AnimatedRoutes session={session} setSession={setSession}/>
          <Footer/>
        </Router>
      </CartProvider>
      {/*<RouterProvider router={router} />*/}
    </Provider>
  );
}

export default App;
