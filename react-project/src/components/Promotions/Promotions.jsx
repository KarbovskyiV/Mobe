import React, { useEffect, useState } from "react";
import axios from "axios";
import Title from "../Title/Title";
import MyRating from "../MyRating/MyRating.jsx";
import Button from "../Button";

import IconsHeart from "../IconsHeart/IconsHeart";
import IconsWeight from "../IconsWeight/IconsWeight";

import style from "./style.scss";

const Promotions = () => {
  const [data, setData] = useState([]);

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

  return (
    <section className="promotions">
      <div className="promotions__container">
        <div className="promotions__title">
          <Title text="Акції" />
        </div>
        <div className="promotions__content">
          {data.map((item) => (
            <div className="promotions__card" key={item.id} data={item.id}>
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
                    <div className="promotions__card-newprice">
                      {item.price}$
                    </div>
                  </div>
                  <Button type="violet" title="Add to cart" />
                </div>
                <IconsHeart />
                <IconsWeight  onClick={() => handleAddToCart(item.id)} />{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotions;
