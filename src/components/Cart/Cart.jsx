import { useState, useEffect } from 'react';
import { useFetcher, Form, NavLink } from 'react-router-dom';

import styles from './Cart.module.css';

import cart from '../../cart';
import { fetchProduct } from '../../fetchProducts';
import { QuantityControl } from '../CartControl/CartControl';
import Button from '../Button/Button';

function CartItem({ id, quantity, closeCart }) {
  const [product, setProduct] = useState({});
  const fetcher = useFetcher();

  useEffect(() => {
    async function fetchItem() {
      const prod = await fetchProduct(id);
      setProduct(prod);
    }
    fetchItem();
  }, [id]);

  return (
    <div className={styles.cartItem}>
      <NavLink to={'/products/' + id} onClick={closeCart}>
        <img src={product.thumbnail} alt="" />
      </NavLink>
      <div className={styles.productDetails}>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.price}>$ {product.price}</div>
      </div>
      <div className={styles.control}>
        <fetcher.Form method="post" action="/cart/update">
          <input type="hidden" name="id" value={id} />
          <QuantityControl initialValue={quantity} />
          <Button type="submit">Update</Button>
        </fetcher.Form>
        <fetcher.Form method="post" action="/cart/remove">
          <input type="hidden" name="id" value={id} />
          <button className={styles.deleteButton}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>delete-outline</title>
              <path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
            </svg>
          </button>
        </fetcher.Form>
      </div>
    </div>
  );
}

export default function Cart({ isOpen, closeCart }) {
  const [cartItems, setCartItems] = useState(cart.cart);
  const [quantity, setQuantity] = useState(cart.quantity);
  const [subtotal, setSubtotal] = useState(cart.subtotal);

  useEffect(() => {
    function handleCartChange(cart) {
      setCartItems(cart);
      setQuantity(cart.reduce((sum, item) => sum + item.quantity, 0));
      setSubtotal(
        cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
      );
    }
    cart.subscribe(handleCartChange);

    return () => cart.unsubscribe(handleCartChange);
  }, []);

  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={closeCart}></div>}
      <div className={`${styles.cart} ${isOpen ? styles.open : ''}`}>
        <div className={styles.heading}>
          <button onClick={closeCart}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>chevron-left</title>
              <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
            </svg>
          </button>
          <h2>Cart ({quantity})</h2>
        </div>
        <div className={styles.cartContent}>
          {cartItems.length > 0 ? (
            cartItems.map(({ id, quantity }) => (
              <CartItem
                key={id}
                id={id}
                quantity={quantity}
                closeCart={closeCart}
              />
            ))
          ) : (
            <div className={styles.emptyState}>
              <div className={styles.emptyHeading}>Your cart is empty</div>
              <div className={styles.emptySubheading}>
                So many things and yet... no things
              </div>
              <Button to="/products" onClick={closeCart}>
                show me things
              </Button>
            </div>
          )}
        </div>
        <div className={styles.subtotal}>
          Subtotal: <span>$ {subtotal}</span>
        </div>
        <Button to="/checkout" onClick={closeCart}>
          Checkout
        </Button>
      </div>
    </>
  );
}
