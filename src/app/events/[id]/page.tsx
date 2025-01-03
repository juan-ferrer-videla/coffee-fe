import { EventCard } from "@/components/card-events";
import imgevent1 from "@/assets/evento-coffe1.jpg";
import imgevent2 from "@/assets/evento-coffe2.jpeg";
import imgevent3 from "@/assets/evento-coffe3.jpg";
import Image, { StaticImageData } from "next/image";

const events: EventCardProps[] = [
  {
    id: 1,
    image: imgevent1,
    title: "Evento de Cafe",
    date: "15 de Enero, 2025",
    description: "Un evento para discutir las últimas tendencias del cafe.",
  },
  {
    id: 2,
    image: imgevent2,
    title: "Taller de Diseño de Cafe",
    date: "22 de Enero, 2025",
    description: "Aprende técnicas avanzadas de cafe.",
  },
  {
    id: 3,
    image: imgevent3,
    title: "Cumbre de Innovación de Cafe",
    date: "29 de Enero, 2025",
    description: "Explora ideas innovadoras en el mundo del cafe.",
  },
];

interface EventCardProps {
  id: number;
  image: StaticImageData | string;
  title: string;
  date: string;
  description: string;
}

export default async function EventPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  // Convertimos el ID del parámetro en un número
  const id = await Number(params.id);

  // Buscamos el evento correspondiente
  const event = events.find((event) => event.id === id);

  if (!event) {
    return <div>Evento no encontrado</div>;
  }

  return (
    <>
      <h1 className="mb-8 scroll-m-20 text-center text-4xl font-extrabold tracking-tight sm:mb-12 md:mb-16 lg:text-5xl xl:text-6xl">
        {event.title}
      </h1>
      <EventCard key={event.id} {...event} className="flex-row" />
    </>
  );
}
