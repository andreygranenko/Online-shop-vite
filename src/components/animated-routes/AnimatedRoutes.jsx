import { Route, Routes, useLocation} from "react-router-dom";
import Root from "../../routes/root.jsx";
import ErrorPage from "../pages/error-page/errorPage.jsx";
import ProductsPageRoute from "../../routes/ProductsPageRoute.jsx";
import SignInForm from "../auth/SignInForm.jsx";
import SignUpForm from "../auth/SignUpForm.jsx";
import Homepage from "../../Homepage.jsx";
import BlogPage from "../pages/blog-page/BlogPage.jsx";
import FaqPage from "../pages/faq-page/faqPage.jsx";
import ContactPage from "../pages/contact-page/ContactPage.jsx";
import React from "react";
import {AnimatePresence} from "framer-motion";

// eslint-disable-next-line react/prop-types
const AnimatedRoutes = ({session, setSession}) => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Root/>} errorElement={<ErrorPage/>}/>
        <Route path="/produkti" element={<ProductsPageRoute/>}/>
        <Route path="/login" element={<SignInForm session={session} setSession={setSession}/>}/>
        <Route path="/register" element={<SignUpForm/>}/>
        <Route path="/account" element={<Homepage setSession={setSession} session={session}/>}/>
        <Route path="/blogs" element={<BlogPage/>}/>
        <Route path="/faq" element={<FaqPage/>}/>
        <Route path="/kontakti" element={<ContactPage/>}/>
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;