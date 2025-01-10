import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";

interface CoursesProps {
  id: number;
  title: string;
  description: string;
  img: StaticImageData;
  is_presencial: boolean;
  price: number;
  instructor: string;
  instructorImg: StaticImageData;
  instructorDescription: string;
  videoUrl: string;
}

export const CourseCard: React.FC<CoursesProps> = ({
  id,
  title,
  description,
  img,
  is_presencial,
  price,
  instructor,
  instructorImg,
  instructorDescription,
  videoUrl,
}) => {
  return (
    <Card className="flex flex-col lg:flex-row mb-4 transition-transform duration-300 transform hover:scale-105">
      <CardHeader className="p-2 w-full lg:w-1/3 flex-shrink-0">
      <div className="relative w-full h-48 lg:h-full">
      <Image
        src={img}
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
          <p
            className={`mt-2 text-sm font-semibold mb-1 px-2 w-min py-1 rounded ${
              is_presencial
                ? "bg-green-600 text-white"
                : "bg-blue-600 text-white"
            }`}
          >
            {is_presencial ? "Presencial" : "Virtual"}
          </p>
        </CardDescription>
        <CardFooter className="p-0 flex mt-auto ml-auto">
          <p className="justify-end mt-auto mr-2 w-min text-lg font-bold bg-yellow-500 text-black px-3 py-1 rounded shadow">
            ${price}
          </p>
          <Button variant="secondary" className="mt-auto">
            Adquirir
          </Button>
        </CardFooter>
      </CardContent>
    </Card>
  );
};
