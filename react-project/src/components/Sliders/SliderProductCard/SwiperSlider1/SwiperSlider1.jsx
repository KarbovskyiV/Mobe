import React, { useRef, useEffect, useState } from "react";
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
      src: "./images/SilverVertical/silverVertical1.jpg",
    },
    {
      src: "./images/SilverVertical/silverVertical2.jpg",
    },
    {
      src: "./images/SilverVertical/silverVertical3.jpg",
    },
    {
      src: "./images/SilverVertical/silverVertical4.jpg",
    },
    {
      src: "./images/SilverVertical/silverVertical5.jpg",
    },
    {
      src: "./images/SilverVertical/silverVertical6.jpg",
    },
  ];

  const silverBig = [
    {
      src: "./images/Silver/silver1.jpg",
    },
    {
      src: "./images/Silver/silver2.jpg",
    },
    {
      src: "./images/Silver/silver3.jpg",
    },
    {
      src: "./images/Silver/silver4.jpg",
    },
    {
      src: "./images/Silver/silver5.jpg",
    },
    {
      src: "./images/Silver/silver6.jpg",
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
      src: "./images/BlackVertical/image6.jpg",
    },
  ];

  const blackBig = [
    {
      src: "./images/Black/black1.jpg",
    },
    {
      src: "./images/Black/black2.jpg",
    },
    {
      src: "./images/Black/black3.jpg",
    },
    {
      src: "./images/Black/black4.jpg",
    },
    {
      src: "./images/Black/black5.jpg",
    },
    {
      src: "./images/Black/black6.jpg",
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
      src: "./images/PurpleVertical/image6.jpg",
    },
  ];

  const purpleBig = [
    {
      src: "./images/Purple/purpleBig1.jpg",
    },
    {
      src: "./images/Purple/purpleBig2.jpg",
    },
    {
      src: "./images/Purple/purpleBig3.jpg",
    },
    {
      src: "./images/Purple/purpleBig4.jpg",
    },
    {
      src: "./images/Purple/purpleBig5.jpg",
    },
    {
      src: "./images/Purple/purpleBig6.jpg",
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

  const colorSlidesBig = () => {
    if (colorActive === 1) {
      return purpleBig;
    } else if (colorActive === 2) {
      return blackBig;
    } else {
      return silverBig;
    }
  };

  const slidesRender = colorSlides().map((ob, i) => {
    return (
      <SwiperSlide key={i}>
        <img className="slide-images2" src={ob.src} alt="slide" />
      </SwiperSlide>
    );
  });

  const slidesRenderBig = colorSlidesBig().map((ob, i) => {
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
          {slidesRenderBig}
        </Swiper>
      </div>
    </>
  );
}
