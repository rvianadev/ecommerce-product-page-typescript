import { Outlet, useLocation } from 'react-router-dom';
import './index.css';

import { Container, Header, ProductsList } from 'components';

export function App() {
  const location = useLocation();

  return (
    <Container>
      <Header />
      <div className="container w-product-container mx-auto flex justify-center">
        {location.pathname === '/product/sneaker' ? null : <ProductsList />}
        {location.pathname === '/product/sneaker' ? <Outlet /> : null}
      </div>
    </Container>
  );
}
