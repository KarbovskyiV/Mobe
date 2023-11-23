import React from "react";

import IconsHeart from "../IconsHeart/IconsHeart";

import "./style.scss";

const WishListPageLink = ({ className }) => {
  return (
    <a href="/wishList">
      <IconsHeart className={className} />
    </a>
  );
};

export default WishListPageLink;
