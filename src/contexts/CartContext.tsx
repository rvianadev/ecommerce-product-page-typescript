import { createContext, useState } from 'react';

export interface ICartContextData {
  isOpen: boolean;
  toggleCart: () => void;
  amount: number;
  cartAmount: number;
  increaseAmount: () => void;
  decreaseAmount: () => void;
  handleCart: () => void;
  updateCart: () => void;
}

export const CartContext = createContext<ICartContextData>({
  isOpen: false,
  toggleCart: () => {},
  amount: 0,
  cartAmount: 0,
  increaseAmount: () => {},
  decreaseAmount: () => {},
  handleCart: () => {},
  updateCart: () => {},
});

export function CartProvider({ children }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState(0);

  const storedCartAmount = localStorage.getItem('cartAmount');
  const [cartAmount, setCartAmount] = useState(
    storedCartAmount ? parseInt(storedCartAmount, 10) : 0
  );

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
    const currentAmount = localStorage.getItem('cartAmount');

    const total = amount + (currentAmount ? parseInt(currentAmount, 10) : 0);
    setCartAmount(total);
    localStorage.setItem('cartAmount', `${total}`);
  };

  const updateCart = () => {
    setCartAmount(0);
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
        updateCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
