"use client";

import useSWR from "swr";
import { ProductResponse } from "../ProductCardComponent";
import { ProductCardDetailComponent } from "./ProductDetailComponent";

const fetcher = (url: string): Promise<ProductResponse> =>
  fetch(url).then((res) => res.json());

type ProductIdType = {
  proId: number | string;
};

export default function ProductDetailUseSWRComponent({ proId }: ProductIdType) {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_DUMMY_BASE_URL}/products/${proId}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading || !data) return <div>loading...</div>;

  return (
    <ProductCardDetailComponent
      images={data.images}
      title={data.title}
      description={data.description}
      price={data.price}
    />
  );
}

export { ProductDetailUseSWRComponent };
