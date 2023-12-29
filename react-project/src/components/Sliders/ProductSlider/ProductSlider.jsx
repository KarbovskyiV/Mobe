// ProductSlider.jsx
import React from "react";
import { DesktopContext, MobileContext } from "../../../App.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../../ProductCard/ProductCard";
import arrowPrev from "./arrowPrev.svg";
import arrowNext from "./arrowNext.svg";

import "./style.scss";

const ProductSlider = ({ data, onAddToCart, sliderSettings }) => {
  const { desktop } = React.useContext(DesktopContext);

  const NextArrow = (props) => (
    <div
      {...props}
      className="slick-arrow slick-next"
      style={desktop ? { visibility: "visible" } : { visibility: "hidden" }}
    >
      <img src={arrowNext} alt="arrowNext" />
    </div>
  );

  const PrevArrow = (props) => (
    <div
      {...props}
      className="slick-arrow slick-prev"
      style={desktop ? { visibility: "visible" } : { visibility: "hidden" }}
    >
      <img src={arrowPrev} alt="arrowPrev" />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: desktop ? 3 : 2,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    ...sliderSettings,
  };

  return (
    <Slider {...settings}>
      {data.map((item, index) => (
        <div key={index}>
          <ProductCard item={item} onAddToCart={onAddToCart} />
        </div>
      ))}
    </Slider>
  );
};

export default ProductSlider;
