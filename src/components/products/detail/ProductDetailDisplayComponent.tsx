import { use } from "react";
import { ProductResponse } from "../ProductCardComponent";
import { ProductCardDetailComponent } from "./ProductDetailComponent";

export default function ProductDetailDisplayComponent({
  product,
}: {
  product: Promise<ProductResponse>;
}) {
  const productData = use(product);

  const { images, title, description, price } = productData;

  return (
    <ProductCardDetailComponent
      images={images}
      title={title}
      description={description}
      price={price}
    />
  );
}
