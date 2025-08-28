import { NavLink } from 'react-router-dom';

import styles from './ProductCard.module.css';

import CartControl from '../CartControl/CartControl';

export default function ProductCard({ product }) {
  return (
    <div className={styles.productCard}>
      <NavLink to={`/products/${product.id}`} className={styles.imgContainer}>
        <img src={product.thumbnail} alt="" />
      </NavLink>
      <div className={styles.productDetails}>
        <div className={styles.heading}>
          <div className={styles.title}>{product.title}</div>
          <div className={styles.price}>$ {product.price}</div>
        </div>
        {product.brand && <div className={styles.brand}>{product.brand}</div>}
        <div className={styles.description}>{product.description}</div>
      </div>
      <CartControl product={product} />
    </div>
  );
}
