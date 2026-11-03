import { use } from "react";
import { ProductCardComponent, ProductResponse } from "./ProductCardComponent";
import Link from "next/link";

export default function ProductCardListUseHookComponent({
  product,
}: {
  product: Promise<ProductResponse[]>;
}) {
  const products = use(product);

  return (
    <section className="container mx-auto grid grid-cols-1 gap-8 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products?.map(({ images, title, description, price, id }) => (
        <Link 
         href={`/product/${id}`}
         key={id}>
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