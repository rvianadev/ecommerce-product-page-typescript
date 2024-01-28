import { Outlet } from 'react-router-dom';
import './index.css';

import { CartModal, Container, Header } from 'components';
import { CartProvider } from 'contexts';

export function App() {
  return (
    <CartProvider>
      <Container>
        <Header />
        <CartModal />
        <div className="container xl:max-w-[63.4375rem] mx-auto flex justify-center">
          <Outlet />
        </div>
      </Container>
    </CartProvider>
  );
}
