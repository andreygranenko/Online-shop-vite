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
          <Link key={id} to={`categorijas/${title}`}>
            <div className="card" style={{"width": "13rem"}}>
              <img className="card-img-top" src={img} alt={alt}/>
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">Title.</p>
                  <a href="#" className="btn btn-primary">Add to cart </a>
                </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default ProductsList;