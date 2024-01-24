// import { useEffect, useState } from 'react';

import { useCart } from 'hooks';
import img1Small from '../../assets/images/image-product-1-thumbnail.jpg';

export function CartModal() {
  const { isOpen, cartAmount, updateCart } = useCart();
  // const [cartState, setCartState] = useState(cartAmount);

  const totalPrice = (cartAmount * 125).toFixed(2);

  // useEffect(() => {
  //   setCartState(cartAmount);
  // }, [cartAmount]);

  const clearCart = () => {
    localStorage.removeItem('cartAmount');
    updateCart();
  };

  return (
    <div
      className="flex flex-col absolute -right-[5rem] top-[4.13rem] w-[22.5rem] h-64 shadow-2xl bg-white rounded-[0.625rem]"
      style={isOpen ? { display: 'flex' } : { display: 'none' }}
    >
      <header className="after:absolute after:content-[''] after:bg-header-line after:w-full after:h-[0.0625rem] after:inline-block">
        <span className="pt-6 pl-6 pb-[1.69rem] block text-black text-base font-bold">
          Cart
        </span>
      </header>
      <div className="flex flex-col gap-6 justify-center items-center flex-1 pl-6 pr-6">
        {cartAmount === 0 ? (
          <span className="text-base font-bold leading-[1.625rem] text-gray">
            Your cart is empty.
          </span>
        ) : (
          <>
            <div className="flex flex-col">
              <div className="flex flex-wrap gap-x-4">
                <img
                  src={img1Small}
                  className="max-w-[3.125rem] rounded inline"
                />
                <div className="flex flex-col">
                  <span className="text-gray">
                    Fall Limited Edition Sneakers
                  </span>
                  <div>
                    <span className="text-gray">$125.00 x {cartAmount}</span>
                    <span className="font-bold">&nbsp; ${totalPrice}</span>
                  </div>
                </div>

                <svg
                  width="14"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="fill-gray-40 hover:fill-black hover:cursor-pointer self-center"
                  onClick={() => clearCart()}
                >
                  <defs>
                    <path
                      d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                      id="a"
                    />
                  </defs>
                  <use fillRule="nonzero" xlinkHref="#a" />
                </svg>
              </div>
            </div>
            <button className="bg-primary w-full h-14 rounded-[0.625rem] hover:bg-primary-light">
              <span className="text-white font-bold">Checkout</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
