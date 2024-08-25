import Cart from '../../../public/cart-1.svg';
import CartItems from "../../components/cart-items/CartItems.jsx";
import { supabase } from "../../client.js";
import {useEffect, useState} from "react";
import {useCart} from "../../components/cart-context/CartContext.jsx";

const ShoppingCart = () => {
  const {cartItems, setCartItems} = useCart();
  const [cartItemsState, setCartItemsState] = useState(cartItems);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setCartItemsState(cartItems);
  }, [cartItems]);


  const onSave = async () => {
    setLoading(true);
    const newCartItems = [];
    const productsToDelete = [];
    cartItemsState.forEach((item, index) => {
      const newCount = item.count;
      const oldCount = cartItems[index].count;
      if (newCount !== oldCount) {
        if (newCount > oldCount) {
          for (let i = 0; i < newCount - oldCount; i++) {
            newCartItems.push({
              product_id: item.product.id,
              user_id: JSON.parse(sessionStorage.getItem('token')).user.id
            })
          }
        } else if (newCount < oldCount) {
          productsToDelete.push({product_id: item.product_id, count: oldCount - newCount});
        } else if (newCount === 0) {
          productsToDelete.push({product_id: item.product_id, count: oldCount});
        }
      }
    });

    const { data, error } = await supabase
      .from('shopping_cart')
      .insert(newCartItems)
      .select()

    if (error) {
      console.error(error);
      return;
    }

    console.log('products to delete', productsToDelete);

    const results = await Promise.all(productsToDelete.map(async (product) => {
      console.log('product count', product.count);
      console.log('product id', product.product_id);
      console.log('trying');


      let { data: shopping_cart, error } = await supabase
        .from('shopping_cart')
        .select('id')
        .eq('product_id', product.product_id)
        .eq('user_id', JSON.parse(sessionStorage.getItem('token')).user.id)
        .order('created_at', {ascending: false})
        .limit(product.count);


      if (error) {
        console.error(error);
        return;
      }
      console.log('data from db', shopping_cart);


      const response = await supabase
        .from('shopping_cart')
        .delete()
        .in('id', shopping_cart.map(item => item.id))
        .eq('user_id', JSON.parse(sessionStorage.getItem('token')).user.id)
        .select()


      console.log('deleted', response);

      return response;



    }));

    console.log(results);

    fetchCartItems().then(() => {
      setLoading(false);
    });
  }

  const handleCheckout = async () => {

  }

  const fetchCartItems = async () => {
    let { data: shopping_cart, error: cartError } = await supabase
      .from('shopping_cart')
      .select('product_id, product_id.count()')
      .eq('user_id', JSON.parse(sessionStorage.getItem('token')).user.id);

    if (cartError) {
      console.error(cartError);
      return;
    }
    if (shopping_cart.length > 0) {
      const productIds = shopping_cart.map(item => item.product_id);

      let { data: products, error: productError } = await supabase
        .from('product')
        .select('*')
        .in('id', productIds);

      if (productError) {
        console.error(productError)
        console.error(productError.message);
        return;
      }

      const cartItemsWithProducts = shopping_cart.map(item => ({
        ...item,
        product: products.find(product => product.id === item.product_id)
      }));

      setCartItems(cartItemsWithProducts);
    } else {
      setCartItems([]);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <div className={'container py-8'}>
      <div className={'flex justify-center'}>
        <img src={Cart} alt="cart"/>
      </div>
      <div className={'flex gap-10 justify-between items-start'}>
        <div className={'w-[60%]'}>
          <CartItems cartItemsState={cartItemsState} setCartItemsState={setCartItemsState} cartItems={cartItems}/>
          {loading ?
            <button className="btn btn-info w-44 mt-5 btn-square">
              <span className="loading loading-spinner"></span>
            </button> :
            <button onClick={onSave} className="btn btn-info text-base-300 mt-5">Save product amount</button>}

        </div>
        <div className={'w-[30%] bg-base-100 shadow-xl p-5 rounded-xl'}>
          <h3 className={'text-3xl font-bolder'}>Payment Details</h3>
          <div className={'my-5'}>
            <div className={'flex justify-between '}><div>Subtotal</div> {cartItems.reduce((accum, curr) => {
              return accum + curr.product.price * curr.count;
            }, 0)} €</div>
            <div className={'flex justify-between  '}><div>Discount</div> 0 €</div>
            <hr className={'my-2'}/>
            <div className={'flex justify-between font-bold'}><div>Total</div> {cartItems.reduce((accum, curr) => {
              return accum + curr.product.price * curr.count;
            }, 0)} €</div>
          </div>

          <button className={'btn btn-primary w-full'}>Proceed to checkout</button>
        </div>
      </div>

    </div>
  );
}

export default ShoppingCart;
