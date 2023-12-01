import React, { useState, useEffect } from "react";
import MyRating from "../MyRating/MyRating";
import Button from "../Button";
import IconsHeart from "../IconsHeart/IconsHeart";
import IconsWeight from "../IconsWeight/IconsWeight";

import { useDispatch } from "react-redux";
import { addToCompare } from "../../redux/slices/compareSlice";

import Image from "./Images/image.jpg";

import "./style.scss";
import { Link } from "react-router-dom";

const ProductCard = ({ item, onAddToCart }) => {
  const dispatch = useDispatch();
  const comparedProducts = useSelector(
    (state) => state.compare.comparedProducts
  );

  const handleAddToCompare = (productId) => {
    dispatch(addToCompare(productId));
  };

  const handleRemoveFromCompare = (productId) => {
    dispatch(removeFromCompare(productId));
  };

  const isProductInComparison = comparedProducts.includes(item.id);

  const [isHeartSelected, setHeartSelected] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    // Перевірка, чи товар вже є у локальному сховищі
    const storedItems = JSON.parse(localStorage.getItem("cart")) || [];

    setIsInCart(storedItems.includes(item.id));
  }, [item.id]);

  const handleHeartClick = () => {
    setHeartSelected(!isHeartSelected);
    onAddToCart(item.id);
  };

  return (
    <div className="section__card">
      <div className="section__inner">
        <div className="section__card-photo">
          <img src={Image} alt="" />
        </div>
        <div className="section__card-content">
          <Link to={`/product-card/${item.id}`} className="section__card-title">
            {item.name}
          </Link>

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
            title={"Add to Cart"}
            onClick={handleAddToCartClick}
          />
        </div>
        <IconsHeart
          className={`heart-product ${isHeartSelected ? "selected" : ""}`}
          onClick={() => {
            handleHeartClick();
          }}
        />

        <IconsWeight
          className="weght-product"
          onClick={() => {
            onAddToCart(item.id);
            if (isProductInComparison) {
              handleRemoveFromCompare(item.id);
            } else {
              handleAddToCompare(item.id);
            }
          }}
        />
      </div>
    </div>
  );
};

export default ProductCard;
