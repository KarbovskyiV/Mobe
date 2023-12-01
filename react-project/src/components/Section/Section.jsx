// Section.jsx
import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import ProductCard from "../ProductCard/ProductCard";
import ProductSlider from "../ProductSlider/ProductSlider";
import Close from "./images/close.png";
import Alert from "./images/alert.png";
import style from "./style.scss";

const Section = ({ data }) => {
  const [isMobile, setIsMobile] = useState(false);
 
  const [showPopup, setShowPopup] = useState(false);

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
  

    if (!cartItems.includes(productId)) {
      cartItems.push(productId);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      console.log(`Товар з ID ${productId} доданий до кошика!`);
    } else {
      console.log(`Товар з ID ${productId} вже є у кошику!`);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    document.body.classList.remove("popup-open");
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
      {showPopup && (
        <div className="popup">
          <div className="popup-btn">
            <button onClick={handleClosePopup}>
              <img src={Close} alt="" />
            </button>
          </div>
          <div className="popup__inner">
            <img src={Alert} alt="" />
            <p>Only two products can be added to the comparison list</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Section;
