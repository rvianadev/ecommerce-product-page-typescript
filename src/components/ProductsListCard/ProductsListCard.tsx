export function ProductsListCard({ props }: any) {
  return (
    <div>
      <h2>Product {props.productId}</h2>
      <img src={props.thumbnailUrl} alt="Product thumbnail" />
    </div>
  );
}
