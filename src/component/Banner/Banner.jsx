import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Keyboard, Autoplay, Pagination, Navigation } from "swiper/modules";
import banner1 from '../../../public/pizza.jpg'
import banner2 from '../../../public/salad1.jpg'
import banner3 from '../../../public/banner2.jpg'
import banner4 from '../../../public/banner3.jpg'

const Banner = () => {
  return (
    <div className="overflow-hidden">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={
            {
                delay : 1000
            }
        }
        
        loop={true}
        navigation={true}
        modules={[Keyboard, Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        <SwiperSlide><img className="w-full object-cover h-[500px]" src={banner1} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full object-cover h-[500px]" src={banner2} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full object-cover h-[500px]" src={banner3} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full object-cover h-[500px]" src={banner4} alt="" /></SwiperSlide>
      
      </Swiper>
    </div>
  );
};

export default Banner;
