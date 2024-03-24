import './categories-item.sass';

const CategoriesItem = ({img, alt, title}) => {
  return (
    <div className="categories-item">
      <img src={img} alt={alt}/>
      <h3>{title}</h3>
    </div>
  )
}

export default CategoriesItem;