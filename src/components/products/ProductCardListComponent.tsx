"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ProductCardComponent, ProductResponse } from "./ProductCardComponent";

export default function ProductCardListComponent() {
  const [products, setProducts] = useState<ProductResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/products`);
        const data = await response.json();
        setProducts(data.products || []);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="h-72 rounded-xl border border-border/50 bg-muted/20 animate-pulse"
          />
        ))}
      </div>
    );
  }

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products?.map(({ id, images, title, description, price, category }) => (
        <Link
          key={id}
          href={category ? `/products/${id}?category=${category}` : `/products/${id}`}
          className="group block h-full focus:outline-hidden"
        >
          <ProductCardComponent
            images={images}
            title={title}
            description={description}
            price={price}
          />
        </Link>
      ))}
    </section>
  );
}
