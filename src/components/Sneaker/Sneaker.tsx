import { useCart } from 'hooks';

import img1 from '../../assets/images/image-product-1.jpg';
import img2 from '../../assets/images/image-product-2.jpg';
import img3 from '../../assets/images/image-product-3.jpg';
import img4 from '../../assets/images/image-product-4.jpg';

import img1Small from '../../assets/images/image-product-1-thumbnail.jpg';
import img2Small from '../../assets/images/image-product-2-thumbnail.jpg';
import img3Small from '../../assets/images/image-product-3-thumbnail.jpg';
import img4Small from '../../assets/images/image-product-4-thumbnail.jpg';

export function Sneaker() {
  const { amount, increaseAmount, decreaseAmount, handleCart } = useCart();

  const showLargeImage = (image: any) => {
    const largeImageContainer = document.getElementById('large-image');

    if (largeImageContainer) {
      largeImageContainer.innerHTML = `<img src=${image} alt='Product' class='rounded-[0.9375rem]'/>`;
    }
  };

  return (
    <div className="w-full sm:w-product-container mx-auto flex justify-between">
      <div className="flex flex-col gap-8 w-[44%] max-w-[27.8125rem] rounded-[0.9375rem]">
        <div id="large-image" className="rounded-[0.9375rem] max-w-full">
          <img src={img1} alt="Product" className="rounded-[0.9375rem]" />
        </div>
        <div className="flex flex-wrap justify-evenly md:justify-between rounded-[0.625rem] max-w-full">
          <img
            src={img1Small}
            alt="Product thumbnail"
            className="w-1/2 max-w-[5.5rem] rounded-[0.625rem] border-2 border-white hover:cursor-pointer hover:border-primary mb-2"
            onClick={() => {
              showLargeImage(img1);
            }}
          />
          <img
            src={img2Small}
            alt="Product thumbnail"
            className="w-1/2 max-w-[5.5rem] rounded-[0.625rem] border-2 border-white hover:cursor-pointer hover:border-primary mb-2"
            onClick={() => {
              showLargeImage(img2);
            }}
          />
          <img
            src={img3Small}
            alt="Product thumbnail"
            className="w-1/2 max-w-[5.5rem] rounded-[0.625rem] border-2 border-white hover:cursor-pointer hover:border-primary mb-2"
            onClick={() => {
              showLargeImage(img3);
            }}
          />
          <img
            src={img4Small}
            alt="Product thumbnail"
            className="w-1/2 max-w-[5.5rem] rounded-[0.625rem] border-2 border-white hover:cursor-pointer hover:border-primary mb-2"
            onClick={() => {
              showLargeImage(img4);
            }}
          />
        </div>
      </div>

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
        <div className="flex flex-wrap items-center w-[65%] lg:w-[40%] pb-8">
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
        <div className="flex flex-wrap justify-between">
          <div className="flex justify-around items-center rounded-[0.625rem] h-14 bg-[#F6F8FD] xs:max-[639px]:w-full sm:w-[35.28%] sm:max-w-[9.8125rem]">
            <button className="p-4" onClick={() => decreaseAmount()}>
              <svg
                width="12"
                height="4"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="fill-primary hover:fill-primary-light"
              >
                <defs>
                  <path
                    d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                    id="a"
                  />
                </defs>
                <use fillRule="nonzero" xlinkHref="#a" />
              </svg>
            </button>
            <span className="font-bold data-amount">{amount}</span>
            <button className="p-4" onClick={() => increaseAmount()}>
              <svg
                width="12"
                height="12"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="fill-primary hover:fill-primary-light"
              >
                <defs>
                  <path
                    d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                    id="b"
                  />
                </defs>
                <use fillRule="nonzero" xlinkHref="#b" />
              </svg>
            </button>
          </div>

          <button
            className="flex justify-evenly items-center h-14 bg-primary hover:bg-primary-light rounded-[0.625rem] xs:max-[639px]:w-full xs:max-[639px]:mt-4 sm:w-[61.12%] sm:max-w-[17rem]"
            onClick={() => {
              handleCart();
            }}
          >
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
    </div>
  );
}
