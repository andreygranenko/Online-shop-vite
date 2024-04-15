import './App.css'
import MainPage from "./components/pages/main-page/MainPage.jsx";
import {useState} from "react";
import {supabase} from "./client.js";

function App() {

  const [products, setProducts] = useState([])
  async function fetchProducts() {
    const {data} = await supabase
      .from('products')
      .select()
      .setProducts(data)
  }

  return (
    <>
      <MainPage/>
    </>
  )
}

export default App
