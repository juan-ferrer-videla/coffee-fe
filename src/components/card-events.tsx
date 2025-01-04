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
  const isHorizontal = className.includes("flex-row");
  return (
    
    <Card className={`${className ? className : "w-full h-96"} flex ${isHorizontal ? "flex-row" : "flex-col"}`}>
      <CardHeader className={`${isHorizontal ? "w-1/3 h-auto" : "h-2/3"}`}>
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className={`${isHorizontal ? "w-full h-full object-cover" : "w-full h-full"}`}
        />
      </CardHeader>
      <CardContent className={`${isHorizontal ? "w-2/3 p-4" : "h-1/3 flex flex-col justify-between"}`}>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{date}</CardDescription>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};
