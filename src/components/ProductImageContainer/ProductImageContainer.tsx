import img1 from '../../assets/images/image-product-1.jpg';
import img2 from '../../assets/images/image-product-2.jpg';
import img3 from '../../assets/images/image-product-3.jpg';
import img4 from '../../assets/images/image-product-4.jpg';

import img1Small from '../../assets/images/image-product-1-thumbnail.jpg';
import img2Small from '../../assets/images/image-product-2-thumbnail.jpg';
import img3Small from '../../assets/images/image-product-3-thumbnail.jpg';
import img4Small from '../../assets/images/image-product-4-thumbnail.jpg';

export function ProductImageContainer() {
  const showLargeImage = (image: any) => {
    const container = document.getElementById('large-image');

    if (container) {
      container.innerHTML = `<img src=${image} alt='Product' class='rounded-[0.9375rem]'/>`;
    }
  };

  return (
    <div className="flex flex-col gap-8 w-2.2/5 max-w-[27.8125rem] rounded-[0.9375rem]">
      <div id="large-image" className="rounded-[0.9375rem]">
        <img src={img1} alt="Product" className="rounded-[0.9375rem]" />
      </div>
      <div className="flex gap-[1.94rem] rounded-[0.625rem]">
        <img
          src={img1Small}
          alt="Product thumbnail"
          className="w-[5.5rem] rounded-[0.625rem] border-2 border-white hover:cursor-pointer hover:border-primary"
          onClick={() => {
            showLargeImage(img1);
          }}
        />
        <img
          src={img2Small}
          alt="Product thumbnail"
          className="w-[5.5rem] rounded-[0.625rem] border-2 border-white hover:cursor-pointer hover:border-primary"
          onClick={() => {
            showLargeImage(img2);
          }}
        />
        <img
          src={img3Small}
          alt="Product thumbnail"
          className="w-[5.5rem] rounded-[0.625rem] border-2 border-white hover:cursor-pointer hover:border-primary"
          onClick={() => {
            showLargeImage(img3);
          }}
        />
        <img
          src={img4Small}
          alt="Product thumbnail"
          className="w-[5.5rem] rounded-[0.625rem] border-2 border-white hover:cursor-pointer hover:border-primary"
          onClick={() => {
            showLargeImage(img4);
          }}
        />
      </div>
    </div>
  );
}
