// components/EventCard.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
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

export const EventDescCard: React.FC<EventCardProps> = ({
    id,
    image,
    title,
    date,
    description
  }) => {
    return (
      <Card className="flex flex-col lg:flex-row mb-4 transition-transform duration-300 transform hover:scale-105">
        <CardHeader className="p-2 w-full lg:w-1/3 lg:h-80 flex-shrink-0">
        <div className="relative w-full h-48 lg:h-full">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
        </CardHeader>
        <CardContent className="flex flex-col p-4">
          <CardTitle className="text-2xl font-bold mb-2">
            {title}
          </CardTitle>
          <CardDescription className="mb-1 text-base">
            <p>{description}</p>
          </CardDescription>
          <CardFooter className="p-0 flex mt-auto ml-auto">
            <p>{date}</p>
          </CardFooter>
        </CardContent>
      </Card>
    );
  };
  