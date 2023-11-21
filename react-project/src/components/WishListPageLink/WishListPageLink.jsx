import React from "react";

import IconsHeart from "../IconsHeart/IconsHeart";

import "./style.scss";

const WishListPageLink = () => {
  return (
    <a href="/wishList">
      <IconsHeart className="relative" />
    </a>
  );
};

export default WishListPageLink;
