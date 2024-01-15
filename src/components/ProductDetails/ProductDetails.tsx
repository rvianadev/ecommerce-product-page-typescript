import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from 'api/api';

export function ProductDetails() {
  const { productId } = useParams();
  const [url, setUrl] = useState(null);

  const productUrl = async () => {
    const response = await api.get(`photos?id=${productId}`);
    return response.data[0].url;
  };

  useEffect(() => {
    const fetchedData = async () => {
      const fetchedUrl = await productUrl();
      setUrl(fetchedUrl);
    };

    fetchedData();
  }, [productId]);

  return (
    <div className="flex flex-col items-center pt-[5.62rem]">
      <h2 className="mb-[2rem] text-4xl">Product {productId}</h2>
      {url && (
        <img
          src={url}
          alt="Imagem do produto"
          className="rounded-[0.9375rem]"
        />
      )}
    </div>
  );
}
