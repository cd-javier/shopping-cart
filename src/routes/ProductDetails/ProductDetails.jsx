import { useLoaderData } from 'react-router-dom';
import { fetchProduct } from '../../fetchProducts';

async function loader({ params }) {
  const productId = parseInt(params.productId, 10);
  const product = await fetchProduct(productId);
  return product;
}

async function action() {}

export default function ProductDetails() {
  const product = useLoaderData();

  return (
    <>
      <div>{product.title}</div>
    </>
  );
}

ProductDetails.loader = loader;
ProductDetails.action = action;
