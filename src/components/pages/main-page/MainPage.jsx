import MainExplore from "../../main-explore/MainExplore.jsx";
import Categories from "../../categories/Categories.jsx";
import {useEffect, useState} from "react";
import {supabase} from "../../../client.js";

const MainPage = () => {



  const [ setProducts] = useState([])
  async function fetchProducts() {
    const {data} = await supabase
      .from('product')
      .select()
    setProducts(data)
    console.log("data:", data)
  }

  useEffect(() => {
    fetchProducts()
  }, []);

  return (
    <>
      <MainExplore/>
      <Categories/>
    </>
  )
}

export default MainPage;