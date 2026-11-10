import ProductDetailUseSWRComponent from "@/components/products/detail/ProductDetailUseSwrComponent";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

export default async function ModalProduct({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <Dialog open>
      <DialogContent className="max-w-2xl sm:max-w-3xl p-6">
        <ProductDetailUseSWRComponent proId={Number(id)} />
      </DialogContent>
    </Dialog>
  );
}
