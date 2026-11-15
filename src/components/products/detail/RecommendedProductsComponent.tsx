"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ProductCardComponent, ProductResponse } from "../ProductCardComponent";

type RecommendedProductsProps = {
  category: string;
  currentProductId?: number;
};

export default function RecommendedProductsComponent({
  category,
  currentProductId,
}: RecommendedProductsProps) {
  const [products, setProducts] = useState<ProductResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchRecommended() {
      setIsLoading(true);
      try {
        // Try local proxy API first
        let response = await fetch(
          `/api/products/category/${encodeURIComponent(category)}`
        );

        // Fallback to direct URL if needed
        if (!response.ok && process.env.NEXT_PUBLIC_DUMMY_BASE_URL) {
          response = await fetch(
            `${process.env.NEXT_PUBLIC_DUMMY_BASE_URL}/products/category/${encodeURIComponent(category)}`
          );
        }

        if (response.ok) {
          const data = await response.json();
          const items: ProductResponse[] = data.products || [];

          // Filter out the product currently being viewed
          const filtered = items.filter(
            (p) => p.id !== currentProductId
          );
          setProducts(filtered);
        } else {
          setProducts([]);
        }
      } catch (error) {
        console.error("Failed to load recommended products", error);
        setProducts([]);
      } finally {
        setIsLoading(false);
      }
    }

    if (category) {
      fetchRecommended();
    }
  }, [category, currentProductId]);


  return (
    <section className="pt-8 border-t border-border/60">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-foreground">
            Recommended Products
          </h2>
        </div>
        <span className="text-xs text-muted-foreground">
          {products.length} {products.length === 1 ? "item" : "items"} found
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <Link
            key={item.id}
            href={item.category ? `/products/${item.id}?category=${item.category}` : `/products/${item.id}`}
            className="group block h-full focus:outline-hidden"
          >
            <ProductCardComponent
              images={item.images}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
