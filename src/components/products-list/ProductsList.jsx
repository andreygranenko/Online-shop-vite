import {Link} from "react-router-dom";
import './products-list.sass';
import {useEffect} from "react";
import {supabase} from "../../client.js";

// eslint-disable-next-line react/prop-types
const ProductsList = ({products, setProducts}) => {

  useEffect(() => {
    // dispatch(fetchProducts());
    productsFetch();
  }, []);

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
      {products.map(({id, title, alt, price, img_url}) => {
        return (
            <div key={id} className="card" style={{"width": "13rem"}}>
              <div className={'img-wrap'}>
                <img className="card-img-top" src={img_url} alt={alt}/>
              </div>
                <div className="card-body">
                  <h5 className="card-title">{title.length > 20 ? title.slice(0, 28) + '...' : title}</h5>
                  <p className="card-text">{price}$</p>
                  <Link to={`categorijas/${title}`} className="btn btn-primary">Add to cart </Link>
                </div>
            </div>
        )
      })}
    </div>
  )
}

export default ProductsList;