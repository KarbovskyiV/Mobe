import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import slide1 from "../../../../assets/img/slideProduct/image1.jpg";
import slide2 from "../../../../assets/img/slideProduct/image2.jpg";
import slide3 from "../../../../assets/img/slideProduct/image3.jpg";
import slide4 from "../../../../assets/img/slideProduct/image4.jpg";
import slide5 from "../../../../assets/img/slideProduct/image5.jpg";
import slideBig1Mobile from "../../../../assets/img/slideProduct/imageBig1Mobile.jpg";

import "./style2.scss";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function SwiperSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className="slide-box">
        {/* Slider big  */}

        <Swiper
          style={{
            "--swiper-navigation-color": "#28003e",
            "--swiper-pagination-color": "#28003e",
          }}
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <img className="slide-img" src={slideBig1Mobile} alt="slide" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slide-img" src={slideBig1Mobile} alt="slide" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slide-img" src={slideBig1Mobile} alt="slide" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slide-img" src={slideBig1Mobile} alt="slide" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slide-img" src={slideBig1Mobile} alt="slide" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slide-img" src={slideBig1Mobile} alt="slide" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slide-img" src={slideBig1Mobile} alt="slide" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slide-img" src={slideBig1Mobile} alt="slide" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slide-img" src={slideBig1Mobile} alt="slide" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slide-img" src={slideBig1Mobile} alt="slide" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Slider small gorizontal */}

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="slide-images" src={slide1} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="slide-images" src={slide2} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="slide-images" src={slide3} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="slide-images" src={slide4} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="slide-images" src={slide5} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="slide-images" src={slide1} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="slide-images" src={slide2} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="slide-images" src={slide3} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="slide-images" src={slide4} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="slide-images" src={slide5} alt="slide" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
