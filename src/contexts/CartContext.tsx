import { createContext, useState } from 'react';

export interface ICartContextData {
  isOpen: boolean;
  toggleCart: () => void;
  amount: number;
  increaseAmount: () => void;
  decreaseAmount: () => void;
}

export const CartContext = createContext<ICartContextData>({
  isOpen: false,
  toggleCart: () => {},
  amount: 0,
  increaseAmount: () => {},
  decreaseAmount: () => {},
});

export function CartProvider({ children }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState(0);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const increaseAmount = () => {
    if (amount < 20) {
      setAmount(amount + 1);
    }
  };

  const decreaseAmount = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };

  return (
    <CartContext.Provider
      value={{ isOpen, toggleCart, amount, increaseAmount, decreaseAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}
