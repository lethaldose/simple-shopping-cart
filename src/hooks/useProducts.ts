import { useState, useEffect } from "react";
import { Product } from "../types";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // const response = await fetch(url);
        // if (!response.ok) {
        //   throw new Error("Network response was not ok");
        // }
        // const data: Product[] = await response.json();
        const data: Product[] = [
          { id: 1, name: "Product 1", price: 100 },
          { id: 2, name: "Product 2", price: 200 },
          { id: 3, name: "Product 3", price: 300 },
        ];
        setProducts(data);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};
