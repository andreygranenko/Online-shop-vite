import {Field, Form, Formik} from "formik";
import './products-filters.sass';


const handleSubmit = (values) => {

}
const ProductsFilters = () => {



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
          onSubmit={(values) =>  console.log(values)}>
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