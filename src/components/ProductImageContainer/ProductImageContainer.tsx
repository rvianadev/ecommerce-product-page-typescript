import { useState } from 'react';

import img1 from '../../assets/images/image-product-1.jpg';
import img2 from '../../assets/images/image-product-2.jpg';
import img3 from '../../assets/images/image-product-3.jpg';
import img4 from '../../assets/images/image-product-4.jpg';

import img1Small from '../../assets/images/image-product-1-thumbnail.jpg';
import img2Small from '../../assets/images/image-product-2-thumbnail.jpg';
import img3Small from '../../assets/images/image-product-3-thumbnail.jpg';
import img4Small from '../../assets/images/image-product-4-thumbnail.jpg';

export function ProductImageContainer() {
  const [isImg1Visible, setIsImg1Visible] = useState(false);
  const [isImg2Visible, setIsImg2Visible] = useState(false);
  const [isImg3Visible, setIsImg3Visible] = useState(false);
  const [isImg4Visible, setIsImg4Visible] = useState(false);

  return (
    <div className="flex flex-col gap-8 w-2.2/5 max-w-[27.8125rem] rounded-[0.9375rem]">
      <div className="rounded-[0.9375rem]">
        {isImg1Visible ? (
          <img src={img1} alt="Product" className="rounded-[0.9375rem]" />
        ) : null}
        {isImg2Visible ? (
          <img src={img2} alt="Product" className="rounded-[0.9375rem]" />
        ) : null}
        {isImg3Visible ? (
          <img src={img3} alt="Product" className="rounded-[0.9375rem]" />
        ) : null}
        {isImg4Visible ? (
          <img src={img4} alt="Product" className="rounded-[0.9375rem]" />
        ) : null}
      </div>
      <div className="flex gap-[1.94rem] rounded-[0.625rem]">
        <img
          src={img1Small}
          alt="Product thumbnail"
          className="w-[5.5rem] rounded-[0.625rem] border-2 border-white hover:cursor-pointer hover:border-primary"
          onClick={() => setIsImg1Visible(!isImg1Visible)}
        />
        <img
          src={img2Small}
          alt="Product thumbnail"
          className="w-[5.5rem] rounded-[0.625rem] border-2 border-white hover:cursor-pointer hover:border-primary"
          onClick={() => setIsImg2Visible(!isImg2Visible)}
        />
        <img
          src={img3Small}
          alt="Product thumbnail"
          className="w-[5.5rem] rounded-[0.625rem] border-2 border-white hover:cursor-pointer hover:border-primary"
          onClick={() => setIsImg3Visible(!isImg3Visible)}
        />
        <img
          src={img4Small}
          alt="Product thumbnail"
          className="w-[5.5rem] rounded-[0.625rem] border-2 border-white hover:cursor-pointer hover:border-primary"
          onClick={() => setIsImg4Visible(!isImg4Visible)}
        />
      </div>
    </div>
  );
}
