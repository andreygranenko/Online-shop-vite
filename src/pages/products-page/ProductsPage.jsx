import ProductsCategoriesList from "../../components/products-categories-list/ProductsCategoriesList.jsx";
import ProductsFilters from "../../components/products-filters/ProductsFilters.jsx";
import ProductsList from "../../components/products-list/ProductsList.jsx";
import './products-page.sass'
import {useState} from "react";
import {motion} from "framer-motion";

const ProductsPage = () => {
  const [products, setProducts] = useState(null);
  return (
    <motion.div
      className={'container'}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <ProductsCategoriesList/>
      <div className={'products-main'}>
        <ProductsFilters setProducts={setProducts}/>
        <ProductsList products={products} setProducts={setProducts}/>
      </div>
    </motion.div>
  )
}

export default ProductsPage;