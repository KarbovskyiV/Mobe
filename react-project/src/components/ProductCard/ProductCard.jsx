import React, { useState } from "react";
import MyRating from "../MyRating/MyRating";
import Button from "../Button";
import IconsHeart from "../IconsHeart/IconsHeart";
import IconsWeight from "../IconsWeight/IconsWeight";

import "./style.scss";

const ProductCard = ({ item, onAddToCart }) => {
  const [isHeartSelected, setHeartSelected] = useState(false);

  const handleHeartClick = () => {
    setHeartSelected(!isHeartSelected);
    onAddToCart(item.id);
  };

  return (
    <div className="section__card">
      <div className="section__inner">
        <div className="section__card-photo">
          <img src={item.images[1]} alt="" />
        </div>
        <div className="section__card-content">
          <div className="section__card-title">{item.title}</div>
          <div className="section__card rating">
            <MyRating />
            <div className="rating__revews">198 відгуків</div>
          </div>
        </div>
        <div className="section__price">
          <div className="promotion__price-inner">
            <div className="section__card-oldprice">$ 250.99</div>
            <div className="section__card-newprice">{item.price}$</div>
          </div>
          <Button
            type="violet"
            title="Add to cart"
            onClick={() => onAddToCart(item.id)}
          />
        </div>
        <IconsHeart
          className={`heart-product ${isHeartSelected ? "selected" : ""}`}
          onClick={handleHeartClick}
        />
        <IconsWeight
          className="weght-product"
          onClick={() => onAddToCart(item.id)}
        />
      </div>
    </div>
  );
};

export default ProductCard;
