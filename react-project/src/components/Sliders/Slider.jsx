import { useRef } from "react";
import { register } from "swiper/element/bundle";

import slide_1 from "../../assets/img/slider/slide_1.png";
import slide_2 from "../../assets/img/slider/slide_2.png";


register();

const slides = [
  {
    src: slide_1,
    title: "IPhone 12",

  },
  {
    src: slide_2,
    title: "Samsung Galaxy 22",

  },
  {
    src: slide_2,
    title: "Samsung Galaxy 22",
  },
];

const Slider = () => {
  const swiperElRef = useRef(null);

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
    >
      {slidesRender}
    </swiper-container>
  );
};

export default Slider;
