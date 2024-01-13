export function ProductsListCard({ productId, thumbnailUrl }: any) {
  return (
    <div>
      <h2>Product {productId}</h2>
      <img src={thumbnailUrl} alt="Product thumbnail" />
    </div>
  );
}
