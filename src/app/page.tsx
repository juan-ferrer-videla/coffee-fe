import { EventCard } from "@/components/card-events";
import imgevent1 from "@/assets/evento-coffe1.jpg";
import imgevent2 from "@/assets/evento-coffe2.jpeg";
import imgevent3 from "@/assets/evento-coffe3.jpg";
import img1 from "@/assets/cogollo.webp";
import Link from "next/link";
import { RecommendedProducts } from "@/components/carrousel-products";
import { CarrouselBanner } from "@/components/carrousel-banner";
import { AboutUsCard } from "@/components/about-us-card";
import { AboutUsDescription } from "@/components/about-us-description";
import Image from "next/image";
import logo from "@/assets/cafeLogo.png";

const events = [
  {
    id: 1,
    image: imgevent1,
    title: "Evento de Tecnología",
    date: "15 de Enero, 2025",
    description: "Un evento para discutir las últimas tendencias tecnológicas, loren ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, consectetur adipiscing elit.",
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

const products = [
  {
    title: "Coffee",
    price: 3400,
    id: 1,
    img: img1,
    description: "ashdkasjhdakjsdhas dajk sdaks dasd hasdk asdh",
    is_recommended: true,
  },
  {
    title: "Coffee",
    price: 4000,
    id: 2,
    img: img1,
    description: "ashdkasjhdakjsdhas dajk sdaks dasd hasdk asdh",
    is_recommended: false,
  },
  {
    title: "Coffee",
    price: 5400,
    id: 3,
    img: img1,
    description: "ashdkasjhdakjsdhas dajk sdaks dasd hasdk asdh",
    is_recommended: true,
  },
  {
    title: "Coffee",
    price: 3400,
    id: 4,
    img: img1,
    description: "ashdkasjhdakjsdhas dajk sdaks dasd hasdk asdh",
    is_recommended: false,
  },
  {
    title: "Coffee",
    price: 4000,
    id: 5,
    img: img1,
    description: "ashdkasjhdakjsdhas dajk sdaks dasd hasdk asdh",
    is_recommended: true,
  },
  {
    title: "Coffee",
    price: 5400,
    id: 6,
    img: img1,
    description: "ashdkasjhdakjsdhas dajk sdaks dasd hasdk asdh",
    is_recommended: true,
  },
];

export default function Home() {
  return (
    <>
        <h1 className="flex items-center justify-center mb-8 scroll-m-20 text-center text-4xl font-extrabold tracking-tight sm:mb-12 md:mb-4 lg:text-5xl xl:text-6xl">
          Universo
          <Image
            src={logo}
            alt="logo"
            width={120}
            height={120}
            className="mb-6"
          />
          Coffe.ar
        </h1>

      {/* OFERTS OR PROMOCION BANNER */}
      <div className="mb-8 hidden md:block">
        <CarrouselBanner />
      </div>

      {/*NEXT EVENTS */}

      <h3 className="mb-1 scroll-m-20 text-1xl font-extrabold tracking-tight sm:mb-2 md:mb-6 lg:text-1xl xl:text-2xl">
        Upcoming Events:
      </h3>
      <div className="flex flex-col md:flex-row gap-4 mb-8 sm:mb-12 md:mb-16">
        {events.map((event) => (
          <Link key={event.id} href={`/events/${event.id}`}>
            <EventCard key={event.id} {...event} />
          </Link>
        ))}
      </div>

      {/* RECOMMENDED PRODUCTS */}

      <h3 className="mb-1 scroll-m-20 text-1xl font-extrabold tracking-tight sm:mb-2 md:mb-2 lg:text-1xl xl:text-2xl">
        Recommended Products:
      </h3>
      <div className="mb-8">
        <RecommendedProducts products={products} />
      </div>

      {/* ABOUT US SECTION */}
      <h3 className="mb-4 scroll-m-20 text-center text-4xl font-extrabold tracking-tight sm:mb-6 md:mb-8 lg:text-5xl xl:text-6xl">
        About Us
      </h3>
      <AboutUsDescription />
      <AboutUsCard />
    </>
  );
}
