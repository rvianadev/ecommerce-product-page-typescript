import { Outlet, useLocation } from 'react-router-dom';
import './index.css';

import { Container, Header, ProductsList } from 'components';

export function App() {
  const location = useLocation();
  console.log(location);

  return (
    <Container>
      <Header />
      <div className="container w-product-container mx-auto flex justify-center">
        {location.pathname === '/' ? <ProductsList /> : null}
        {location.pathname === '/product/sneaker' ? <Outlet /> : null}
        {location.pathname === '/product/:productId' ? <Outlet /> : null}
      </div>
    </Container>
  );
}
