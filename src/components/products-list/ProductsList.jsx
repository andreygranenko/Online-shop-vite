import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import './products-list.sass';
const ProductsList = () => {

  const categories = useSelector(state => state.categories.categories);

  return (
    <div className={'products-wrap'}>
      {categories.map(({id, title, alt, img, route}) => {
        return (
          <Link key={id} to={`categorijas/${route}`}>
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