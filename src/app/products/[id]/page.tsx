import ProductDetailComponent from "@/components/products/detail/ProductDetailComponent";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <ProductDetailComponent productId={id} />;
}
