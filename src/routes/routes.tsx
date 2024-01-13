import { createBrowserRouter } from 'react-router-dom';

import { App } from 'App';
import { ProductContainer } from 'components';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <App />
      </div>
    ),
    children: [
      {
        path: 'product/sneaker',
        element: <ProductContainer />,
      },
      {
        path: 'product/:productId',
        element: <h1 className="text-5xl">Detalhes de um produto qualquer</h1>,
      },
    ],
  },
]);
