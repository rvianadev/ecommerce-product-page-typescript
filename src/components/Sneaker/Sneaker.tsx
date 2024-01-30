import { ProductImageContainer, ProductInformationContainer } from 'components';

export function Sneaker() {
  return (
    <div className="w-full sm:w-product-container mx-auto flex justify-between">
      <ProductImageContainer />
      <ProductInformationContainer />
    </div>
  );
}
