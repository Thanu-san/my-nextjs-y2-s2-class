"use client";

import { use } from "react";
import { useSearchParams } from "next/navigation";
import { ProductResponse } from "../ProductCardComponent";
import { ProductCardDetailComponent } from "./ProductDetailComponent";

export default function ProductDetailDisplayComponent({
  product,
  category,
}: {
  product: Promise<ProductResponse>;
  category?: string;
}) {
  const productData = use(product);
  const searchParams = useSearchParams();
  const searchCategory = searchParams.get("category");

  const displayCategory = category || searchCategory || productData.category;

  return (
    <div className="space-y-4">
      {displayCategory && (
        <h1 className="text-2xl font-normal italic">
          Category: {displayCategory}
        </h1>
      )}
      <div className="rounded-2xl border bg-card p-6 shadow-xs sm:p-8">
        <ProductCardDetailComponent {...productData} />
      </div>
    </div>
  );
}
