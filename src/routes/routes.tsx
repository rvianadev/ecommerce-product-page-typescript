import { createBrowserRouter } from 'react-router-dom';

import { App } from 'App';
import { Sneaker } from 'components';

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
        element: <Sneaker />,
      },
      {
        path: 'product/:productId',
        element: <h1 className="text-5xl">Detalhes de um produto qualquer</h1>,
      },
    ],
  },
]);
