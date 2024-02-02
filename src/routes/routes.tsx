import { createBrowserRouter } from 'react-router-dom';

import { App } from 'App';
import { ProductDetails, ProductsList, Sneaker } from 'components';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <ProductsList />,
      },
      {
        path: 'product/1',
        element: <Sneaker />,
      },
      {
        path: 'product/:productId',
        element: <ProductDetails />,
      },
    ],
  },
]);
