import React from "react";
import { register } from "swiper/element/bundle";
import reviewsList from "../../../pages/ProductCard/reviews.json";
import ReviewsSlide from "./Slide-Reviews.jsx";
import { DesktopContext, TabletContext } from "../../../App.js";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import "./style.scss";

register();

const Slider = () => {
  const { desktop } = React.useContext(DesktopContext);
  const { tablet } = React.useContext(TabletContext);

  const slides = () => {
    if (desktop) {
      return 3;
    } else if (tablet) {
      return 2;
    } else {
      return 1;
    }
  };
  const slidesRender = reviewsList.map((item) => {
    return (
      <SwiperSlide key={item.id}>
        <ReviewsSlide {...item} />
      </SwiperSlide>
    );
  });

  return (
    <>
      <swiper-container
        slides-per-view={slides()}
        navigation="true"
        pagination="false"
        autoplay="false"
        loop="true"
        class="slider5"
      >
        {slidesRender}
      </swiper-container>
    </>
  );
};

export default Slider;
