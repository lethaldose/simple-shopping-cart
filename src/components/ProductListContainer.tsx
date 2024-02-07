import ProductList from './ProductList';
import useCart from '../hooks/useCart';
import { useProducts } from '../hooks/useProducts';

const ProductListContainer = () => {
  const { cart, addToCart } = useCart();
  const { products } = useProducts();

  return (
    <div>
      <ProductList products={products} addToCart={addToCart} />
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListContainer;
