import { useLoaderData } from 'react-router-dom';
import { fetchMultipleProducts } from '../../fetchProducts';
import { NavLink } from 'react-router-dom';

async function loader() {
  const products = await fetchMultipleProducts(16);
  return products;
}
async function action() {}

export default function Products() {
  const products = useLoaderData();

  return (
    <>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <NavLink to={`/products/${product.id}`}>{product.title}</NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
}

Products.loader = loader;
Products.action = action;
