// ProductSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import ProductCard from "../ProductCard/ProductCard";

const ProductSlider = ({ data, onAddToCart }) => (
  <Swiper
    pagination={{ type: "progressbar" }}
    navigation={true}
    slidesPerView={3}
    className="mySwiper"
    breakpoints={{
      320: {
        slidesPerView: 1.2,
        spaceBetween: 24,
      },
      500: {
        slidesPerView: 2.2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2.8,
        spaceBetween: 30,
      },
    }}
  >
    {data.map((item, index) => (
      <SwiperSlide key={index}>
        <ProductCard item={item} onAddToCart={onAddToCart} />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default ProductSlider;
