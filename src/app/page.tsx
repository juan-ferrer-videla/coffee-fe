import { EventCard } from "@/components/card-events";
import imgevent1 from "@/assets/evento-coffe1.jpg";
import imgevent2 from "@/assets/evento-coffe2.jpeg";
import imgevent3 from "@/assets/evento-coffe3.jpg";
import Link from "next/link";

const events = [
  {
    id: 1,
    image: imgevent1,
    title: "Evento de Tecnología",
    date: "15 de Enero, 2025",
    description: "Un evento para discutir las últimas tendencias tecnológicas.",
  },
  {
    id: 2,
    image: imgevent2,
    title: "Taller de Diseño",
    date: "22 de Enero, 2025",
    description: "Aprende técnicas avanzadas de diseño gráfico.",
  },
  {
    id: 3,
    image: imgevent3,
    title: "Cumbre de Innovación",
    date: "29 de Enero, 2025",
    description: "Explora ideas innovadoras en el mundo empresarial.",
  },
];

export default function Home() {
  return (
    <>
      <h1 className="mb-8 scroll-m-20 text-center text-4xl font-extrabold tracking-tight sm:mb-12 md:mb-16 lg:text-5xl xl:text-6xl">
        Universo Coffe
      </h1>
      <h3 className="mb-1 scroll-m-20 text-1xl font-extrabold tracking-tight sm:mb-2 md:mb-2 lg:text-1xl xl:text-2xl">
      Upcoming Events:
      </h3>

      <div className="flex flex-col md:flex-row gap-4">
        {events.map((event) => (
          <Link
            key={event.id}
            href={`/events/${event.id}`}
            className="no-underline"
          >
            <EventCard key={event.id} {...event} />
          </Link>
        ))}
      </div>
    </>
  );
}
