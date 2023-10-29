import React, { useRef } from "react";
import { register } from "swiper/element/bundle";

import slide_1 from "../../assets/img/slider/banerBGbig2.jpg";
import slide_1s from "../../assets/img/slider/baner_1.jpg";

import slide_2 from "../../assets/img/slider/BanerMainBig2.jpg";
import slide_2s from "../../assets/img/slider/BanerMain2s.png";

import slide_3 from "../../assets/img/slider/BanerMainBig3.jpg";
import slide_3s from "../../assets/img/slider/BanerMain3s.jpg";
import { CatalogOpenedContext } from "../../App";

register();

const Slider = () => {
  const swiperElRef = useRef(null);

  const { catalogOpened } = React.useContext(CatalogOpenedContext);

  const slides = [
    {
      src: catalogOpened ? slide_1s : slide_1,
      title: "IPhone 12",
    },
    {
      src: catalogOpened ? slide_2s : slide_2,
      title: "Samsung Galaxy 22",
    },
    {
      src: catalogOpened ? slide_3s : slide_3,
      title: "Samsung Galaxy 22",
    },
  ];

  const slidesRender = slides.map(({ src, title, oldPrice, newPrice }, i) => {
    return (
      <swiper-slide key={i}>
        <img src={src} alt={title} />
      </swiper-slide>
    );
  });

  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view="1"
      navigation="true"
      pagination="true"
      autoplay="true"
      loop="true"
      style={
        catalogOpened && window.innerWidth > 850
          ? { marginLeft: 290 }
          : { marginLeft: "auto" }
      }
    >
      {slidesRender}
    </swiper-container>
  );
};

export default Slider;
