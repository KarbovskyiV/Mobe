import React, { useEffect } from "react";

import { setComparedProductsCount } from "../../redux/compareSlice";

import IconsHeart from "../IconsHeart/IconsHeart";

import "./style.scss";

const WishListPageLink = () => {
   useEffect(() => {
    console.log("useEffect called");
    const storedItems = JSON.parse(localStorage.getItem("cart")) || [];
    dispatch(setComparedProductsCount(storedItems.length));
  }, [dispatch]);

  return (
    <a href="/compare">
      <IconsHeart className="relative" />
      {comparedProductsCount > 0 && (
        <span className="compare__link">{comparedProductsCount}</span>
      )}
    </a>
  );
};

export default WishListPageLink;
