import { ProductImageContainer, ProductInformationContainer } from 'components';

export function ProductContainer() {
  return (
    <div className="container w-product-container mx-auto flex justify-between">
      <ProductImageContainer />
      <ProductInformationContainer />
    </div>
  );
}
