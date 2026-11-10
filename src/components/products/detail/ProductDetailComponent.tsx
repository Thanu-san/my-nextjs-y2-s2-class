import { Suspense } from "react";
import Image from "next/image";
import { ProductResponse } from "../ProductCardComponent";
import ProductDetailDisplayComponent from "./ProductDetailDisplayComponent";

export function ProductCardDetailComponent({
  images,
  title,
  description,
  price,
}: ProductResponse) {
  const imageUrl = images?.[0] || "/placeholder.svg";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center w-full">
      {/* Product Image */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-border/60 bg-muted/20">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-contain p-4"
          priority
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          {title}
        </h2>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        <div className="pt-2 border-t border-border/50">
          <span className="text-2xl font-bold text-foreground">
            ${price?.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}

const getProductById = (productId: string): Promise<ProductResponse> =>
  fetch(`${process.env.DUMMY_BASE_URL}/products/${productId}`).then((res) => {
    if (!res.ok) {
      throw new Error("Failed to fetch product");
    }

    return res.json();
  });

export default function ProductDetailComponent({
  productId,
}: {
  productId: string;
}) {
  const product = getProductById(productId);

  return (
    <Suspense
      fallback={
        <div className="container mx-auto max-w-4xl p-8 flex items-center justify-center min-h-[300px]">
          <div className="size-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        </div>
      }
    >
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <ProductDetailDisplayComponent product={product} />
      </div>
    </Suspense>
  );
}
