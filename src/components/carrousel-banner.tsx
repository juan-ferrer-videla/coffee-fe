"use client";
import banner1 from "@/assets/banner1.jpg";
import banner2 from "@/assets/banner2.jpg";
import banner3 from "@/assets/banner3.jpg";
import Image from "next/image";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

export const CarrouselBanner: React.FC = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      //navigation - ACTIVAR PARA FLECHAS DE NAVEGACION
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      speed={1500}
      loop
    >
      {[banner1, banner2, banner3].map((image, index) => (
        <SwiperSlide key={index} className="mb-0">
          <Image
            src={image}
            alt={`Banner ${index + 1}`} 
            className="w-full object-cover sm:h-90 lg:h-96 "
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
