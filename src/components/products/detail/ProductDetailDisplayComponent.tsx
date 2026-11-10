import { use } from "react";
import { ProductResponse } from "../ProductCardComponent";
import { ProductCardDetailComponent } from "./ProductDetailComponent";

export default function ProductDetailDisplayComponent({
  product,
}: {
  product: Promise<ProductResponse>;
}) {
  const productData = use(product);

  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm sm:p-8">
      <ProductCardDetailComponent {...productData} />
    </div>
  );
}
