import { createContext, useState, ReactNode } from 'react';

interface ICartContext {
  isOpen: boolean;
  toggleCart: () => {};
}

interface ICartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<ICartContext | undefined>(undefined);

export function CartProvider({ children }: ICartProviderProps) {
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
