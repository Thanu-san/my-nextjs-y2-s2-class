import ProductCardListComponent from "@/components/products/ProductCardListComponent";

export default function ProductsSlotPage() {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-semibold text-lg">Products Overview</h3>
      <ProductCardListComponent />
    </div>
  );
}
