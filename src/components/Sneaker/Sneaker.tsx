import { SneakerImageContainer, SneakerInformationContainer } from 'components';

export function Sneaker() {
  return (
    <div className="w-full sm:w-product-container mx-auto flex justify-between">
      <SneakerImageContainer />
      <SneakerInformationContainer />
    </div>
  );
}
