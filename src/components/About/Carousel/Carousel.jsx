import { Swiper, SwiperSlide } from "swiper/react";
import { dataCarousel } from "../../data/";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./carousel.css";

import { EffectCards, Pagination, Navigation, Autoplay } from "swiper";

function Carousel() {
  return (
    <div className="md:w-[25vw] md:h-[70vh]">
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "fraction",
        }}
        scrollbar={{
          draggable: true,
        }}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        className="mySwiper h-[45vh] w-[60vw] md:h-full md:w-full"
      >
        {dataCarousel.map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                src={data.imgUrl}
                alt="The Weirdos"
                className="object-cover"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Carousel;
