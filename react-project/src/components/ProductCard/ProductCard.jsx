import React, { useState, useEffect } from "react";
import MyRating from "../MyRating/MyRating";
import Button from "../Button";
import IconsHeart from "../IconsHeart/IconsHeart";
import IconsWeight from "../IconsWeight/IconsWeight";

import {
  addLikedProduct,
  removeLikedProduct,
} from "../../redux/slices/wishlistSlice";

import { useDispatch, useSelector } from "react-redux";

import { addItem } from "../../redux/slices/cartAdd";

import Image from "./Images/image.jpg";
import "./style.scss";
import { Link } from "react-router-dom";
import { addComparedProduct, removeComparedProduct } from "../../redux/slices/compareSlice";
import { hidePopup } from "../../redux/slices/compareSlice";
const ProductCard = ({ item, onAddToCart, title, img, price }) => {
  const dispatch = useDispatch();

  const likedProducts = useSelector(
    (state) => state.likedProducts.likedProducts
  );
  const comparedProducts = useSelector(
    (state) => state.comparedProducts.comparedProducts
  );
  const showPopup = useSelector((state) => state.comparedProducts.showPopup);
  const handleHidePopup = () => {
    dispatch(hidePopup());
  };
  const isCompareProducts = item && comparedProducts.some((product) => product === item);

  const handleCompare = () => {
    dispatch(addComparedProduct(item));
  };
  const handleUnCompare = () => {
    dispatch(removeComparedProduct(item.id));
  };

  const isWishlisted =
    item && likedProducts.some((product) => product === item);

  const handleLike = () => {
    dispatch(addLikedProduct(item));
  };

  const handleUnlike = () => {
    dispatch(removeLikedProduct(item.id));
  };

  const addIntoCart = () => {
    const itemCart = {
      id: item.id,
      title: item.name,
      price: item.price,
      img: Image,
    };
    dispatch(addItem(itemCart));
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
            /* onClick={handleAddToCartClick} */
            onClick={addIntoCart}
          />
        </div>
        <IconsHeart
          className={`heart-product ${isWishlisted ? "selected" : ""}`}
          onClick={isWishlisted ? handleUnlike : handleLike}
        />

        <IconsWeight
          onClick={isCompareProducts ? handleUnCompare : handleCompare}
          className="weght-product"
        />
      </div>
      {showPopup && (
        <div className="popup__compare">
          <button onClick={handleHidePopup}>X</button>
          <p>Only two products can be added to the comparison list</p>
          
        </div>
      )}
    </div>
  );
};

export default ProductCard;
