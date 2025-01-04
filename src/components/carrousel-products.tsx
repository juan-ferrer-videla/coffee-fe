import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { StaticImageData } from "next/image";
import { Product } from "@/components/product";

export const RecommendedProducts = ({
  products,
}: {
  products: {
    title: string;
    price: number;
    id: number;
    img: StaticImageData;
    description?: string;
    is_recommended: boolean;
  }[];
}) => {
  const currency = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  });

  const recommendedProducts = products.filter(
    (product) => product.is_recommended
  );

  return (
    <Carousel>
      <CarouselContent>
        {recommendedProducts.map((product) => (
          <CarouselItem key={product.id} className="basis-full sm:basis-1/3">
            <Product {...product} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
