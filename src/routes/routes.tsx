import { createBrowserRouter } from 'react-router-dom';

import { App } from 'App';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <h1 className="text-4xl">Página principal</h1>
      </div>
    ),
  },
  {
    path: 'product/sneaker',
    element: <App />,
  },
]);
