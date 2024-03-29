import sneakerThumbnail from '../../assets/images/image-product-1-thumbnail.jpg';

export function SneakerCard() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-black text-lg font-semibold pb-4">Product 1</h2>
      <a href={`/product/1`}>
        <img
          src={sneakerThumbnail}
          alt="Product thumbnail"
          className="max-w-[6.25rem] sm:max-w-[9.375rem] rounded-[0.9375rem] hover:border-2 hover:border-primary hover:opacity-70"
        />
      </a>
    </div>
  );
}
