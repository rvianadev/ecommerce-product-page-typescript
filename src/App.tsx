import { Outlet } from 'react-router-dom';
import './index.css';

import { Container, Header, ProductsList } from 'components';

export function App() {
  return (
    <Container>
      <Header />
      <div className="container w-product-container mx-auto flex justify-center">
        <Outlet />
        <ProductsList />
      </div>
    </Container>
  );
}
