import { useState } from 'react';
import { Form, useFetcher } from 'react-router-dom';

import styles from './CartControl.module.css';

import Button from '../Button/Button';

export function QuantityControl({ initialValue = 1 }) {
  const [value, setValue] = useState(initialValue);

  function increase() {
    setValue((value) => value + 1);
  }

  function decrease() {
    if (value === 1) return;
    setValue((value) => value - 1);
  }

  return (
    <>
      <button type="button" className={styles.qtyBtn} onClick={decrease}>
        -
      </button>
      <input
        type="tel"
        name="quantity"
        value={value}
        className={styles.input}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button type="button" className={styles.qtyBtn} onClick={increase}>
        +
      </button>
    </>
  );
}

export default function CartControl({ product }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form
      className={styles.cartControlForm}
      method="post"
      action="/cart/add"
    >
      <input type="hidden" name="id" value={product.id} />
      <input type="hidden" name="price" value={product.price} />
      <QuantityControl />
      <Button type="submit" className={styles.flexGrow}>
        Add to cart
      </Button>
    </fetcher.Form>
  );
}
