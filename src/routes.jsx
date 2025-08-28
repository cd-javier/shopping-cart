import Root from './routes/Root/Root';
import Index from './routes/Index/Index';
import Products from './routes/Products/Products';
import ProductDetails from './routes/ProductDetails/ProductDetails';
import Checkout from './routes/Checkout/Checkout';
import ErrorPage from './routes/ErrorPage/ErrorPage';
import addToCartAction from './routes/addToCart';
import updateCartAction from './routes/updateCart';
import removeFromCartAction from './routes/removeFromCart';

const routes = [
  {
    path: '/',
    element: <Root />,
    errorElement: <></>,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: '/products',
            element: <Products />,
            loader: Products.loader,
            shouldRevalidate: ({ currentUrl, nextUrl }) => {
              return currentUrl.search !== nextUrl.search;
            },
          },
          {
            path: '/products/:productId',
            element: <ProductDetails />,
            loader: ProductDetails.loader,
          },
          { path: '/cart/add', action: addToCartAction },
          { path: '/cart/update', action: updateCartAction },
          { path: '/cart/remove', action: removeFromCartAction },
          { path: '/checkout', element: <Checkout /> },
        ],
      },
    ],
  },
];

export default routes;
