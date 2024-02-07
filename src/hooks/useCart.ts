import { useState } from "react";
import { CartItem, Product } from "../types";

// Hook to manage cart state
export const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === product.id);
      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      const newCartItem = { ...product, quantity: 1 };
      return [...currentCart, newCartItem];
    });
  };

  return { cart, addToCart };
};

export default useCart;
