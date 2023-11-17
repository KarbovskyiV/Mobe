import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import axios from "axios";
import Title from "../Title/Title";
import MyRating from "../MyRating/MyRating.jsx";
import Button from "../Button";
import IconsHeart from "../IconsHeart/IconsHeart";
import IconsWeight from "../IconsWeight/IconsWeight";

import style from "./style.scss";

const Promotions = () => {
  const [data, setData] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  const handleAddToCart = (productId) => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.push(productId);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    console.log(`Товар з ID ${productId} доданий до кошика!`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products/");

        if (Array.isArray(response.data.products)) {
          const slicedData = response.data.products.slice(4, 8);
          setData(slicedData);
        } else {
          console.log("Дані не є масивом.");
        }
      } catch (error) {
        console.error("Помилка при завантаженні даних:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 800px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addListener(handleMediaQueryChange);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const renderProduct = (item, index) => (
    <div className="promotions__card" key={index}>
      <div className="promotions__inner">
        <div className="promotions__card-photo">
          <img src={item.images[1]} alt="" />
        </div>
        <div className="promotions__card-content">
          <div className="promotions__card-title">{item.title}</div>
          <div className="promotions__card rating">
            <MyRating />
            <div className="rating__revews">198 відгуків</div>
          </div>
        </div>
        <div className="promotions__price">
          <div className="promotion__price-inner">
            <div className="promotions__card-oldprice">$ 250.99</div>
            <div className="promotions__card-newprice">{item.price}$</div>
          </div>
          <Button type="violet" title="Add to cart" />
        </div>
        <IconsHeart />
        <IconsWeight onClick={() => handleAddToCart(item.id)} />
      </div>
    </div>
  );

  const renderSlider = () => (
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
        <SwiperSlide key={index}>{renderProduct(item, index)}</SwiperSlide>
      ))}
    </Swiper>
  );

  const renderContent = () => (
    <div className="promotions__content">
      {data.map((item, index) => renderProduct(item, index))}
    </div>
  );

  return (
    <section className="promotions">
      <div className="promotions__container">
        <div className="promotions__title">
          <Title text="Promotions" />
        </div>
        {isMobile ? renderSlider() : renderContent()}
      </div>
    </section>
  );
};

export default Promotions;
