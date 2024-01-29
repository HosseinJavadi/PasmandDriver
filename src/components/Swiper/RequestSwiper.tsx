import { A11y, Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { RequestSwiperInterface } from ".";
import { RequestCard, RequestDriverCard } from "../Card";

export const RequestSwiper: React.FC<RequestSwiperInterface> = ({
  items,
  className = "",
}) => {
  return (
    <div className="relative w-full overflow-hidden">
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
        className={`absolute w-[200%] left-[50%] ${className}`}
      >
        {items.map((n, i) => (
          <SwiperSlide>
            <RequestDriverCard {...n} key={i} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
