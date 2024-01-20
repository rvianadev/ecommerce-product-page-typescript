import { createContext, useState } from 'react';

export interface ICartContextData {
  isOpen: boolean;
  toggleCart: () => void;
}

export const CartContext = createContext<ICartContextData>({
  isOpen: false,
  toggleCart: () => {},
});

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
