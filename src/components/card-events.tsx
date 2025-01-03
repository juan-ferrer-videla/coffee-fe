// components/EventCard.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";

interface EventCardProps {
  id: number;
  image: StaticImageData | string;
  title: string;
  date: string;
  description: string;
  className?: string;
}

export const EventCard: React.FC<EventCardProps> = ({
  id,
  image,
  title,
  date,
  description,
  className= ""
}) => {
  return (
    <div className={`${className}`}>
    <Card className={`w-full h-96 ${className}`}>
      <CardHeader className="h-2/3">
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className="rounded-md w-full h-full object-cover"
        />
      </CardHeader>
      <CardContent className="h-1/3 flex flex-col justify-between">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{date}</CardDescription>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
    </div>
  );
};
