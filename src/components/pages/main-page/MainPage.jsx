import MainExplore from "../../main-explore/MainExplore.jsx";
import Categories from "../../categories/Categories.jsx";
import {useEffect, useState} from "react";
import {supabase} from "../../../client.js";
import AnnotationViewer from "../../../AnnotationViewer.jsx";

const MainPage = () => {



  const [ products, setProducts] = useState([])
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
      <AnnotationViewer/>
    </>
  )
}

export default MainPage;