'use client'

import { ProductResponse } from "../ProductCardComponent";
import { ProductCardDetailComponent } from "./ProductDetailComponent";
import useSWR from 'swr'

// @ts-ignore
const fetcher = (...args: any[]) => fetch(...args).then(res => res.json())

type ProductIdType = {
  proId: number
}

export default function ProductDetailUseSWRComponent({ proId }: ProductIdType) {
  const { data, error, isLoading } = useSWR(`/api/products/${proId}`, fetcher);

  if (error) {
    return (
      <div className="p-6 text-center text-sm text-destructive">
        Failed to load product details.
      </div>
    );
  }

  if (isLoading || !data) {
    return (
      <div className="flex min-h-[250px] items-center justify-center p-8">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <div className="size-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          <p className="text-sm">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <ProductCardDetailComponent
      images={data.images}
      title={data.title}
      description={data.description}
      price={data.price}
    />
  );
}
