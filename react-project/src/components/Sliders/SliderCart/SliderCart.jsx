import { useRef } from "react";
import { register } from "swiper/element/bundle";
import { useSelector } from "react-redux";

import srcPlus from "../../../assets/img/stacker.png";
import slides from "../../../assets/cartSlides.json";
import "./style.scss";
import Button from "../../Button.jsx";

register();

const Slider = ({ id, title, price, count, img }) => {
  const swiperElRef = useRef(null);

  const { items } = useSelector((state) => state.cartAdd);

  let resultArray = items.map((obj1, i) => {
    let matchingObj = slides.find((obj2, a) => i === a);
    return { ...obj1, ...matchingObj };
  });

  const slidesRender = resultArray.map(
    ({ img, title, titlePlus, price, pricePlus }, i) => {
      return (
        <swiper-slide key={i}>
          <div className="swiper__box">
            <div className="slide__box1">
              <img src={img} alt="fghh" />
              <div className="slide__title">
                <p>{title}</p>
                <span>$ {price}</span>
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
            <div className="slide__box2">
              <img src={srcPlus} alt="img" />
              <div className="slide__title">
                <p>{titlePlus}</p>
                <span>$ {pricePlus}</span>
              </div>
            </div>
          </div>
          <div className="shoppingcart__down-summ2">
            <h5>$ {price + pricePlus}</h5>
            <Button type="violet" title="Add to order" />
          </div>
        </swiper-slide>
      );
    }
  );

  return (
    <>
      <swiper-container
        ref={swiperElRef}
        slides-per-view="1"
        navigation="true"
        pagination="true"
        autoplay="false"
        loop="true"
        class="slider1"
      >
        {slidesRender}
      </swiper-container>
    </>
  );
};

export default Slider;
