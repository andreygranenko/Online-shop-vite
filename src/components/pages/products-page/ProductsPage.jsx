import ProductsCategoriesList from "../../products-categories-list/ProductsCategoriesList.jsx";
import ProductsFilters from "../../products-filters/ProductsFilters.jsx";
import ProductsList from "../../products-list/ProductsList.jsx";
import './products-page.sass'
const ProductsPage = () => {
  return (
    <div className={'container'}>
      <ProductsCategoriesList/>
      <div className={'products-main'}>
        <ProductsFilters/>
        <ProductsList/>
      </div>
    </div>
  )
}

export default ProductsPage;