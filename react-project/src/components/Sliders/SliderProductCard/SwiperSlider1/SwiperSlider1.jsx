import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { DesktopContext } from "../../../../App";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import slide1 from "../../../../assets/img/slideProduct/image1.jpg";
import slide2 from "../../../../assets/img/slideProduct/image2.jpg";
import slide3 from "../../../../assets/img/slideProduct/image3.jpg";
import slide4 from "../../../../assets/img/slideProduct/image4.jpg";
import slide5 from "../../../../assets/img/slideProduct/image5.jpg";

import "./style.scss";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function SwiperSlider() {
  const { desktop } = React.useContext(DesktopContext);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className="slide-box">
        {/* Slider small vertical */}
        <Swiper
          onSwiper={setThumbsSwiper}
          navigation={false}
          spaceBetween={10}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          direction="vertical"
          className="mySwiper1"
        >
          <SwiperSlide>
            <img className="slide-images2" src={slide1} alt="slide" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slide-images2" src={slide2} alt="slide" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slide-images2" src={slide3} alt="slide" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slide-images2" src={slide4} alt="slide" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slide-images2" src={slide5} alt="slide" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slide-images2" src={slide1} alt="slide" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slide-images2" src={slide2} alt="slide" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slide-images2" src={slide3} alt="slide" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slide-images2" src={slide4} alt="slide" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slide-images2" src={slide5} alt="slide" />
          </SwiperSlide>
        </Swiper>

        {/* Slider big  */}
        <Swiper
          style={{
            "--swiper-navigation-color": "#28003e",
            "--swiper-pagination-color": "#28003e",
          }}
          speed={500}
          slidestoshow={1}
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <img
              className="slide-img2"
              src={
                desktop
                  ? "./images/imageBig1.jpg"
                  : "./images/imageBig1Tablet.jpg"
              }
              alt="slide"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="slide-img2"
              src={
                desktop
                  ? "./images/imageBig1.jpg"
                  : "./images/imageBig1Tablet.jpg"
              }
              alt="slide"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="slide-img2"
              src={
                desktop
                  ? "./images/imageBig1.jpg"
                  : "./images/imageBig1Tablet.jpg"
              }
              alt="slide"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="slide-img2"
              src={
                desktop
                  ? "./images/imageBig1.jpg"
                  : "./images/imageBig1Tablet.jpg"
              }
              alt="slide"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="slide-img2"
              src={
                desktop
                  ? "./images/imageBig1.jpg"
                  : "./images/imageBig1Tablet.jpg"
              }
              alt="slide"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="slide-img2"
              src={
                desktop
                  ? "./images/imageBig1.jpg"
                  : "./images/imageBig1Tablet.jpg"
              }
              alt="slide"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="slide-img2"
              src={
                desktop
                  ? "./images/imageBig1.jpg"
                  : "./images/imageBig1Tablet.jpg"
              }
              alt="slide"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="slide-img2"
              src={
                desktop
                  ? "./images/imageBig1.jpg"
                  : "./images/imageBig1Tablet.jpg"
              }
              alt="slide"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="slide-img2"
              src={
                desktop
                  ? "./images/imageBig1.jpg"
                  : "./images/imageBig1Tablet.jpg"
              }
              alt="slide"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="slide-img2"
              src={
                desktop
                  ? "./images/imageBig1.jpg"
                  : "./images/imageBig1Tablet.jpg"
              }
              alt="slide"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
