import { useState } from 'react';

import iconMinus from '../../assets/images/icon-minus.svg';
import iconPlus from '../../assets/images/icon-plus.svg';
import iconCart from '../../assets/images/icon-cart.svg';

export function ProductInformationContainer() {
  const [amount, setAmount] = useState(0);

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
    <div className="flex flex-col justify-center w-2.2/5 max-w-[27.8125rem]">
      <div>
        <span className="text-primary text-[0.8125rem] uppercase font-bold tracking-[0.125rem] block mb-[1.69rem]">
          sneaker company
        </span>
        <h1 className="text-[2.75rem] font-bold leading-[3rem] text-black mb-8">
          Fall Limited Edition Sneakers
        </h1>
        <p className="text-gray mb-7">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </div>
      <div className="flex flex-wrap items-center w-[40%] pb-8">
        <span className="block text-[1.75rem] text-black font-bold pr-4">
          $125.00
        </span>
        <span className="block text-primary text-[1rem] font-bold px-[0.44rem] py-[0.25rem] rounded-[0.375rem] bg-[#FFEEE2]">
          50%
        </span>
        <span className="block text-gray-50 text-[1rem] line-through font-bold leading-[1.625rem]">
          $250.00
        </span>
      </div>
      <div className="flex justify-between">
        <div className="flex justify-around items-center rounded-[0.625rem] h-14 bg-[#F6F8FD] w-[35.28%] max-w-[9.8125rem]">
          <button>
            <a
              href="#"
              onClick={() => {
                decreaseAmount();
              }}
            >
              <img src={iconMinus} alt="icon minus" />
            </a>
          </button>
          <span className="font-bold">{amount}</span>
          <button>
            <a href="#" onClick={() => increaseAmount()}>
              <img src={iconPlus} alt="icon plus" />
            </a>
          </button>
        </div>

        <button className="flex justify-evenly items-center h-14 bg-primary rounded-[0.625rem] w-[61.12%] max-w-[17rem]">
          <svg
            width="22"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-white"
          >
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fillRule="nonzero"
            />
          </svg>
          <span className="text-white font-bold">Add to cart</span>
        </button>
      </div>
    </div>
  );
}
