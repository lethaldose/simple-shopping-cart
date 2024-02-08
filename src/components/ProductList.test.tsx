import { render, screen } from '@testing-library/react';
import ProductList from './ProductList';

test('renders ProductList', () => {
  render(<ProductList products={[]} addToCart={() => {}} />);
  expect(screen.getByText(/Products/i)).toBeInTheDocument();
});
