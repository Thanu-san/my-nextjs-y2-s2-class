import { Suspense } from "react";
import ProductCardListUseHookComponent from "@/components/products/ProductCardListUseHookComponent";

const getAllProducts = () =>
  fetch(`${process.env.DUMMY_BASE_URL}/products`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }

      return res.json();
    })
    .then((data) => data.products);

export default function ProductPage() {
  const productList = getAllProducts();

  return (
    <Suspense fallback={<h1>Loading products...</h1>}>
      <ProductCardListUseHookComponent product={productList} />
    </Suspense>
  );
}