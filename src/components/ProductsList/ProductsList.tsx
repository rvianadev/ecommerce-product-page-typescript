import { useState, useEffect } from 'react';

import api from 'api/api';
import { ListContext } from 'contexts';

import { ProductsListCard } from 'components/ProductsListCard';
import { SneakerCard } from 'components/SneakerCard';

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

  // Save products list in localStorage

  // const storageItem = (element: IProduct, index: number) => {
  //   localStorage.setItem(`Product ${index + 1}`, JSON.stringify(element));
  // };

  // productsList.forEach(storageItem);

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <ListContext.Provider value={{ productsList, setProductsList }}>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12">
        <SneakerCard />
        {productsList.map((value, index) => {
          return (
            <ProductsListCard
              key={index}
              productId={value?.id}
              thumbnailUrl={value?.thumbnailUrl}
              url={value?.url}
            />
          );
        })}
      </div>
    </ListContext.Provider>
  );
}
