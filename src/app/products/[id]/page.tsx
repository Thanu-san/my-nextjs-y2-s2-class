import ProductDetailComponent from "@/components/products/detail/ProductDetailComponent";

type ProductPageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function ProductPage({
  params,
  searchParams,
}: ProductPageProps) {
  const { id } = await params;
  const resolvedSearchParams = await searchParams;
  const category =
    typeof resolvedSearchParams.category === "string"
      ? resolvedSearchParams.category
      : undefined;

  return <ProductDetailComponent productId={id} category={category} />;
}
