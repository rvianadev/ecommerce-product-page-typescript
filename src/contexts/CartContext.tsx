import { createContext, useState } from 'react';

const CartContextData = {
  isOpen: false,
  toggleCart: () => {},
};

export const CartContext = createContext(CartContextData);

export function CartProvider({ children }: any) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CartContext.Provider value={{ isOpen, toggleCart }}>
      {children}
    </CartContext.Provider>
  );
}
