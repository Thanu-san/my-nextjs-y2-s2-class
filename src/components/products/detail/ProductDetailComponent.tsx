import { Suspense } from "react";
import Image from "next/image";
import { Price, PriceValue } from "@/components/products/price";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProductResponse } from "../ProductCardComponent";
import ProductDetailDisplayComponent from "./ProductDetailDisplayComponent";

export function ProductCardDetailComponent({
  images,
  title,
  description,
  price,
}: ProductResponse) {
  return (
    <section className="container mx-auto p-8">
      <Card className="overflow-hidden p-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <CardHeader className="p-0">
            <AspectRatio ratio={1}>
              <Image
                src={images?.[0] || "/placeholder.svg"}
                alt={title}
                width={600}
                height={600}
                className="size-full object-cover"
              />
            </AspectRatio>
          </CardHeader>

          <CardContent className="flex flex-col justify-center gap-6 p-8">
            <CardTitle className="text-3xl font-bold">{title}</CardTitle>
            <CardDescription className="text-base">{description}</CardDescription>
            <Price className="text-2xl font-semibold">
              <PriceValue price={price} currency="USD" variant="regular" />
            </Price>
          </CardContent>
        </div>
      </Card>
    </section>
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
    <Suspense fallback={<h1>Loading product...</h1>}>
      <ProductDetailDisplayComponent product={product} />
    </Suspense>
  );
}
