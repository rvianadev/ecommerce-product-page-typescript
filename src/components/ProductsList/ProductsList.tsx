import { useState, useEffect } from 'react';

import api from 'api/api';
import { ListContext } from 'contexts';

import { ProductsListCard } from 'components/ProductsListCard';

interface IProduct {
  albumId?: number;
  id?: number;
  title?: string;
  url?: string;
  thumbnailUrl?: string;
}

export function ProductsList() {
  const [productsList, setProductsList] = useState<IProduct[]>([]);

  const getProductList = async () => {
    await api.get('photos?_limit=14').then((response) => {
      setProductsList(response.data);
    });
  };

  useEffect(() => {
    getProductList();
  }, []);

  console.log(productsList);

  return (
    <ListContext.Provider value={{ productsList, setProductsList }}>
      {productsList.map((value, index) => {
        return (
          <ProductsListCard
            key={index}
            productId={value.id}
            thumbnailUrl={value.thumbnailUrl}
            url={value.url}
          />
        );
      })}
      <p>Algum conteúdo aqui</p>
    </ListContext.Provider>
  );
}
