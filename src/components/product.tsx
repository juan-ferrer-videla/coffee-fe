import Image, { StaticImageData } from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Product = ({
  title,
  price,
  id,
  img,
  description,
}: {
  title: string;
  price: number;
  id: number;
  img: StaticImageData;
  description?: string;
}) => {
  const currency = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  });

  return (
    <Card className="flex h-full max-w-sm flex-col overflow-hidden">
      <div className="relative aspect-video w-full">
        <Image
          key={id}
          alt={title}
          className="h-auto w-full object-cover"
          src={img}
          width={358}
          height={201}
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <p>{currency.format(price)}</p>
      </CardHeader>
      <CardContent className="flex flex-grow flex-col items-start justify-end gap-4"></CardContent>
    </Card>
  );
};
