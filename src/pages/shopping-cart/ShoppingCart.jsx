import Cart from '../../../public/cart-1.svg';
import CartItems from "../../components/cart-items/CartItems.jsx";
import { supabase } from "../../client.js";
import { useEffect, useState } from "react";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const fetchCartItems = async () => {
    let { data: shopping_cart, error: cartError } = await supabase
      .from('shopping_cart')
      .select('product_id, product_id.count()')
      .eq('user_id', JSON.parse(sessionStorage.getItem('token')).user.id);

    if (cartError) {
      console.error(cartError);
      return;
    }
    console.log(shopping_cart)
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
          <CartItems cartItems={cartItems}/>
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

          <button className={'btn btn-primary w-full'}>Procced to checkout</button>
        </div>
      </div>

    </div>
  );
}

export default ShoppingCart;
