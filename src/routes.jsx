import Root from './routes/Root/Root';
import Index from './routes/Index/Index';
import Products from './routes/Products/Products';
import ProductDetails from './routes/ProductDetails/ProductDetails';
import Checkout from './routes/Checkout/Checkout';
import ErrorPage from './routes/ErrorPage/ErrorPage';

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
            action: Products.action,
          },
          {
            path: '/products/:productId',
            element: <ProductDetails />,
            loader: ProductDetails.loader,
            action: ProductDetails.action,
          },
          { path: '/checkout', element: <Checkout /> },
        ],
      },
    ],
  },
];

export default routes;
