import {useEffect, useState} from "react";
import CategoriesItem from "../categories-item/CategoriesItem.jsx";
import './categories.sass';
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {supabase} from "../../client.js";
const Categories = () => {

  const [categories, setCategories] = useState(null)
  const [categoriesLoadingStatus, setCategoriesLoadingStatus] = useState('loading')


  useEffect(() => {
    categoriesFetch();
  }, []);

  const categoriesFetch = async () => {
    const {data, error} = await supabase
      .from('categories')
      .select()
    setCategories(data)
    if (error) {
      setCategoriesLoadingStatus('error')
    }
    setCategoriesLoadingStatus('success')
    console.log("data:", data)
  }



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
            <Link key={id} to={`kategorijas/${route}`}>
              <CategoriesItem title={title} img={img} alt={alt}/>
            </Link>
          )
        })}

      </div>
    </motion.div>
  );
}

export default Categories;