import ProductDetailComponent from "@/components/products/detail/ProductDetailComponent";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  return <ProductDetailComponent productId={productId} />;
}
