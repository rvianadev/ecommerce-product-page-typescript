export function ProductsListCard({ productId, thumbnailUrl }: any) {
  return (
    <div className="flex flex-col items-center">
      <h2>Product {productId}</h2>
      <a href={`/product/${productId}`}>
        <img
          src={thumbnailUrl}
          alt="Product thumbnail"
          className="max-w-[9.375rem] rounded-[0.9375rem]"
        />
      </a>
    </div>
  );
}
