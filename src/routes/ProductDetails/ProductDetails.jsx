import { useLoaderData } from 'react-router-dom';
import { fetchProduct } from '../../fetchProducts';

import styles from './ProductDetails.module.css';

import ProductImages from '../../components/ProductImages/ProductImages';
import CartControl from '../../components/CartControl/CartControl';
import Reviews from '../../components/Reviews/Reviews';

async function loader({ params }) {
  const productId = parseInt(params.productId, 10);
  const product = await fetchProduct(productId);
  return product;
}

async function action({ request }) {
  const formData = await request.formData();
}

export default function ProductDetails() {
  const product = useLoaderData();

  return (
    <div className={styles.productGrid}>
      <ProductImages images={product.images} />
      <div className={styles.productDetails}>
        <h1 className={styles.title}>{product.title}</h1>
        {product.brand && <div className={styles.brand}>{product.brand}</div>}
        <div className={styles.description}>{product.description}</div>
        <div className={styles.actions}>
          <div className={styles.price}>$ {product.price}</div>
          <CartControl product={product} />
        </div>
      </div>
      <Reviews reviews={product.reviews} className={styles.reviews} />
    </div>
  );
}

ProductDetails.loader = loader;
ProductDetails.action = action;
