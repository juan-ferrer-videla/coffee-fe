import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";

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
    <Card className="mb-8 flex flex-col md:flex-row items-start rounded-lg shadow-lg p-4 w-3/4 transition-transform duration-300 transform hover:scale-110">
      <CardHeader className="w-full md:w-1/3 p-0">
        <Image
          src={img}
          alt={title}
          width={300}
          height={200}
          className="rounded-lg object-cover"
        />
      </CardHeader>
      <CardContent className="flex flex-col justify-between md:ml-4 w-full md:w-2/3 p-0">
        <CardTitle className="text-white text-lg font-semibold mb-2">
          {title}
        </CardTitle>
        <CardDescription className="mb-1 text-white">
          {description}
        </CardDescription>
        <p className="text-sm text-white mb-1">
          {is_presencial ? "Presencial" : "Virtual"}
        </p>
        <p className="text-sm text-white mb-2">Precio: ${price}</p>
      </CardContent>
      <CardFooter className="ml-4 flex-col text-sm text-white mt-4 w-1/3 md:mt-0 p-0">
        <p>Instructor: {instructor}</p>
        <p>{instructorDescription}</p>
      </CardFooter>
    </Card>
  );
};
