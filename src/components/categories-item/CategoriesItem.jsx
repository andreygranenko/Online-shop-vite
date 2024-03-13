const CategoriesItem = (props) => {
  return (
    <div className="categories_item">
      <img src={props.img} alt={props.alt}/>
      <h3>{props.title}</h3>
    </div>
  )
}

export default CategoriesItem;