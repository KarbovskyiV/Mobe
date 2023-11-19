// Section.jsx
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Title from "../Title/Title";
import ProductCard from "../ProductCard/ProductCard";
import ProductSlider from "../ProductSlider/ProductSlider";

import style from "./style.scss";

const Section = ({ data }) => {
  const [isMobile, setIsMobile] = useState(false);

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

  const handleAddToCart = (productId) => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.push(productId);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    console.log(`Товар з ID ${productId} доданий до кошика!`);
  };

  return (
    <section className="section">
      <div className="section__container">
        {isMobile ? (
          <ProductSlider data={data} onAddToCart={handleAddToCart} />
        ) : (
          <div className="section__content">
            {data.map((item, index) => (
              <ProductCard
                key={index}
                item={item}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Section;
