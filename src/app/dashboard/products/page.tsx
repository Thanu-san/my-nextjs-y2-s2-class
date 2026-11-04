import ProductCardListComponent from "@/components/products/ProductCardListComponent";

export default function DashboardProductsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Products</h2>
        <p className="text-muted-foreground text-sm">
          Browse and manage all products.
        </p>
      </div>
      <ProductCardListComponent />
    </div>
  );
}
