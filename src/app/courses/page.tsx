import Image from "next/image";
import banner from "@/assets/banner-courses.png";
import { CourseCard } from "@/components/card-courses";
import instructorImg from "@/assets/instructorImg.jpeg";
import Link from "next/link";
import cursoImg from "@/assets/cursoImg.jpg";

const courses = [
  {
  id: 1,
  title: "Curso de Cafe",
  description: "Aprende a preparar el mejor café del mundo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores excepturi expedita temporibus. Vero aspernatur asperiores, fuga, accusantium earum alias dolor dignissimos fugiat vel, harum a. Consectetur reiciendis eveniet mollitia fuga.",
  img: cursoImg,
  is_presencial: true,
  price: 150000,
  instructor: "Juan Perez",
  instructorImg: instructorImg,
  instructorDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores excepturi expedita temporibus.",
  videoUrl: "https://www.youtube.com/embed/Nnxxfi0tuDg?si=7fmxQ3znvp-hDaSG",
},
{
  id: 2,
  title: "Curso de Cafe",
  description: "Aprende a preparar el mejor café del mundo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores excepturi expedita temporibus. Vero aspernatur asperiores, fuga, accusantium earum alias dolor dignissimos fugiat vel, harum a. Consectetur reiciendis eveniet mollitia fuga, loren ipsum dolor sit amet consectetur adipisicing elit. Asperiores excepturi expedita temporibus. Vero aspernatur asperiores, fuga, accusantium earum alias dolor dignissimos fugiat vel, harum a. Consectetur reiciendis eveniet mollitia fuga.",
  img: cursoImg,
  is_presencial: false,
  price: 35000,
  instructor: "Juan Perez",
  instructorImg: instructorImg,
  instructorDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores excepturi expedita temporibus.",
  videoUrl: "https://www.youtube.com/embed/Nnxxfi0tuDg?si=7fmxQ3znvp-hDaSG",
},
{
  id: 3,
  title: "Curso de Cafe",
  description: "Aprende a preparar el mejor café del mundo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores excepturi expedita temporibus. Vero aspernatur asperiores, fuga, accusantium earum alias dolor dignissimos fugiat vel, harum a. Consectetur reiciendis eveniet mollitia fuga.",
  img: cursoImg,
  is_presencial: true,
  price: 500000,
  instructor: "Juan Perez",
  instructorImg: instructorImg,
  instructorDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores excepturi expedita temporibus.",
  videoUrl: "https://www.youtube.com/embed/Nnxxfi0tuDg?si=7fmxQ3znvp-hDaSG",
},];

export default async function Home() {

  return (
    <>
      <div className="flex flex-col items-center text-center">
        <h1 className="mb-8 text-4xl font-extrabold uppercase tracking-tight lg:text-5xl xl:text-6xl">
          Nuestros Cursos
        </h1>
        <Image
          src={banner}
          alt="banner"
          className="mb-6 w-full object-cover xl:h-96 rounded-2xl"
        />
        <div className="mb-12 mt-2">
          <p className="text-lg text-center mt-4">
            We are a team of passionate people whose goal is to improve
            everyone's life through disruptive products. We build great products
            to solve your business problems. loren ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Hic veniam quam et quaerat,
            voluptatibus harum illum magnam dolores totam repudiandae dolore sed
            inventore aspernatur nostrum blanditiis enim sapiente! Laudantium,
            nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Asperiores excepturi expedita temporibus. Vero aspernatur
            asperiores, fuga, accusantium earum alias dolor dignissimos fugiat
            vel, harum a. Consectetur reiciendis eveniet mollitia fuga.
          </p>
        </div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Nnxxfi0tuDg?si=7fmxQ3znvp-hDaSG"
          title="YouTube video player"
          className="frameBorder-4 rounded-2xl referrerPolicy-strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        ></iframe>
      </div>

      <div className="mt-8">
      {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </>
  );
}
