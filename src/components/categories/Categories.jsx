import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCategories} from "./categoriesSlice.jsx";
import {store} from '../../store/index.jsx';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  console.log(store.getState());
  return (
    <div>

    </div>
  );
}

export default Categories;