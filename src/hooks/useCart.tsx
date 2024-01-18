import { CartContext } from 'contexts';
import { useContext } from 'react';

export const useCart = () => {
  return useContext(CartContext);
};
