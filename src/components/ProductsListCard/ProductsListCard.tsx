export function ProductsListCard({ productId, thumbnailUrl }: any) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-black text-lg font-semibold pb-4">
        Product {productId}
      </h2>
      <a href={`/product/${productId}`}>
        <img
          src={thumbnailUrl}
          alt="Product thumbnail"
          className="max-w-[6.25rem] sm:max-w-[9.375rem] rounded-[0.9375rem] hover:border-2 hover:border-primary hover:opacity-70"
        />
      </a>
    </div>
  );
}
