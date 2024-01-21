import { createContext, useState } from 'react';

export interface ICartContextData {
  isOpen: boolean;
  toggleCart: () => void;
  amount: number;
  cartAmount: number;
  increaseAmount: () => void;
  decreaseAmount: () => void;
  handleCart: () => void;
}

export const CartContext = createContext<ICartContextData>({
  isOpen: false,
  toggleCart: () => {},
  amount: 0,
  cartAmount: 0,
  increaseAmount: () => {},
  decreaseAmount: () => {},
  handleCart: () => {},
});

export function CartProvider({ children }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState(0);
  const [cartAmount, setCartAmount] = useState(amount);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const increaseAmount = () => {
    setAmount(amount + 1);
  };

  const decreaseAmount = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };

  const handleCart = () => {
    setCartAmount(amount + cartAmount);
  };

  return (
    <CartContext.Provider
      value={{
        isOpen,
        toggleCart,
        amount,
        cartAmount,
        increaseAmount,
        decreaseAmount,
        handleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
