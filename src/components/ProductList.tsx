import { Product } from '../types';

type ProductListProps = {
  products: Product[];
  addToCart: (product: Product) => void;
};

const ProductList: React.FC<ProductListProps> = ({ products, addToCart }: ProductListProps) => {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h4>{product.name}</h4>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
