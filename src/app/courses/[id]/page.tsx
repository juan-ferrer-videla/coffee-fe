import Image, { StaticImageData } from "next/image";
import cursoImg from "@/assets/cursoImg.jpg";
import instructorImg from "@/assets/instructorImg.jpeg";
import { FrequentQuestions } from "@/components/frequent-questions";
import banner from "@/assets/banner-courses.png";
import { Button } from "@/components/ui/button";

const courses: CoursesProps[] = [
  {
    id: 1,
    title: "Curso de Barista",
    description:
      "Aprende a preparar el mejor café del mundo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores excepturi expedita temporibus. Vero aspernatur asperiores, fuga, accusantium earum alias dolor dignissimos fugiat vel, harum a. Consectetur reiciendis eveniet mollitia fuga.",
    img: cursoImg,
    is_presencial: true,
    price: 150000,
    instructor: "Juan Perez",
    instructorImg: instructorImg,
    instructorDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores excepturi expedita temporibus, vero aspernatur asperiores, fuga, accusantium earum alias dolor dignissimos fugiat vel, harum a. Consectetur reiciendis eveniet mollitia fuga.",
    videoUrl: "https://www.youtube.com/embed/Nnxxfi0tuDg?si=7fmxQ3znvp-hDaSG",
  },
  {
    id: 2,
    title: "Curso de Molido de Cafe",
    description:
      "Aprende a preparar el mejor café del mundo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores excepturi expedita temporibus. Vero aspernatur asperiores, fuga, accusantium earum alias dolor dignissimos fugiat vel, harum a. Consectetur reiciendis eveniet mollitia fuga, loren ipsum dolor sit amet consectetur adipisicing elit. Asperiores excepturi expedita temporibus. Vero aspernatur asperiores, fuga, accusantium earum alias dolor dignissimos fugiat vel, harum a. Consectetur reiciendis eveniet mollitia fuga.",
    img: cursoImg,
    is_presencial: false,
    price: 35000,
    instructor: "Juan Perez",
    instructorImg: instructorImg,
    instructorDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores excepturi expedita temporibus.",
    videoUrl: "https://www.youtube.com/embed/Nnxxfi0tuDg?si=7fmxQ3znvp-hDaSG",
  },
  {
    id: 3,
    title: "Curso de Granos de Cafe",
    description:
      "Aprende a preparar el mejor café del mundo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores excepturi expedita temporibus. Vero aspernatur asperiores, fuga, accusantium earum alias dolor dignissimos fugiat vel, harum a. Consectetur reiciendis eveniet mollitia fuga.",
    img: cursoImg,
    is_presencial: true,
    price: 500000,
    instructor: "Juan Perez",
    instructorImg: instructorImg,
    instructorDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores excepturi expedita temporibus.",
    videoUrl: "https://www.youtube.com/embed/Nnxxfi0tuDg?si=7fmxQ3znvp-hDaSG",
  },
];

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

const coursesPresenciales: CoursesPresencialProps[] = [
  {
    id: 1, // Relación con el curso con id 1
    courseId: 1,
    initialDate: "2025-02-01",
    schedule: "9:00 AM - 5:00 PM",
    vacancies: 15,
    location: "Calle 123, Ciudad Café",
    content:
      "Introducción al café, técnicas de preparación, cata y métodos manuales.",
  },
  {
    id: 2, // Relación con el curso con id 3
    courseId: 3,
    initialDate: "2025-03-15",
    schedule: "10:00 AM - 4:00 PM",
    vacancies: 20,
    location: "Avenida Barista 456, Ciudad Café",
    content:
      "Cata de cafés especiales, preparación de espresso y técnicas avanzadas.",
  },
];

interface CoursesPresencialProps {
  id: number;
  courseId: number;
  initialDate: string;
  schedule: string;
  vacancies: number;
  location: string;
  content: string;
}

