import { A11y, Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { RequestSwiperInterface } from ".";
import { RequestDriverCard } from "../Card";
import { ReactElement } from "react";

export const RequestSwiper: React.FC<
  RequestSwiperInterface & { onClick: (id: string) => void }
> = ({ items, onClick, className = "" }) => {
  let elemet: ReactElement;
  if (items && items.length > 3) {
    elemet = (
      <Swiper
        modules={[A11y, Autoplay, EffectCoverflow]}
        effect="coverflow"
        spaceBetween={-10}
        slidesPerView={3}
        loop={true}
        parallax={true}
        autoplay={true}
        speed={1500}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className={` ${
          items.length > 3 ? "absolute w-[200%] left-[50%]" : ""
        } ${className} swiper-coverflow`}
      >
        {items.map((n, i) => (
          <SwiperSlide key={i}>
            <RequestDriverCard {...n} onClick={onClick} buttonName="پذیرفتن" />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  } else if (items && items.length > 0) {
    elemet = (
      <Swiper
        modules={[A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        parallax={true}
        autoplay={true}
        speed={1000}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className={` ${className}`}
      >
        {items.map((n, i) => (
          <SwiperSlide key={i}>
            <RequestDriverCard {...n} onClick={onClick} buttonName="پذیرفتن" />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  } else
    elemet = (
      <h2 className="w-full text-center py-6 text-sm">هیچ درخواستی یافت نشد</h2>
    );
  return <div className="relative w-full overflow-hidden">{elemet}</div>;
};
