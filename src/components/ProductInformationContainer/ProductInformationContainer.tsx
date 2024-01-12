import iconMinus from '../../assets/images/icon-minus.svg';
import iconPlus from '../../assets/images/icon-plus.svg';
import iconCart from '../../assets/images/icon-cart.svg';

export function ProductInformationContainer() {
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
            <img src={iconMinus} alt="icon minus" />
          </button>
          <span>0</span>
          <button>
            <img src={iconPlus} alt="icon plus" />
          </button>
        </div>

        <button className="flex justify-evenly items-center h-14 bg-primary rounded-[0.625rem] w-[61.12%] max-w-[17rem]">
          <img src={iconCart} alt="icon cart" />
          <span className="text-white font-bold">Add to cart</span>
        </button>
      </div>
    </div>
  );
}
