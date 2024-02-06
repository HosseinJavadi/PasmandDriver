import { A11y, Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { RequestSwiperInterface } from ".";
import { RequestDriverCard } from "../Card";

export const RequestSwiper: React.FC<
  RequestSwiperInterface & { onClick: (id: string) => void }
> = ({ items, onClick, className = "" }) => {
  return (
    <div className="relative w-full overflow-hidden">
      {items && items.length > 3 ? (
        <Swiper
          modules={[A11y, Autoplay, EffectCoverflow]}
          effect={"coverflow"}
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
          } ${className}`}
        >
          {items.map((n, i) => (
            <SwiperSlide key={i}>
              <RequestDriverCard {...n} onClick={onClick} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : items && items.length > 0 ? (
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
              <RequestDriverCard {...n} onClick={onClick} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <h2 className="w-full text-center py-6 text-sm">
          هیچ درخواستی یافت نشد
        </h2>
      )}
    </div>
  );
};
