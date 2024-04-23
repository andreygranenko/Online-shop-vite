import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import './products-list.sass';
import {useEffect, useState} from "react";
import {supabase} from "../../client.js";
const ProductsList = () => {

  // const products = useSelector(state => state.productsList.products);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(fetchProducts());
    productsFetch();
  }, []);

  const [products, setProducts] = useState();
  const productsFetch = async () => {
    const {data} = await supabase
      .from('product')
      .select()
    setProducts(data)
    console.log("data:", data)
  }

  if (!products) {
    return (
      <div style={{margin: '200px auto 0 auto'}} className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
    )
  }

  return (
    <div className={'products-wrap'}>
      {products.map(({id, title, alt, img_url}) => {
        return (
            <div key={id} className="card" style={{"width": "13rem"}}>
              <img className="card-img-top" src={img_url} alt={alt}/>
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