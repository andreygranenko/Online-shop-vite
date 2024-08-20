import {Link} from "react-router-dom";
import './products-list.sass';
import {useEffect, useState} from "react";
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
    // console.log("data:", data)
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
      {/* eslint-disable-next-line react/prop-types */}
      {products.map(({id, title, alt, price, img_url, discount}) => {
        return (
          <ProductCard
            key={id}
            id={id}
            title={title}
            alt={alt}
            price={price}
            img_url={img_url}
            discount={discount}/>
        )
      })}
    </div>
  )
}

// eslint-disable-next-line react/prop-types
const ProductCard = ({ id, title, alt, price, img_url, discount}) => {
  const [loading, setLoading] = useState(true);


  return (
    <div key={id} className="card card-compact w-60 bg-base-100 shadow-xl">
      <figure>
        {loading && <div className="skeleton w-32 h-32"></div>}
        <img
          src={img_url}
          alt={alt}
          onLoad={() => setLoading(false)}
          style={{ display: loading ? 'none' : 'block' }}/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          {discount ? <div className="badge badge-secondary">SALE</div> : null}
        </h2>
        <p>{price}$</p>
        <div className="card-actions justify-end">
          <Link to={`/shop-cart`}><button className="btn btn-primary">Buy Now</button></Link>
        </div>
      </div>
    </div>
  )
}

export default ProductsList;