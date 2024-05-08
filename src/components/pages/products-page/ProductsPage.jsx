import ProductsCategoriesList from "../../products-categories-list/ProductsCategoriesList.jsx";
import ProductsFilters from "../../products-filters/ProductsFilters.jsx";
import ProductsList from "../../products-list/ProductsList.jsx";
import './products-page.sass'
import {useState} from "react";
const ProductsPage = () => {
  const [products, setProducts] = useState(null);
  return (
    <div className={'container'}>
      <ProductsCategoriesList/>
      <div className={'products-main'}>
        <ProductsFilters setProducts={setProducts}/>
        <ProductsList products={products} setProducts={setProducts}/>
      </div>
    </div>
  )
}

export default ProductsPage;