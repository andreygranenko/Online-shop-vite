import {Field, Form, Formik} from "formik";
import './products-filters.sass';
import {supabase} from "../../client";


// eslint-disable-next-line react/prop-types
const ProductsFilters = ({setProducts}) => {
  // const products = useSelector(state => state.productsList.products);
  const handleSubmit = async (values, { resetForm }) => {
    let data, error;

    if (!values.priceFrom && !values.priceTo && !values.discount) {
      ({ data, error } = await supabase.from('product').select());
    } else {
      ({ data, error } = await supabase
        .from('product')
        .select()
        .gte('price', values.priceFrom ? values.priceFrom : 0)
        .lte('price', values.priceTo ? values.priceTo : 9999)
        .eq('discount', values.discount));
    }

    if (error) {
      console.log('error', error.message);
      throw error;
    }
    setProducts(data);
    resetForm();
  };


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
          <Form className={''}>
            <div id={'price'}>
              <h4 className={'py-5'}>Price</h4>
              <div className={'price-input-wrap'}>
                <Field className={'input input-bordered'} placeholder={'min.'} type={'text'} name={'priceFrom'}/>
                <Field className={'input input-bordered'} placeholder={'max.'} type={'text'} name={'priceTo'}/>
              </div>
            </div>
            <div className={'my-2'} id={'discount'}>
              <h4>Discount</h4>
              <Field className={'checkbox'} type={'checkbox'} name={'discount'} />
            </div>
            <button className={'btn btn-primary'} type={'submit'}>Filter</button>
          </Form>
        </Formik>
      </aside>
    </div>
  )
}

export default ProductsFilters;