import './App.css'
import NavBar from "./components/nav-bar/NavBar.jsx";
import MainExplore from "./components/main-explore/MainExplore.jsx";
import Categories from "./components/categories/Categories.jsx";
import ProductSlider from "./components/product-slider/ProductSlider.jsx";

function App() {

  return (
    <>
      <NavBar/>
      <MainExplore/>
      <Categories/>
      <ProductSlider/>
    </>
  )
}

export default App
