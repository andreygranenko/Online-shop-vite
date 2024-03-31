import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import './products-list.sass';
import {useEffect} from "react";
import {fetchProducts} from "./productsListSlice.jsx";
const ProductsList = () => {

  const products = useSelector(state => state.productsList.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (!products) {
    return <h1>No products</h1>
  }

  return (
    <div className={'products-wrap'}>
      {products.map(({id, title, alt, img}) => {
        return (
            <div key={id} className="card" style={{"width": "13rem"}}>
              <img className="card-img-top" src={img} alt={alt}/>
                <div className="card-body">
                  <h5 className="card-title">{title.length > 20 ? title.slice(0, 28) + '...' : title}</h5>
                  <p className="card-text">Title.</p>
                  <Link to={`categorijas/${title}`} className="btn btn-primary">Add to cart </Link>
                </div>
            </div>
        )
      })}
    </div>
  )
}

export default ProductsList;