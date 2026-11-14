import Image from "next/image";

export interface ProductResponse {
  id?: number;
  images: string[];
  title: string;
  description: string;
  price: number;
  category?: string;
}

const ProductCardComponent = ({
  images,
  title,
  description,
  price,
}: ProductResponse) => {
  const imageUrl = images?.[0] || "/placeholder.svg";

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-border/70 bg-card transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      {/* Product Image */}
      <div className="relative aspect-square w-full overflow-hidden bg-muted/20">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-base font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Price */}
        <div className="mt-auto pt-3 border-t border-border/50">
          <span className="text-base font-bold text-foreground">
            ${price?.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export { ProductCardComponent };
