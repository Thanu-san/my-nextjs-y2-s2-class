import Image from "next/image";
import { Price, PriceValue } from "@/components/products/price";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface ProductResponse {
  id?: number;
  images: string[];
  title: string;
  description: string;
  price: number;
}

const ProductCardComponent = ({
  images,
  title,
  description,
  price,
}: ProductResponse) => {
  return (
    <Card className="h-full overflow-hidden p-0">
      <CardHeader className="relative block p-0">
        <AspectRatio ratio={1.268115942} className="overflow-hidden">
          <Image
            src={images[0]}
            alt={title}
            width={500}
            height={500}
            className="block size-full object-cover object-center"
          />
        </AspectRatio>
      </CardHeader>
      <CardContent className="flex h-full flex-col gap-4 pb-6">
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <CardDescription className="font-medium text-muted-foreground">
          {description}
        </CardDescription>
        <div className="mt-auto">
          <Price onSale={price != null} className="text-lg font-semibold">
            <PriceValue price={price} currency={"USD"} variant="regular"/>
            <PriceValue price={price} currency={"USD"} variant="sale" />
          </Price>
        </div>
      </CardContent>
    </Card>
  );
};

export { ProductCardComponent };
