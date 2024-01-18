import imgProduct1 from '../../assets/images/image-product-1.jpg';
import imgProduct2 from '../../assets/images/image-product-2.jpg';
import imgProduct3 from '../../assets/images/image-product-3.jpg';
import imgProduct4 from '../../assets/images/image-product-4.jpg';

import imgProduct1Thumbnail from '../../assets/images/image-product-1-thumbnail.jpg';
import imgProduct2Thumbnail from '../../assets/images/image-product-2-thumbnail.jpg';
import imgProduct3Thumbnail from '../../assets/images/image-product-3-thumbnail.jpg';
import imgProduct4Thumbnail from '../../assets/images/image-product-4-thumbnail.jpg';

export function ProductImageContainer() {
  return (
    <div className="flex flex-col gap-8 w-2.2/5 max-w-[27.8125rem] rounded-[0.9375rem]">
      <div>
        <img src={imgProduct1} alt="Product" className="rounded-[0.9375rem]" />
      </div>
      <div className="flex gap-[1.94rem] rounded-[0.625rem]">
        <img
          src={imgProduct1Thumbnail}
          alt="Product thumbnail"
          className="w-[5.5rem] rounded-[0.625rem]"
        />
        <img
          src={imgProduct2Thumbnail}
          alt="Product thumbnail"
          className="w-[5.5rem] rounded-[0.625rem]"
        />
        <img
          src={imgProduct3Thumbnail}
          alt="Product thumbnail"
          className="w-[5.5rem] rounded-[0.625rem]"
        />
        <img
          src={imgProduct4Thumbnail}
          alt="Product thumbnail"
          className="w-[5.5rem] rounded-[0.625rem]"
        />
      </div>
    </div>
  );
}
