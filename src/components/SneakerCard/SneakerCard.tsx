import sneakerThumbnail from '../../assets/images/image-product-1-thumbnail.jpg';

export function SneakerCard() {
  return (
    <div className="flex flex-col items-center">
      <h2>Sneaker</h2>
      <a href={`/product/sneaker`}>
        <img
          src={sneakerThumbnail}
          alt="Product thumbnail"
          className="max-w-[9.375rem] rounded-[0.9375rem]"
        />
      </a>
    </div>
  );
}
