import { createContext, useState } from 'react';
import { useParams } from 'react-router-dom';
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
export interface ICartItem {
  title: string;
  id: string;
  quantity: number;
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
  const { productId } = useParams();
  const [cartAmount, setCartAmount] = useState(0);
  const cart: ICartItem[] = [];

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
    setCartAmount(amount);
    localStorage.setItem('amount', `${amount}`);

    const element = document.getElementById('product-title');
    const title = element?.innerHTML ?? '';
    const id = productId || '1';
    const quantity = amount;

    const productDetails: ICartItem = {
      title,
      id,
      quantity,
    };

    cart.push(productDetails);
    console.log(cart);

    localStorage.setItem('cart', JSON.stringify(cart));
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
