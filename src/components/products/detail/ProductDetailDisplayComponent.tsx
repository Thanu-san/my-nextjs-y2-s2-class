"use client";

import { use } from "react";
import { useSearchParams } from "next/navigation";
import { ProductResponse } from "../ProductCardComponent";
import { ProductCardDetailComponent } from "./ProductDetailComponent";
import RecommendedProductsComponent from "./RecommendedProductsComponent";

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
    <div className="space-y-10">
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

      {/* Down below: Recommended products in the same category */}
      {displayCategory && (
        <RecommendedProductsComponent
          category={displayCategory}
          currentProductId={productData.id}
        />
      )}
    </div>
  );
}
