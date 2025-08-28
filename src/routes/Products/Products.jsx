import { useLoaderData } from 'react-router-dom';
import { fetchMultipleProducts, fetchSearch } from '../../fetchProducts';

import styles from './Products.module.css';

import ProductCard from '../../components/ProductCard/ProductCard';
import Button from '../../components/Button/Button';

async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get('q');
  let products;

  if (q) {
    products = await fetchSearch(q);
  } else {
    products = await fetchMultipleProducts(10);
  }
  return { products, q };
}

export default function Products() {
  const { products, q } = useLoaderData();

  if (products.length === 0)
    return (
      <div className={styles.emptyState}>
        <div className={styles.heading}>
          We don't have any <span>{q}</span>, you freak!
        </div>
        <div className={styles.subHeading}>Try searching something else, or</div>
        <Button to="/products">see random products</Button>
      </div>
    );

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>
        {q
          ? `${q} (${products.length} product${
              products.length > 1 ? 's' : ''
            } found):`
          : 'Random products on our shop:'}
      </h1>
      <div className={styles.productGrid}>
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}

Products.loader = loader;
