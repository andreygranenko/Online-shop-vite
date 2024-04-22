import './App.css'
import MainPage from "./components/pages/main-page/MainPage.jsx";
import {useEffect, useState} from "react";
import {supabase} from "./client.js";

function App() {


  return (
    <>
      <MainPage/>
    </>
  )
}

export default App
