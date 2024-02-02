import { Pagination, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import React from "react";
import { SliderInterface } from ".";
import { Image } from "../Image";

export const Slider: React.FC<SliderInterface> = ({ className = "" }) => {
  return (
    <>
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        effect="cards"
        spaceBetween={20}
        slidesPerView={1}
        navigation
        loop={true}
        parallax={true}
        autoplay={true}
        speed={600}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className={`bg-other ${className}`}
      >
        <SwiperSlide>
          <Image src="/categories-banner.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/darkhast-addi.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/home-cover.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/magazine_cover.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
