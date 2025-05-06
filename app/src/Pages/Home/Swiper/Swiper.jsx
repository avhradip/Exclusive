import { Swiper as SwiperReact, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import b from "/ss.png"

const Swiper = () => {
  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <SwiperReact
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="rounded-lg shadow-md"
      >
        <SwiperSlide>
          <img src={b} alt="Slide 1" className="rounded-md" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={b} alt="Slide 2" className="rounded-md" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={b} alt="Slide 3" className="rounded-md" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={b} alt="Slide 3" className="rounded-md" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={b} alt="Slide 3" className="rounded-md" />
        </SwiperSlide>
      </SwiperReact>
    </div>
  );
};

export default Swiper;
