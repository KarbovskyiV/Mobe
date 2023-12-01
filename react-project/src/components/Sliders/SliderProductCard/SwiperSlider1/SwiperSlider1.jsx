import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { DesktopContext } from "../../../../App";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./style.scss";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function SwiperSlider({ colorActive }) {
  const { desktop } = React.useContext(DesktopContext);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const colorFoto = () => {
    if (colorActive === 1) {
      return "./images/Purple/purpleDesktop.jpg";
    } else if (colorActive === 2) {
      return "./images/Black/blackDesktop.jpg";
    } else return "./images/Silver/imageBig1.jpg";
  };

  const silverVertical = [
    {
      src: "./images/SilverVertical/image1.jpg",
    },
    {
      src: "./images/SilverVertical/image2.jpg",
    },
    {
      src: "./images/SilverVertical/image3.jpg",
    },
    {
      src: "./images/SilverVertical/image4.jpg",
    },
    {
      src: "./images/SilverVertical/image5.jpg",
    },
    {
      src: "./images/SilverVertical/image1.jpg",
    },
    {
      src: "./images/SilverVertical/image2.jpg",
    },
    {
      src: "./images/SilverVertical/image3.jpg",
    },
    {
      src: "./images/SilverVertical/image4.jpg",
    },
    {
      src: "./images/SilverVertical/image5.jpg",
    },
  ];

  const blackVertical = [
    {
      src: "./images/BlackVertical/image1.jpg",
    },
    {
      src: "./images/BlackVertical/image2.jpg",
    },
    {
      src: "./images/BlackVertical/image3.jpg",
    },
    {
      src: "./images/BlackVertical/image4.jpg",
    },
    {
      src: "./images/BlackVertical/image5.jpg",
    },
    {
      src: "./images/BlackVertical/image1.jpg",
    },
    {
      src: "./images/BlackVertical/image2.jpg",
    },
    {
      src: "./images/BlackVertical/image3.jpg",
    },
    {
      src: "./images/BlackVertical/image4.jpg",
    },
    {
      src: "./images/BlackVertical/image5.jpg",
    },
  ];

  const purpleVertical = [
    {
      src: "./images/PurpleVertical/image1.jpg",
    },
    {
      src: "./images/PurpleVertical/image2.jpg",
    },
    {
      src: "./images/PurpleVertical/image3.jpg",
    },
    {
      src: "./images/PurpleVertical/image4.jpg",
    },
    {
      src: "./images/PurpleVertical/image5.jpg",
    },
    {
      src: "./images/PurpleVertical/image1.jpg",
    },
    {
      src: "./images/PurpleVertical/image2.jpg",
    },
    {
      src: "./images/PurpleVertical/image3.jpg",
    },
    {
      src: "./images/PurpleVertical/image4.jpg",
    },
    {
      src: "./images/PurpleVertical/image5.jpg",
    },
  ];

  const colorSlides = () => {
    if (colorActive === 1) {
      return purpleVertical;
    } else if (colorActive === 2) {
      return blackVertical;
    } else {
      return silverVertical;
    }
  };

  const slidesRender = colorSlides().map((ob, i) => {
    return (
      <SwiperSlide key={i}>
        <img className="slide-images2" src={ob.src} alt="slide" />
      </SwiperSlide>
    );
  });

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
          {slidesRender}
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
                desktop ? colorFoto() : "./images/Silver/imageBig1Tablet.jpg"
              }
              alt="slide"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="slide-img2"
              src={
                desktop ? colorFoto() : "./images/Silver/imageBig1Tablet.jpg"
              }
              alt="slide"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="slide-img2"
              src={
                desktop ? colorFoto() : "./images/Silver/imageBig1Tablet.jpg"
              }
              alt="slide"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="slide-img2"
              src={
                desktop ? colorFoto() : "./images/Silver/imageBig1Tablet.jpg"
              }
              alt="slide"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="slide-img2"
              src={
                desktop ? colorFoto() : "./images/Silver/imageBig1Tablet.jpg"
              }
              alt="slide"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="slide-img2"
              src={
                desktop ? colorFoto() : "./images/Silver/imageBig1Tablet.jpg"
              }
              alt="slide"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="slide-img2"
              src={
                desktop ? colorFoto() : "./images/Silver/imageBig1Tablet.jpg"
              }
              alt="slide"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="slide-img2"
              src={
                desktop ? colorFoto() : "./images/Silver/imageBig1Tablet.jpg"
              }
              alt="slide"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="slide-img2"
              src={
                desktop ? colorFoto() : "./images/Silver/imageBig1Tablet.jpg"
              }
              alt="slide"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="slide-img2"
              src={
                desktop ? colorFoto() : "./images/Silver/imageBig1Tablet.jpg"
              }
              alt="slide"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
