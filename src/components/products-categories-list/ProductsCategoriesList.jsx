import './products-categories-list.sass';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchProductsCategories} from "./productsCategoriesSlice.jsx";
import {Link} from "react-router-dom";

const ProductsCategoriesList = () => {
  const productsCategories = useSelector(state => state.productsCategories.productsCategories);
  const productsCategoriesLoadingStatus = useSelector(state => state.productsCategories.productsCategoriesLoadingStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductsCategories());
  }, []);

  if (productsCategoriesLoadingStatus === 'loading') {
    return <h2>Loading...</h2>
  }
  if (productsCategoriesLoadingStatus === 'error') {
    return <h3>Error</h3>
  }

  if (!productsCategories) {
    return <h2>No categories</h2>
  }

  return (
    <div className={'products-icons'}>
      {
        productsCategories.map(({id, title, img, alt, route}) => {
        return (
          <Link key={id} to={`/kategorijas/${route}`}>
            <div  className="products-icons-item">
              <img src={img} alt={alt} className="products-icons-item-img"/>
              <span className="products-icons-item-title">
          {title}
            </span>
            </div>
          </Link>

        )
        })
      }

    </div>
  )
}

export default ProductsCategoriesList;