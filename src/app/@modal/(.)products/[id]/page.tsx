import ProductDetailUseSWRComponent from "@/components/products/detail/ProductDetailUseSwrComponent";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

type ModalProductProps = {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function ModalProduct({
  params,
  searchParams,
}: ModalProductProps) {
  const { id } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const category =
    typeof resolvedSearchParams.category === "string"
      ? resolvedSearchParams.category
      : undefined;

  return (
    <Dialog open>
      <DialogContent className="max-w-2xl sm:max-w-3xl p-6">
        {category && (
          <h1 className="text-2xl font-normal italic mb-1">
            Category: {category}
          </h1>
        )}
        <ProductDetailUseSWRComponent proId={Number(id)} />
      </DialogContent>
    </Dialog>
  );
}
