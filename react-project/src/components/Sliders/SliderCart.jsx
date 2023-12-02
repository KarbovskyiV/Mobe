import { useRef } from "react";
import { register } from "swiper/element/bundle";

import src from "../../assets/img/phone.png";
import srcPlus from "../../assets/img/stacker.png";

register();

const slides = [
  {
    src,
    srcPlus,
    title: "Smartphone Apple iPhone 12 128Gb White",
    titlePlus: "Network charger Apple 20W USB-C Power Adapter White",
    price: 27999,
    pricePlus: 999,
  },
  {
    src,
    srcPlus,
    title: "Smartphone Apple iPhone 12 128Gb White",
    titlePlus: "Network charger Apple 20W USB-C Power Adapter White",
    price: 25000,
    pricePlus: 897,
  },
  {
    src,
    srcPlus,
    title: "Smartphone Apple iPhone 12 128Gb White",
    titlePlus: "Network charger Apple 20W USB-C Power Adapter White",
    price: 23999,
    pricePlus: 899,
  },
  {
    src,
    srcPlus,
    title: "Smartphone Apple iPhone 12 128Gb White",
    titlePlus: "Network charger Apple 20W USB-C Power Adapter White",
    price: 21999,
    pricePlus: 599,
  },
  {
    src,
    srcPlus,
    title: "Smartphone Apple iPhone 12 128Gb White",
    titlePlus: "Network charger Apple 20W USB-C Power Adapter White",
    price: 20999,
    pricePlus: 999,
  },
];

const Slider = ({ id, title, price, count, img }) => {
  const swiperElRef = useRef(null);

  const slidesRender = slides.map(
    ({ src, title, titlePlus, price, pricePlus }, i) => {
      return (
        <swiper-slide key={i}>
          <div className="slide__boxes">
            <div className="slide__box">
              <img src={src} alt="fghh" />
              <div className="slide__title">
                <p>{title}</p>
                <span>{price} UAH</span>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 5V19M5 12H19"
                stroke="#28003E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="slide__box">
              <img src={srcPlus} alt="gfhgh" />
              <div className="slide__title">
                <p>{titlePlus}</p>
                <span>{pricePlus} UAH</span>
              </div>
            </div>
          </div>
        </swiper-slide>
      );
    }
  );

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
