import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCategories} from "./categoriesSlice.jsx";
import {store} from '../../store/index.jsx';
import CategoriesItem from "../categories-item/CategoriesItem.jsx";
import './categories.sass';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.categories);
  const categoriesLoadingStatus = useSelector(state => state.categories.categoriesLoadingStatus);
  console.log(categories);
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  console.log(store.getState());

  if (categoriesLoadingStatus === 'loading') {
    return <h1>Loading...</h1>
  }
  if (categoriesLoadingStatus === 'error') {
    return <h1>Error</h1>
  }

  if (!categories) {
    return <h1>No categories</h1>
  }

  return (
    <div className={'container'}>
      <div className={'categories-wrap'}>
        {categories.map(({id, title, alt, img}) => {
          return <CategoriesItem key={id} title={title} img={img} alt={alt}/>
        })}

      </div>
    </div>
  );
}

export default Categories;