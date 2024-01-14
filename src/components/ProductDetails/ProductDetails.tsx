import { useParams } from 'react-router-dom';

export function ProductDetails() {
  const { productId } = useParams();
  console.log('ID do produto: ', productId);

  return (
    <div>
      <h2>Detalhes do produto {productId}</h2>
    </div>
  );
}
