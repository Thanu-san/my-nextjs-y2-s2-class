'use client'

import { ProductResponse } from "../ProductCardComponent";
import { ProductCardDetailComponent } from "./ProductDetailComponent";
import useSWR from 'swr'

// @ts-ignore
const fetcher = (...args:ProductResponse[]) => fetch(...args).then(res => res.json())

type ProductIdType = {
  proId: number
}

export default function ProductDetailUseSWRComponent({proId}:ProductIdType) {
 
  const { data, error, isLoading } = 
  useSWR(`${process.env.NEXT_PUBLIC_DUMMY_BASE_URL}/products/${proId}`, fetcher)

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <ProductCardDetailComponent
      images={data.images}
      title={data.title}
      description={data.description}
      price={data.price} />
  )
}