export default async function CourseIdPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = await Number(params.id);
  const course = courses.find((course) => course.id === id);

  if (!course) {
    return <div>Curso no encontrado</div>;
  }

  /* Logica si es presencial o no, igual va a venir de base de datos esto */
  function getPresencialDetails(courseId: number) {
    return coursesPresenciales.find(
      (presencial) => presencial.courseId === courseId
    );
  }

  let presencialDetails = null;
  if (course.is_presencial) {
    presencialDetails = await getPresencialDetails(course.id);
  }

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      {/* TÍTULO */}
      <h1 className="mb-2 text-4xl font-extrabold uppercase tracking-tight lg:text-5xl xl:text-6xl">
        {course.title}
      </h1>
      <Image
        src={banner}
        alt="banner"
        className="w-full object-cover xl:h-96 rounded-2xl shadow-lg"
      />

      {/* SECCIÓN DEL INSTRUCTOR */}
      <div className="mt-6 w-full lg:w-4/5">
        <h2 className="text-3xl mb-6 text-center">Instructor</h2>
        <div className="flex flex-wrap justify-between gap-8 lg:flex-nowrap">
          {/* Tarjeta del Instructor */}
          <div className="flex flex-col md:flex-row w-full lg:w-[48%] shadow-lg rounded-lg overflow-hidden bg-gray-800">
            <Image
              src={course.instructorImg}
              alt="Owner"
              className="w-full md:w-1/3 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold ">{course.instructor}</h2>
              <p className="text-base ">{course.instructorDescription}</p>
            </div>
          </div>

          {/* Video del Curso */}
          <div className="w-full lg:w-[48%]">
            <iframe
              src={course.videoUrl}
              title="YouTube video player"
              className="w-full aspect-video rounded-2xl shadow-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
          </div>
        </div>
      </div>

      {/* DESCRIPCION DEL CURSO DE NUEVO ?? */}
      <div className="mt-2">
        <p className="text-lg text-center mt-4">{course.description}</p>
      </div>

      {/* DETALLES DEL CURSO */}
      <div className="mt-8 w-full lg:w-4/5 bg-gray-800 p-6 rounded-lg shadow-lg">
        {course.is_presencial ? (
          <div>
            <h2 className="text-2xl mb-4 ">Detalles del Curso Presencial</h2>
            <ul className="space-y-2">
              <li>
                <strong className="">Fecha de inicio:</strong>{" "}
                <span className="">{presencialDetails?.initialDate}</span>
              </li>
              <li>
                <strong className="">Horario:</strong>{" "}
                <span className="">{presencialDetails?.schedule}</span>
              </li>
              <li>
                <strong className="">Vacantes disponibles:</strong>{" "}
                <span className="">
                  {presencialDetails?.vacancies
                    ? presencialDetails.vacancies
                    : "No hay vacantes disponibles"}
                </span>
              </li>
              <li>
                <strong className="">Ubicación:</strong>{" "}
                <span className="">{presencialDetails?.location}</span>
              </li>
              <li>
                <strong className="">Contenido:</strong>{" "}
                <span className="">{presencialDetails?.content}</span>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl mb-4 ">Detalles del Curso Virtual</h2>
            <p className="">
              Este curso es completamente en línea. Podrás acceder al contenido
              desde cualquier lugar y seguirlo a tu propio ritmo en esta msima
              pagina, una vez que hayas comprado el curso.
            </p>
          </div>
        )}
      </div>

      {/* PRECIO Y BOTÓN DE COMPRA */}
      <div className="mt-8 w-full lg:w-4/5 flex items-center justify-center lg:flex-row gap-4">
        <p className="text-xl font-bold bg-yellow-500 text-black px-4 py-2 rounded shadow flex items-center justify-center h-full">
          ${course.price}
        </p>
        <Button
          variant="secondary"
          className="w-full lg:w-min flex items-center justify-center px-4 py-2 text-lg h-full"
        >
          Adquirir
        </Button>
      </div>

      {/* PREGUNTAS FRECUENTES */}
      <div className="mt-12 w-full lg:w-4/5">
        <h2 className="text-3xl mb-4 text-center">Preguntas Frecuentes</h2>
        <FrequentQuestions />
      </div>
    </div>
  );
}
