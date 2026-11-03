
import ProductCardListUseHookComponent from "./ProductCardListUseHookComponent";
import { Suspense } from "react";


const getAllProducts = () =>
    fetch(`${process.env.DUMMY_BASE_URL}/products`)
    .then(data => data.json())
    .then(pro => pro.products)
    .catch(error => {
        throw error;
    });

export default function ProductPage() {
    const productList = getAllProducts();

  return (
    <Suspense fallback={<h1>Loading ...</h1>}>
      <ProductCardListUseHookComponent product={productList}/>
    </Suspense>
  )
}
