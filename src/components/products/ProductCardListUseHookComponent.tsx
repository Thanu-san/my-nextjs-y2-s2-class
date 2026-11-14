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
    <section className="container mx-auto grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products?.map(({ id, images, title, description, price, category }) => (
        <Link
          href={category ? `/products/${id}?category=${category}` : `/products/${id}`}
          key={id}
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
