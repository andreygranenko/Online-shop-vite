import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCategories} from "./categoriesSlice.jsx";
import CategoriesItem from "../categories-item/CategoriesItem.jsx";
import './categories.sass';
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.categories);
  const categoriesLoadingStatus = useSelector(state => state.categories.categoriesLoadingStatus);
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

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
    <motion.div
      className={'container'}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <div className={'categories-wrap'}>
        {categories.map(({id, title, alt, img, route}) => {
          return (
            <Link key={id} to={`categorijas/${route}`}>
              <CategoriesItem title={title} img={img} alt={alt}/>
            </Link>
          )
        })}

      </div>
    </motion.div>
  );
}

export default Categories;