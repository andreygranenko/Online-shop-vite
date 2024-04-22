import {Field, Form, Formik} from "formik";
import './products-filters.sass';
import {useSelector} from "react-redux";
import axios from "axios";



const ProductsFilters = () => {
  const products = useSelector(state => state.productsList.products);

  const handleSubmit =  async (values) => {
    await fetch('http://localhost:3001/products').then(response => response.json());
    const filteredProducts = products.filter(product => {
      if (values.priceFrom && values.priceTo) {
        return product.price >= values.priceFrom && product.price <= values.priceTo;
      }
      if (values.priceFrom) {
        return product.price >= values.priceFrom;
      }
      if (values.priceTo) {
        return product.price <= values.priceTo;
      }
      if (values.discount) {
        return product.discount;
      }
    })
    for (const product of filteredProducts) {
      await axios.put(`http://localhost:3001/products/${product.id}`, product);

    }

  }

  return (
    <div >
      <aside>
        <h2>Filters</h2>
        <Formik
          initialValues={{
            priceFrom: '',
            priceTo: '',
            discount: false,
          }}
          onSubmit={handleSubmit}>
          <Form>
            <div id={'price'}>
              <h4>Price</h4>
              <div className={'price-input-wrap'}>
                <Field placeholder={'min.'} type={'text'} name={'priceFrom'}/>
                <Field placeholder={'max.'} type={'text'} name={'priceTo'}/>
              </div>
            </div>
            <div id={'discount'}>
              <h4>Discount</h4>
              <Field type={'checkbox'} name={'discount'} />
            </div>
            <button className={'btn btn-primary'} type={'submit'}>Filter</button>
          </Form>
        </Formik>
      </aside>
    </div>
  )
}

export default ProductsFilters;